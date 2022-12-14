import { useEffect, useState } from "react";
import SkymapSearch from "./SkymapSearch";
import MessierData from "../Messier.json";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HowToUse from "./HowToUse";

const Skymap = () => {

    const [searchTarget, setSearchTarget] = useState("Galactic Center");

    useEffect(() => {
        if (searchTarget) {
            window.A.aladin('#aladin-lite-div', { survey: 'P/DSS2/color', fov: 5, target: `${searchTarget}` });
        }
        else if (searchTarget === "" || !searchTarget) {
            window.A.aladin('#aladin-lite-div', { survey: 'P/DSS2/color', fov: 60, target: 'galactic center' });
        }
    }, [searchTarget]);


    return (
        <>
            <Container className="p-4">
                <Card className="bg-black">
                    <Row> <Col>

                        <HowToUse />

                    </Col>
                        <Col>
                            <SkymapSearch placeholder="Enter a target..." data={MessierData} searchTarget={searchTarget} setSearchTarget={setSearchTarget} />

                        </Col>
                    </Row>
                    <Card.Title className="text-white"> Current target is: {searchTarget} </Card.Title> <br />

                </Card>
                <div id='aladin-lite-div' style={{ width: '100%', height: '600px' }} />
            </Container>
        </>
    );
};

export default Skymap;
