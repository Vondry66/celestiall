
const SearchForTarget = ({searchTarget, setSearchTarget}) => {

    const handleChange = (e) => {
        e.preventDefault();
        setSearchTarget("")
    }

    return(
        <section>
            <form onSubmit={handleChange}>
                <label htmlFor="search-for-target">Custom search: </label>
                <input placeholder="Enter target name" id="search-for-target" type="text" value={searchTarget} onChange={e => setSearchTarget(e.target.value)}/>
            </form>
        </section>
    )
}

export default SearchForTarget;