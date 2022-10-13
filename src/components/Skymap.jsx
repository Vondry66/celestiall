import { useEffect, useState } from "react";
import SkymapSearch from "./SkymapSearch";
import MessierData from "../Messier.json"

const Skymap = () => {

    const [searchTarget, setSearchTarget] = useState("Galactic Center")

    useEffect(() => {
        if(searchTarget ){
            window.A.aladin('#aladin-lite-div', { survey: 'P/DSS2/color', fov:5, target: `${searchTarget}`})
        }
        else if(searchTarget === "" ||  ! searchTarget){
            window.A.aladin('#aladin-lite-div', { survey: 'P/DSS2/color', fov:60, target: 'galactic center'})
        }
    }, [searchTarget])


    return (
        <>
        <p>
            Welcome to our Sky Map page! <br />
            In the search bar below, you can search for deep sky objects from the Messier Catalogue by their Messier number e.g M1, or by their name if they have one. <br />
            Simply start typing and choose from the list that appears to perform the search and view the target on the sky map. <br/>
            The clear button will clear your search and return you to the galactic center. <br/>
            Your current target is displayed above the map.
        </p>
        <SkymapSearch placeholder="Enter a target..." data={MessierData} searchTarget={searchTarget} setSearchTarget={setSearchTarget}/>
        <p>Current target is: {searchTarget}</p>
        <div id='aladin-lite-div' style={{ width: '100%', height: '600px' }} />
        </>
    )
}

export default Skymap;
