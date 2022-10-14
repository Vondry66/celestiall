import React, { useState } from 'react';
import {db} from '../firebase-config'
import { UserAuth } from '../contexts/AuthContext';
import {addDoc, collection, serverTimestamp} from 'firebase/firestore'
import { auth } from '../firebase-config';
// import "../index.css"
import  Button  from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
const style = {
  form: `h-14 w-full max-w-[80px]  flex text-xl absolute bottom-0`,
  input: `w-full text-xl p-3 bg-gray-900 text-dark outline-none border-none`,
  button: `w-[20%] bg-green-500`,
};


const SendMessage = ({scroll}) => {
  const [input, setInput] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault()
    if (input === '') {
        alert('Please enter a valid message')
        return
    }
    const {uid, displayName} = auth.currentUser
    await addDoc(collection(db, 'messages'), {
        text: input,
        name: displayName,
        uid,
        timestamp: serverTimestamp()
    })
    setInput('')
    scroll.current.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <><form onSubmit={sendMessage}>
      <FloatingLabel controlId="floatingTextarea2" label="Message">
        <Form.Control
          as="textarea"
          placeholder="Leave a message here"
          style={{ height: '100px' }}
          onSubmit={sendMessage}
          onChange={(e)=> setInput(e.target.value)}
          value={input}
          type='text'
        />
        <Button type='submit'>Send</Button>
      </FloatingLabel>
      </form>
   
    </>
  );
};

export default SendMessage;