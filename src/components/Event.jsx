import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getEvent } from "../utils/api";
import moment from "moment";
import ReactPlayer from 'react-player';
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
const Event = () => {
    const { id } = useParams();
    const [event, setEvent] = useState([]);
    useEffect(() => {
        getEvent(id)
            .then((event) => {
                setEvent(event);
            });

    }, [id]);

    return (
        <>
            <Container className="dark">
                <Card className="p-4 bg-black text-white">
                    <Card.Header as="h5">{event.name}</Card.Header>
                    <Card.Text>{moment(event.date).format("dddd, MMMM Do YYYY")}</Card.Text>
                    <Card.Text>{event.location}</Card.Text>
                    <Card.Img className='p-4 bg-black' src={event.feature_image} width='19rem' />
                    <Card.Body>{event.description}</Card.Body>
                    <ReactPlayer url={event.video_url} width="100%" />
                </Card>
            </Container>
        </>
    );
};
export default Event;