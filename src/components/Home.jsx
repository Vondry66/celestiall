import { getPicture } from "../utils/api";
import { useEffect } from "react";
import { useState } from "react";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PhotoCarousel from "./PhotoCarousel";
import Ratio from 'react-bootstrap/Ratio';
import { Container } from "react-bootstrap";
const Home = () => {
    const [picture, setPicture] = useState([]);
    useEffect(() => {
        getPicture().then((pic) => {

            setPicture(pic);
        });
    }, []);
    return (
        <>
            <Container className='p-5'>
                <Card className="bg-black" > <PhotoCarousel /></Card>
                <Card className="bg-black" >
                    <Row className='p-6'>
                        <Col className="p-4">
                            <Ratio aspectRatio={3 / 4}>
                                <Card.Img className="mt-4"
                                    style={{ maxWidth: '100%', maxHeight: 'auto' }}
                                    variant="center" src={picture.hdurl}
                                />
                            </Ratio>
                        </Col>
                        <Col >
                            <Card.Body>
                                <Card.Title className="text-white p-4 mt-4"> {picture.title}</Card.Title>
                                <Card.Text className="p-4 text-white" >
                                    {picture.explanation}
                                </Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </Container>
        </>
    );
};

export default Home;