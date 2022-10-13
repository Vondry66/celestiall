import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/Users";
import { db } from '../firebase-config.js'


function Users () {
console.log(db.collection)

    useEffect(() => {
        const user = db.collection('Users')
        console.log(user)
    })
}