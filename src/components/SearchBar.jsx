import React, { useState } from "react";
import './SearchBar.scss';

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");
  return (
    <form className="form-inline" onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity(""); //Agregado para que se limpie el input y el estado de city que lo representa despues de un submit.
    }}>
      <input
        className = "search-bar--form form-control mr-sm-2"
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <input className="search-bar--button btn btn-outline-success" type="submit" value="Agregar" />
    </form>
  );
}
