import React from "react";
import PropTypes from "prop-types";
import { MdOutlineUnarchive } from "react-icons/md";

const DetailUnarchiveButton = ({ unarchiveNote }) => {
  return (
    <button className="action" onClick={() => unarchiveNote()}><MdOutlineUnarchive /></button>
  );
}

DetailUnarchiveButton.propTypes = {
  unarchiveNote: PropTypes.func.isRequired,
}

export default DetailUnarchiveButton;
