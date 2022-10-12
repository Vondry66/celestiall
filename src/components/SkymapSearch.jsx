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

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchTarget("Galactic Center")
    }

    return (
        <section className="search">
            <form className="searchInput" onSubmit={handleSubmit}>
                <input id="target" type="text" placeholder={placeholder} onChange={handleFilter}/>
                <button>Search</button>
            </form>
            {filteredData.length !== 0 && (
            <div className="dataResult">
                {filteredData.map((value) => {
                    if (value.name === "") {
                        return <p className="dataItem" key={value.messier_id} onClick={e => setSearchTarget(value.messier_id)} >{value.messier_id}</p>
                    }
                    else {
                        return <p className="dataItem" key={value.messier_id} onClick={e => setSearchTarget(value.messier_id)}>{value.messier_id}, {value.name}</p>
                    }
                })}
            </div>
            )}
        </section>
    )
}

export default SkymapSearch;