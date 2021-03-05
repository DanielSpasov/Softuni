function Search(props) {
    return (
        <div className="search">
            <form>
                <input name="search" type="text" placeholder="Search books..." />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Search