import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import moment from "moment";
import {Button, Container , Row,Col}from "react-bootstrap";
import { getEvents } from "../utils/api";




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
            return(
            <p key={event.id}>{event.description}</p>

            )
        })}
    </div>
        )};
export default Events;
