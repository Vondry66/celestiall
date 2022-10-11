import { useEffect, useState } from "react";
import TargetList from "./TargetList";

const Skymap = () => {

    const [target, setTarget] = useState("")

    useEffect(() => {
        if(target){
            const aladin = window.A.aladin('#aladin-lite-div', { survey: 'P/DSS2/color', fov:5, target: `${target}`})
        }
        else if(target === 'None' || !target){
            const aladin = window.A.aladin('#aladin-lite-div', { survey: 'P/DSS2/color', fov:60, target: 'trifid'})
        }
    }, [target])


    return (
        <>
        <TargetList target={target} setTarget={setTarget}/>
        <div id='aladin-lite-div' style={{ width: '100%', height: '600px' }} />
        </>
    )
}

export default Skymap;
