import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../redux/noteslice";

const NotesFilter = ({ setSearch }) => {

  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    setSearch(searchText);
  };
 
  return (
    <div className="mt-4">
        
<div className="d-flex justify-content-between align-items-center">
  <div className="d-flex">


        <input
          type="text"
          className="form-control"
          placeholder="Search notes..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button
          className="btn btn-primary p-2"
          onClick={handleSearch}
        >
          Search
        </button>

      </div>

      <div className="d-flex gap-2">

        <button
          className="btn btn-secondary"
          
          onClick={() => dispatch(setFilter("all"))}
        >
          All Notes
        </button>

        <button
          className="btn btn-warning"
          onClick={() => dispatch(setFilter("important"))}
        >
          Important Notes
        </button>

      </div>
</div>
    

    </div>
  );
};

export default NotesFilter;