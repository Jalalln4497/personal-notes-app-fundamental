import React from "react";
import { IoCheckmark } from "react-icons/io5";

const AddNewNoteButton = ({ addNoteHandler }) => {
  return (
    <section className="homepage__action">
      <button className="action" onClick={() => addNoteHandler()}><IoCheckmark /></button>
    </section>
  );
}

export default AddNewNoteButton;
