import { useEffect, useState } from "react";
import SearchForTarget from "./SearchForTarget";
import SkymapSearch from "./SkymapSearch";
import TargetList from "./TargetList";
import MessierData from "../Messier.json"

const Skymap = () => {

    // const [listTarget, setListTarget] = useState("")
    const [searchTarget, setSearchTarget] = useState("")

    useEffect(() => {
        if(searchTarget ){
            console.log(searchTarget);
            const aladin = window.A.aladin('#aladin-lite-div', { survey: 'P/DSS2/color', fov:5, target: `${searchTarget}`})
        }
        else if(searchTarget === "" ||  ! searchTarget){
            const aladin = window.A.aladin('#aladin-lite-div', { survey: 'P/DSS2/color', fov:60, target: 'galactic center'})
        }
    }, [searchTarget])


    return (
        <>
        {/* <TargetList listTarget={listTarget} setListTarget={setListTarget}/>
        <SearchForTarget searchTarget={searchTarget} setSearchTarget={setSearchTarget}/> */}
        <SkymapSearch placeholder="Enter a target..." data={MessierData} searchTarget={searchTarget} setSearchTarget={setSearchTarget}/>
        <div id='aladin-lite-div' style={{ width: '100%', height: '600px' }} />
        </>
    )
}

export default Skymap;
