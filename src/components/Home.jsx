import { getPicture } from "../utils/api";
import { useEffect } from "react";
import { useState } from "react";
import Card from 'react-bootstrap/Card';
const Home = () => {
    const [picture, setPicture] = useState([]);
    useEffect(() => {
        getPicture().then((pic) => {
            
            setPicture(pic);
        });
    }, []);
    return (
        <>

            <Card >
                <Card.Img variant="top" src={picture.hdurl} />
                <Card.Body>
                    <Card.Title> {picture.title}</Card.Title>
                    <Card.Text>
                        {picture.explanation}
                    </Card.Text>

                </Card.Body>
            </Card>

        </>
    );
};

export default Home;