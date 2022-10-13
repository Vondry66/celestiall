import React from "react";
import "./SkymapSearch.css";
import { useState } from "react";

const SkymapSearch = ({placeholder, data, setSearchTarget}) => {

    const [filteredData, setFilteredData] = useState([]);

    const handleFilter = (e) => {
        const searchTerm = e.target.value
        const newFilter = data.filter((value) => {
            return value.messier_id.toLowerCase().includes(searchTerm) || value.name.toLowerCase().includes(searchTerm)
        });
        if(searchTerm === "") {
            setFilteredData([])
        } else {
            setFilteredData(newFilter)
        }
    }

    const updateInput = (e) => {
        const input = document.getElementById("target")
        const newInput = {e}
        input.value = newInput.e.target.innerHTML
        
    }

    const clearInput = () => {
        const input = document.getElementById("target")
        input.value = "";
    }

    return (
        <section className="search">
            <form className="searchInput">
                <input id="target" type="text" placeholder={placeholder} onChange={handleFilter}/>
                <button onClick={clearInput}>Clear</button>
            </form>
            {filteredData.length !== 0 && (
            <div className="dataResult">
                {filteredData.map((value) => {
                    if (value.name === "") {
                        return <p className="dataItem" key={value.messier_id} onClick={(e) =>{ 
                            setSearchTarget(value.messier_id) 
                            updateInput(e)
                        }} >
                            {value.messier_id}
                        </p>
                    }
                    else {
                        return <p className="dataItem" key={value.messier_id} onClick={(e) => {
                            setSearchTarget(value.name)
                            updateInput(e)
                        }}>
                            {value.messier_id}, {value.name}
                        </p>
                    }
                })}
            </div>
            )}
        </section>
    )
}

export default SkymapSearch;