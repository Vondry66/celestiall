import React, { useEffect } from "react";
import GoogleButton from "react-google-button";
import { UserAuth } from '../contexts/AuthContext';
import { useNavigate } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";

const SignIn = () => {
    const { googleSignIn, user } = UserAuth();
    const navigate = useNavigate();

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        if (user != null) {
            navigate('/');
        }
    }, [user]);

    return (
        <div>
            <h1>Sign in</h1>
            <div>
                <Container>
                    <Row></Row>
                    <Row></Row>
                    <Row> <Col></Col>
                        <Col md='auto'>
                            <GoogleButton onClick={handleGoogleSignIn} className=' mb-5' size="lg" />
                        </Col><Col></Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};
export default SignIn;
