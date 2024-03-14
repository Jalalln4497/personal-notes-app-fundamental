import React from "react";
import PropTypes from "prop-types";
import { PiTrash } from "react-icons/pi";

const DetailDeleteButton = ({ deleteNote }) => {
  return (
    <button className="action" onClick={() => deleteNote()}><PiTrash /></button>
  );
}

DetailDeleteButton.propTypes = {
  deleteNote: PropTypes.func.isRequired,
}

export default DetailDeleteButton;
