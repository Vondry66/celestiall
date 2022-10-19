import React, { useState } from "react";
import { db, auth } from "../firebase-config";
import { addDoc, query, collection, onSnapshot } from "firebase/firestore";
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom";
import moment from "moment";
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import { UserAuth } from "../contexts/AuthContext";


function PostEvent() {
    const { user } = UserAuth();
    const [newDate, setNewDate] = useState([]);
    const [newDescription, setNewDescription] = useState([]);
    const [newLocation, setNewLocation] = useState([]);
    const [newEventLink, setNewEventLink] = useState([]);
    const [eventList, setEventList] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const uploadEvent = async (e) => {
        e.preventDefault();
        await addDoc(collection(db, "postEvents"), {
            date: newDate,
            description: newDescription,
            location: newLocation,
            link: newEventLink
        });
        setNewDate('');
        setNewDescription('');
        setNewLocation('');
        setNewEventLink('');
    };
    const q = query(collection(db, "postEvents"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const newlyPostedEvent = [];
        querySnapshot.forEach((doc) => {
            newlyPostedEvent.push(doc.data());
        });
        setEventList(newlyPostedEvent);
    });
    return (
        <div>

            <>
                {user?.displayName ? <Button variant="primary" onClick={handleShow}>
                    Post an Event
                </Button> : ''}

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Enter the event details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={uploadEvent}>
                            <Form.Group className="mb-3" controlId="date">
                                <Form.Label>Date</Form.Label>
                                <Form.Control
                                    type="date"
                                    autoFocus
                                    name='date'
                                    onChange={(e) => setNewDate(e.target.value)} value={newDate}
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="description"
                            >
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" rows={3}
                                    onChange={(e) => setNewDescription(e.target.value)} value={newDescription} placeholder="Description of the Event"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="location">
                                <Form.Label>Location</Form.Label>
                                <Form.Control
                                    onChange={(e) => setNewLocation(e.target.value)} value={newLocation}
                                    placeholder="Location"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="eventLink">
                                <Form.Label>Event Link</Form.Label>
                                <Form.Control
                                    onChange={(e) => setNewEventLink(e.target.value)} value={newEventLink}
                                    placeholder="Event Link"
                                />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Post Event
                            </Button>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary"
                            onClick={handleClose}>
                            Close
                        </Button>

                    </Modal.Footer>
                </Modal>
            </>
            <Container>
                <Table className=" p-3" striped hover variant="dark" responsive>

                    <thead>
                        <h3>Upcoming Events</h3>
                        <tr>
                            <th>Date</th>
                            <th>Event</th>
                            <th>Location</th>
                            <th>Event Link</th>
                        </tr>
                    </thead>
                    {
                        eventList.map((event) => {
                            return (
                                <tbody >
                                    <tr className="text-white " key={event.id}>
                                        <td className="text-white " >{moment(event.date).format("dddd, MMMM Do YYYY")}</td>
                                        <td className="text-white " >{event.description}   {' '}<Badge bg="primary">New</Badge></td>
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


        </div>
    );

}

export default PostEvent;