import React, { useContext, useEffect, useState } from "react";
import s from './PikemonFilter.module.css'
import { ThemeContext } from "../Context/ThemeContext";

const PikemonFilter = ({onFilter}) => {
  const [nameFilter, setNameFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const {theme, toggleTheme } = useContext(ThemeContext);

  const resetInput = (setNameFilter, setTypeFilter) => {
    setNameFilter("");
    setTypeFilter("all");
  }
  
  // const typeInfo = ['asd', 'asd2', ]

  useEffect(() => {
    onFilter(nameFilter, typeFilter);
  }, [nameFilter, typeFilter, onFilter]);
    
  return (
    <div>
      <form  className={`${theme === 'darkTheme' ? s.darkTheme : s.lightTheme}`} style={{ marginBottom: "20px"}} onSubmit={(event) => { event.preventDefault(); resetInput(setNameFilter, setTypeFilter) }}>
        <input
          type="text"
          placeholder="Filter by name"
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          style={{ marginRight: "10px" }}
        >
          <option value="all">All Types</option>
          <option value="grass">Grass</option>
          <option value="fire">Fire</option>
          <option value="water">Water</option>
          <option value="poison">Poison</option>
          <option value="flying">Flying</option>
          <option value="bug">Bug</option>
          <option value="normal">Normal</option>
          <option value="electric">Electric</option>
        </select>
        <button type="submit">Reset</button>
      </form>
    </div>
  );
};

export default PikemonFilter;
