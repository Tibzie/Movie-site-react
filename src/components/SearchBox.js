import React from "react";

const SearchBox = (props) => {
    return (
        <>
            <input className="search-box-input" value={props.value} onChange={(event) => props.setSearchValue(event.target.value)} placeholder="Type to search..."></input>
        </>
    );
}

export default SearchBox;