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

return (<section>
    <h3>Picture of the day</h3>
    <img className="picture" src={picture.hdurl} alt="picture of the day" />
    <p>{picture.title}</p>
    <p>{picture.explanation}</p>
  
</section>)
}

export default Home