import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
// import {Button, Container , Row,Col}from "react-bootstrap";
// import {collection,addDoc,doc,deleteDoc,serverTimestamp,onSnapshot,query,orderBy,} from "firebase/firestore";
// import { db } from "../firebase-config";
import { getEvents } from "../utils/api";
import PostEvent from "./PostEvent";



const Events = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        getEvents().then(({ results }) => {
            console.log(results);
            setEvents(results);
        });
    }, []);
    return (
        <>
            <PostEvent />
            <Table style={{ color: "white" }} striped responsive>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Event</th>
                        <th>Location</th>
                        <th>Event Link</th>
                    </tr>
                </thead>
                {
                    events.map((event) => {
                        return (
                            <tbody style={{ color: "white" }} >
                                <tr style={{ color: "white" }} key={event.id}>
                                    <td>{moment(event.date).format("dddd, MMMM Do YYYY")}</td>
                                    <td>{event.name}</td>
                                    <td>{event.location}</td>
                                    <td><Button variant="outline-primary"><Link to={`/events/${event.id}`}>View Event
                                    </Link></Button></td>
                                </tr>
                            </tbody>
                        );
                    })
                }
            </Table>
        </>
    );
};
export default Events;
