import React from "react";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { useAuth } from "./store/authContext";

function Header(props) {
  const { search, setSearch } = useAuth();

  function searchHandler() {
    if (search === false) {
      setSearch(true);
    } else if (search === true) {
      setSearch(false);
    }
  }

  return (
    <div className="header">
      <div className="header-logo">
        con
        <ContactPageIcon />
        act
      </div>
      <div className="header-icon">
        <span onClick={searchHandler}>
          {search ? <SearchIcon /> : <CloseIcon />}
        </span>
      </div>
    </div>
  );
}

export default Header;
