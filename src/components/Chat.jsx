import React from "react";
import { useState } from "react";
import {collection,addDoc,doc,deleteDoc, serverTimestamp,onSnapshot,query,orderBy} from "firebase/firestore"
import { db } from "../firebase-config";
import {UserAuth} from "../contexts/AuthContext"

function Chat(){
    const{user}=UserAuth()
    console.log(user)
const[newMessage,setNewMessage] = useState("")
const[messages,setMessages]=useState([])

const messagesCollRef=collection(db,"messages")
const SendMessage = async ()=>{
    await addDoc(messagesCollRef, {text: newMessage,
    createdAt: serverTimestamp()})
}
const DeleteMessage = async (id, text)=>{
    const messageDoc = doc(db, "messages",id)
    await deleteDoc(messageDoc)
}

const clearMessage =()=>{
    const input= document.getElementById("target")
    input.value=""
}

const q = query(messagesCollRef, orderBy('createdAt'))
onSnapshot(q, (snapshot)=>{
 setMessages(snapshot.docs.map((doc)=>({...doc.data(),id:doc.id})))
})
    return( 
        <div>
            {messages.map(({id,text,createdAt})=>(
                <div key={id}>
                    <p>{user?.displayName}</p>
                    <p>{text}</p>
                   
                    <button onClick={()=>{DeleteMessage(id)}}>Delete</button>
                    
                    
                </div>
            ))}
             <input id="target" className="message-input" placeholder="Type your message here..." type="text" onChange={(e)=>{setNewMessage(e.target.value)}}/>
    <button className="send-message" onClick={SendMessage}>Send Message</button>
    
            
        </div>
        
    )
}

export default Chat