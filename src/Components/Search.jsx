import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useAuth } from "./store/authContext";

function Search(props) {
  const { search} = useAuth();


  return (
    <div className="search-bar" style={{ display: search ? "none" : "block" }}>
      <form action="/">
        <input
          type="number"
          min="1"
          max="10"
          placeholder="Enter a number"
          value={props.onQuary}
          onChange={props.onSearch}
         
        />
        <button   className="search-button">
          <SearchIcon />
        </button>
      </form>
    </div>
  );
}
export default Search;
