const TargetList = ({listTarget, setListTarget}) => {

    const handleChange = (e) => {
        e.preventDefault();
        setListTarget("")
    }

    return (
        <section className="search">
        <form onSubmit={handleChange}>
            <label htmlFor="objSearch">Target List: </label>
                <select id="objSearch" value={listTarget} onChange={e => setListTarget(e.target.value)}>
                    <option key="None" value="None">No target</option>
                    <option key="Andromeda" value="Andromeda">Andromeda Galaxy</option>
                    <option key="Orion" value="Orion">Orion Nebula</option>
                    <option key="Eagle Nebula" value="Eagle Nebula">Eagle Nebula</option>
                </select>
        </form>
    </section>
    )
}

export default TargetList;