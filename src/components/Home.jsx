<<<<<<< HEAD
import { getPicture } from "../utils/api"
import { useEffect } from "react"
import { useState } from "react"

const Home = ()=>{
    const[picture,setPicture]=useState([])
    useEffect(()=>{
        getPicture().then((pic)=>{
            console.log(pic)
            setPicture(pic)
        })
    },[])
=======
import { getPicture } from "../utils/api";
import { useEffect } from "react";
import { useState } from "react";
const Home = () => {
    const [picture, setPicture] = useState([]);
    useEffect(() => {
        getPicture().then((pic) => {
            console.log(pic);
            setPicture(pic);
        });
    }, []);
>>>>>>> 407d14b34246b4b22e4f56c59d04ed7650b6942a

    return (<section>
        <h3>Picture of the day</h3>
        <img className="picture" src={picture.hdurl} alt={picture.title} />
        <p>{picture.title}</p>
        <p>{picture.explanation}</p>


    </section>);
};

export default Home;