import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import moment from "moment";
// import {Button, Container , Row,Col}from "react-bootstrap";
// import {collection,addDoc,doc,deleteDoc,serverTimestamp,onSnapshot,query,orderBy,} from "firebase/firestore";
// import { db } from "../firebase-config";
import { getEvents } from "../utils/api";



// function live(){
//     const[newlive,setNewLive] = useState("")
//     const[live,setLive] = useState([])
//     const liveCollRef = collection(db,"live")
//     const startLive = async()=>{}

// }

const Events = ()=>{
    const [events,setEvents] = useState([]);
    useEffect(()=>{
        getEvents().then(({results})=>{
            console.log(results);
            setEvents(results);
        });
 },[]);
 return (
    <div>
        {events.map((event)=>{
            return (
              <div>
                <h3>{event.name}</h3>
                <p>{moment(event.date).format("dddd, MMMM Do YYYY")}</p>
                <p>{event.location}</p>
                {/* <p>{event.url}</p>
                <p>{event.video_url}</p> */}
                <p key={event.id}>{event.description}</p>
                <img src={event.feature_image}/>
              </div>
            );
        })}
    </div>
        )};
export default Events;
