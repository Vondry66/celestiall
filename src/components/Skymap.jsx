import { useEffect, useState } from "react";
import SearchForTarget from "./SearchForTarget";
import TargetList from "./TargetList";

const Skymap = () => {

    const [listTarget, setListTarget] = useState("")
    const [searchTarget, setSearchTarget] = useState("")

    useEffect(() => {
        if(listTarget || searchTarget ){
            let newTarget = listTarget || searchTarget;
            const aladin = window.A.aladin('#aladin-lite-div', { survey: 'P/DSS2/color', fov:5, target: `${newTarget}`})
        }
        else if((listTarget === 'None' && searchTarget === "") || (!listTarget && ! searchTarget)){
            const aladin = window.A.aladin('#aladin-lite-div', { survey: 'P/DSS2/color', fov:60, target: 'trifid'})
        }
    }, [listTarget, searchTarget])


    return (
        <>
        <TargetList listTarget={listTarget} setListTarget={setListTarget}/>
        <SearchForTarget searchTarget={searchTarget} setSearchTarget={setSearchTarget}/>
        <div id='aladin-lite-div' style={{ width: '100%', height: '600px' }} />
        </>
    )
}

export default Skymap;
