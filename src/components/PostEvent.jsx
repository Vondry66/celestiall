import { useState } from "react";
import { db } from "../firebase-config";
import { addDoc, query, collection, getDocs, doc, onSnapshot } from "firebase/firestore";


function PostEvent() {
    const [newDate, setNewDate] = useState([]);
    const [newDescription, setNewDescription] = useState([]);
    const [newLocation, setNewLocation] = useState([]);
    const [newEventLink, setNewEventLink] = useState([]);
    const [eventList, setEventList] = useState([]);

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
    const q = query(collection(db, "postEvents"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const newlyPostedEvent = [];
        querySnapshot.forEach((doc) => {
            newlyPostedEvent.push(doc.data());
        });
        setEventList(newlyPostedEvent);
    });
    return (
        <div>
            <form onSubmit={uploadEvent} >
                <label htmlFor="date"> Date</label>
                <input onChange={(e) => setNewDate(e.target.value)} value={newDate} name='date' placeholder="Date">
                </input>
                <label htmlFor="description"> Description</label>
                <input onChange={(e) => setNewDescription(e.target.value)} value={newDescription} name='description' placeholder="Description">
                </input>
                <label htmlFor="location"> Location</label>
                <input onChange={(e) => setNewLocation(e.target.value)} value={newLocation} name='location' placeholder="Location">
                </input>
                <label htmlFor="eventLink"> Event Link</label>
                <input onChange={(e) => setNewEventLink(e.target.value)} value={newEventLink} name='eventLink' placeholder="Event Link">
                </input>
                <button type="submit">Post Event</button>
            </form>

            <div className="event_body">
                {eventList.map((event) => {
                    return (

                        <li key={event.id}>

                            {event.Description}
                        </li>

                    );
                })}
            </div>
        </div>
    );

}

export default PostEvent;