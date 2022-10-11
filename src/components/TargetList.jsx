const TargetList = ({target, setTarget}) => {

    const handleChange = (e) => {
        e.preventDefault();
        setTarget("")
    }

    return (
        <section className="search">
        <form onSubmit={handleChange}>
            <label htmlFor="objSearch">Target List</label>
                <select id="objSearch" value={target} onChange={e => setTarget(e.target.value)}>
                    <option key="None" value="None">None</option>
                    <option key="Andromeda" value="Andromeda">Andromeda Galaxy</option>
                    <option key="Orion" value="Orion">Orion Nebula</option>
                    <option key="Eagle Nebula" value="Eagle Nebula">Eagle Nebula</option>
                </select>
        </form>
    </section>
    )
}

export default TargetList;