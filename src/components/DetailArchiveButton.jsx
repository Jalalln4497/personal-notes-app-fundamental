import React from "react";
import PropTypes from "prop-types";
import { MdOutlineArchive } from "react-icons/md";

const DetailArchiveButton = ({ archiveNote }) => {
  return (
    <button className="action" onClick={() => archiveNote()}><MdOutlineArchive /></button>
  );
}

DetailArchiveButton.propTypes = {
  archiveNote: PropTypes.func.isRequired,
}

export default DetailArchiveButton;
