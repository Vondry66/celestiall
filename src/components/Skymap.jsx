import { useEffect, useState } from "react";
import SkymapSearch from "./SkymapSearch";
import MessierData from "../Messier.json"

const Skymap = () => {

    const [searchTarget, setSearchTarget] = useState("Galactic Center")

    useEffect(() => {
        if(searchTarget ){
            const aladin = window.A.aladin('#aladin-lite-div', { survey: 'P/DSS2/color', fov:5, target: `${searchTarget}`})
        }
        else if(searchTarget === "" ||  ! searchTarget){
            const aladin = window.A.aladin('#aladin-lite-div', { survey: 'P/DSS2/color', fov:60, target: 'galactic center'})
        }
    }, [searchTarget])


    return (
        <>
        <SkymapSearch placeholder="Enter a target..." data={MessierData} searchTarget={searchTarget} setSearchTarget={setSearchTarget}/>
        <p>Current target is: {searchTarget}</p>
        <div id='aladin-lite-div' style={{ width: '100%', height: '600px' }} />
        </>
    )
}

export default Skymap;
