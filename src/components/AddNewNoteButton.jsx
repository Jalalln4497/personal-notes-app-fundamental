import React from "react";
import PropTypes from "prop-types";
import { IoCheckmark } from "react-icons/io5";

const AddNewNoteButton = ({ addNoteHandler }) => {
  return (
    <button className="action" onClick={() => addNoteHandler()}><IoCheckmark /></button>
  );
}

AddNewNoteButton.propTypes = {
  addNoteHandler: PropTypes.func.isRequired,
}

export default AddNewNoteButton;
