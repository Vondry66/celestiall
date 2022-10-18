import { useState } from "react";
import { db } from "../firebase-config";
import { collection, onSnapshot } from "firebase/firestore";
function ShowEvent() {
  const [showEvent, setShowEvent] = useState([]);
  const colRef = collection(db, "postEvents");
  onSnapshot(colRef, (snapshot) => {
    let newEvent = [];
    snapshot.docs.forEach((doc) => {
      newEvent.push({ ...doc.data(), id: doc.id });
    });
    console.log(newEvent);
    setShowEvent(newEvent);
  });
  return (
    <div>
      {showEvent.map((event) => {
        return <p>{event.Description}</p>;
      })}
    </div>
  );
}
export default ShowEvent;
