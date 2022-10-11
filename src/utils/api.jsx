import axios from "axios"

const nasaApi = axios.create({
    baseURL: "https://api.nasa.gov/planetary/apod?api_key=HI8kOXtwnr8RB3Hr1LYI0OiE86UxIxtgCFfAdbWJ",
})

export const getPicture =()=>{
    return nasaApi.get().then((res)=>{
        return res.data
    })
}