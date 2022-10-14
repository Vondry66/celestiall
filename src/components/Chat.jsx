import React, { useState, useEffect, useRef } from 'react';
import Message from './Message';
import SendMessage from './SendMessage';
import { db } from '../firebase-config';
import { query, collection, orderBy, onSnapshot } from 'firebase/firestore';
import { UserAuth } from '../contexts/AuthContext';
import  Container  from 'react-bootstrap/Container';
import  Card  from 'react-bootstrap/Card';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();
  const {user}=UserAuth()

  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timestamp'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
        <Container>
      <Card style={{ width: '58rem', display: 'inline-block'}} sm={2}>
        {messages &&
          messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
     
      
      <SendMessage scroll={scroll} />
      <span ref={scroll}></span>
      </Card>
      </Container>
    </div>
  );
};

export default Chat;