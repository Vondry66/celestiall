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
import { Container } from "react-bootstrap";



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
            <Container>
                <Table className="text-white p-3" responsive>

                    <thead>
                        <h3>Past Events</h3>
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
                                <tbody >
                                    <tr className="text-white " key={event.id}>
                                        <td className="text-white " >{moment(event.date).format("dddd, MMMM Do YYYY")}</td>
                                        <td className="text-white " >{event.name}</td>
                                        <td className="text-white " >{event.location}</td>
                                        <td className="text-white " ><Button variant="outline-secondary"><Link className="text-white" to={`/events/${event.id}`}>View Event
                                        </Link></Button></td>
                                    </tr>
                                </tbody>
                            );
                        })
                    }
                </Table>
            </Container>
        </>
    );
};
export default Events;
