import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");
  return (
    <form className="form-inline" onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity(""); //Agregado para que se limpie el input y el estado de city que lo representa despues de un submit.
    }}>
      <input
        className = "form-control mr-sm-2"
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <input className="btn btn-outline-success my-2 my-sm-0" type="submit" value="Agregar" />
    </form>
  );
}
