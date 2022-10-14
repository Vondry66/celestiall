import { useState } from "react";
import { storage } from "../firebase-config";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { useEffect } from "react";
import Image from "react-bootstrap/Image";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
const Photos = () => {
    const [imageUpload, setImageUpload] = useState(null);
    const [imageList, setImageList] = useState([]);
    const imageListRef = ref(storage, "images/");
    const uploadImage = () => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {

                setImageList((curr) => [...curr, url]);
            });
        });
    };
    useEffect(() => {
        listAll(imageListRef).then((res) => {
            res.items.forEach((item) => {
                getDownloadURL(item).then((url) => { setImageList((curr) => [...curr, url]); });
            });
        });
    }, []);
    return (
        <Container className="bg">
            <InputGroup className="m-3 p-2">

                <Form.Control className="m-2" onChange={(e) => { setImageUpload(e.target.files[0]); }} type="file" multiple />
                <Button className="m-2" onClick={uploadImage} >Upload Image</Button>
            </InputGroup>
            <Row>
                {imageList.map((url) => {
                    return <Col md={3} className="m-auto"><Image src={url} fluid className="p-1 m-2 w-100 d-block" thumbnail /></Col>;
                }
                )}
            </Row>
        </Container>
    );
};
export default Photos;