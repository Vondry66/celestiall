import axios from "axios"

export const getApi =()=>{
    axios.get('https://api.nasa.gov/planetary/apod?api_key=HI8kOXtwnr8RB3Hr1LYI0OiE86UxIxtgCFfAdbWJ').then((data)=>{
        console.log(data)
    })
}