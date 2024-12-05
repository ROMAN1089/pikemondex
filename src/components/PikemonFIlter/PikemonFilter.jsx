import React from "react";
import s from "./PikemonFilter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../../stores/filterSlice";

const PikemonFilter = ({ onFilter }) => {
  const dispatch = useDispatch(); 
  const { theme } = useSelector((state) => state.theme)
  
  const {nameFilter, typeFilter} = useSelector((state) => state.filter);

  const typeInfo = [
    "all",
    "grass",
    "fire",
    "water",
    "poison",
    "flying",
    "bug",
    "normal",
    "electric",
  ];

  const handleReset = () => {
    dispatch(setFilters({nameFilter: "", typeFilter: "all"}));
  }

  const handleNameFilter = (e) => {
    dispatch(setFilters({nameFilter: e.target.value }));
  }

  const handleTypeFilter = (e) => {
    dispatch(setFilters({typeFilter: e.target.value }));
  }

  return (
    <div>
      <form
        className={`${theme === "darkTheme" ? s.darkTheme : s.lightTheme}`}
        style={{ marginBottom: "20px" }}
        onSubmit={(event) => {
          event.preventDefault();
          handleReset();
        }}
      >
        <input
          type="text"
          placeholder="Filter by name"
          value={nameFilter}
          onChange={
            handleNameFilter
          }
          style={{ marginRight: "10px" }}
        />
        <select
          value={typeFilter}
          onChange={
            handleTypeFilter
          }
          style={{ marginRight: "10px" }}
        >
          {typeInfo.map((type) => (
            <option key={type} value={type}>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </option>
          ))}
        </select>
        <button type="submit">Reset</button>
      </form>
    </div>
  );
};

export default PikemonFilter;
