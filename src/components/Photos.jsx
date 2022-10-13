import { useState } from "react"
import { storage } from "../firebase-config"
import {ref, uploadBytes,listAll,getDownloadURL} from "firebase/storage"
import {v4} from "uuid"
import { useEffect } from "react"
const Photos= ()=>{
    const[imageUpload,setImageUpload]=useState(null)
    const [imageList,setImageList]=useState([])
    const imageListRef = ref(storage, "images/")
    const uploadImage = ()=>{
        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`)
        uploadBytes(imageRef, imageUpload).then((snapshot)=>{
            getDownloadURL(snapshot.ref).then((url)=>{

                setImageList((curr)=>[...curr,url])
            })
        })

    }
    useEffect(()=>{
        listAll(imageListRef).then((res)=>{
            res.items.forEach((item)=>{
                getDownloadURL(item).then((url)=>{setImageList((curr)=>[...curr,url])})
            })
        })
    },[])
    return <div>
        <input type="file" onChange={(e) =>{setImageUpload(e.target.files[0])}} />
        <button onClick={uploadImage} >Upload Image</button>
        {imageList.map((url)=>{
            return <img src={url} />
        })}
           </div>
}
export default Photos