import React from "react";
import { Link } from "react-router-dom";
import { IoAdd } from "react-icons/io5";

const AddNotePageButton = () => {
  return (
    <section className="homepage__action">
      <Link to="/notes/new"><button className="action"><IoAdd /></button></Link>
    </section>
  );
}

export default AddNotePageButton;
