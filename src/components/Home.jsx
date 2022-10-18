import { getPicture } from "../utils/api";
import { useEffect } from "react";
import { useState } from "react";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PhotoCarousel from "./PhotoCarousel";
import Ratio from 'react-bootstrap/Ratio';
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
                <Row>
                    <Col className="p-5">
                        <Ratio aspectRatio={3 / 4}>
                            <Card.Img
                                style={{ maxWidth: '100%', maxHeight: 'auto' }}
                                variant="center" src={picture.hdurl}
                            />
                        </Ratio>
                    </Col>
                    <Col >
                        <Card.Body>
                            <Card.Title className="p-4 mt-4"> {picture.title}</Card.Title>
                            <Card.Text className="p-4" >
                                {picture.explanation}
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>

            <Card > <PhotoCarousel /></Card>
        </>
    );
};

export default Home;