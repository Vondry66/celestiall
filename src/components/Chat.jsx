import React from "react";
import { useState,useEffect } from "react";
import {collection, getDocs, addDoc,doc,deleteDoc} from "firebase/firestore"
import { db } from "../firebase-config";

function Chat(){
const[newMessage,setNewMessage] = useState("")
const[messages,setMessages]=useState([])
const messagesCollRef=collection(db,"messages")
const SendMessage = async ()=>{
    await addDoc(messagesCollRef, {text: newMessage})
}
const DeleteMessage = async (id, text)=>{
    const messageDoc = doc(db, "messages",id)
    await deleteDoc(messageDoc)
}
useEffect(()=>{
    const getMessages = async()=>{
        const data = await getDocs(messagesCollRef)
        console.log(data.docs)
        setMessages(data.docs.map((doc)=>({...doc.data(),id: doc.id})))
    }
    getMessages()

},[])
    return(
        <div>
            {messages.map(({id,text})=>(
                <div key={id}>
                    <p>{text}</p>
                    <button onClick={()=>{DeleteMessage(id)}}>Delete</button>
                    
                    
                </div>
            ))}
             <input placeholder="Type your message here..." type="text" onChange={(e)=>{setNewMessage(e.target.value)}}/>
    <button onClick={SendMessage}>Send Message</button>
            
        </div>
    )
}
export default Chat