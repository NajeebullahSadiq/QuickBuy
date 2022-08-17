import React from 'react'
import { useState } from 'react';

export default function SearchBox(props) {
  const [name, setName] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    props.history.push(`/search/name/${name}`);
  };
  return (
    <form
      className="form-inline justify-content-between"
      onSubmit={submitHandler}
    >
      <input
        className="form-control mr-sm-2 bg-light btn-outline-info input-group-lg"
        type="search"
        name="q"
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button className="btn btn- my-2 my-sm-0 bg-dark" type="submit">
        <i className="fa fa-search"></i>
      </button>
    </form>
  );
}