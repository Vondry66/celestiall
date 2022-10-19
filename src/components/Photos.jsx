import { useState } from "react";
import { db, storage } from "../firebase-config";
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
import { addDoc,collection,onSnapshot,query} from "firebase/firestore";
const Photos = () => {
    const [imageUpload, setImageUpload] = useState(null);
    const [imageList, setImageList] = useState([]);
    const imageListRef = ref(storage, "images/");
    const [desc,setDesc]= useState("")
  
    const uploadImage = () => {
        let tempImageURL = "";
        if (imageUpload == null) return;
        let imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
               
                tempImageURL=url
                
            }).then(()=>{
                const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
                const picRef = collection(db,"pictures");
                addDoc(picRef,{
                    description: desc,
                    url: tempImageURL
                })
                
            })
        });
    };
   
   
    const handleClick = ()=>{
        uploadImage();
        // uploadDescription();
        setDesc('')
    }
    
   useEffect(()=>{
    const q = query(collection(db, "pictures"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const newlyPostedPic = [];
        querySnapshot.forEach((doc) => {
            newlyPostedPic.push(doc.data());
        });
        setImageList(newlyPostedPic);
        
    });
    return()=>unsubscribe()
   },[])
   


    return (
        <Container className="bg">
            <InputGroup className="m-3 p-2">

                <Form.Control className="m-2" onChange={(e) => { setImageUpload(e.target.files[0]); }} type="file" multiple />
                <Form.Control className="m-2" onChange={(e)=> {setDesc(e.target.value)}} type="text" required placeholder="Please describe your picture" value={desc}/>
                <Button className="m-2" onClick={handleClick} >Upload Image</Button>
            </InputGroup>
            <Row>
                
                {imageList.map((url) => {
               
                    return <Col key={url.id} md={3} className="m-auto"><Image src={url.url} fluid className="p-1 m-2 w-100 d-block" thumbnail />
                    <p>{url.description} </p></Col>;
                }
                )}
                
            </Row>
        </Container>
    );
};
export default Photos;