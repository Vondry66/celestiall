import React from 'react';
import {UserAuth} from '../contexts/AuthContext'
import { auth } from '../firebase-config';
import Stack from "react-bootstrap/Stack"
// import "../index.css"

const style = {
  message: `flex items-center shadow-xl m-4 py-4 px-3 rounded-tl-full rounded-tr-full`,
  name: `absolute mt-[-4rem] text-grey-600 text-xs`,
  sent: `bg-[#3b82f6] text-dark flex-row-reverse text-end float-right rounded-bl-full `,
  received: `bg-[#e5e5ea] text-dark float-left flex-row-reverse m-4 py-2 px-3`,
};

const Message = ({ message }) => {
    
 

  return (<>
    <Stack gap={2} >
      <div>
        <p className={`messageClass ${message.uid===auth.currentUser.uid ? "right" : "left"}`}>{message.name}</p>
      </div>
    
      <div>
      <p className={`messageClass ${message.uid===auth.currentUser.uid ? "right-msg" : "left-msg"}`}>{message.text}</p>
      </div>
      </Stack>
   </>
  );
};

export default Message;