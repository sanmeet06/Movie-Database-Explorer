import React,{useState} from "react";
import  './SearchBar.css'

const SearchBar =({ onSearch }) =>{
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearchClick = () => {
    // Call the onSearch prop with the current search text
    onSearch(searchText);
  };
    return (
        <div className="search-bar">
      <input type="text"
        placeholder="Search..."
        value={searchText}
        onChange={handleInputChange} />
      <button  onClick={handleSearchClick}>Search</button>
    </div>
    );
}

export default SearchBar;