import { useState } from "react";
import { db } from "../firebase-config";
import { addDoc, collection, getDocs } from "firebase/firestore";


function PostEvent() {
    const [newDate, setNewDate] = useState([]);
    const [newDescription, setNewDescription] = useState([]);
    const [newLocation, setNewLocation] = useState([]);
    const [newEventLink, setNewEventLink] = useState([]);

    const uploadEvent = async (e) => {
        e.preventDefault();
        await addDoc(collection(db, "postEvents"), {
            Date: newDate,
            Description: newDescription,
            Location: newLocation,
            Event_Link: newEventLink
        });
        setNewDate('');
        setNewDescription('');
        setNewLocation('');
        setNewEventLink('');
    };
    const colRef = collection(db, "postEvents");
    getDocs(colRef)
        .then((snapshot) => {
            console.log(snapshot);

        });

    return (
        <div>
            <form onSubmit={uploadEvent} >
                <label htmlFor="date"> Date</label>
                <input onChange={(e) => setNewDate(e.target.value)} value={newDate} name='date'>
                </input>
                <label htmlFor="description"> Description</label>
                <input onChange={(e) => setNewDescription(e.target.value)} value={newDescription} name='description'>
                </input>
                <label htmlFor="location"> Location</label>
                <input onChange={(e) => setNewLocation(e.target.value)} value={newLocation} name='location'>
                </input>
                <label htmlFor="eventLink"> Event Link</label>
                <input onChange={(e) => setNewEventLink(e.target.value)} value={newEventLink} name='eventLink'>
                </input>
                <button type="submit">Post Event</button>
            </form>
        </div>
    );

}

export default PostEvent;