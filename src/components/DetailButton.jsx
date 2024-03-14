import React from "react";
import PropTypes from "prop-types";
import DetailDeleteButton from "./DetailDeleteButton";
import DetailArchiveButton from "./DetailArchiveButton";
import DetailUnarchiveButton from "./DetailUnarchiveButton";

const DetailButton = ({ archived, deleteNote, archiveNote, unarchiveNote }) => {
  return (
    <div className="detail-page__action">
      {
        archived ?
          <DetailUnarchiveButton unarchiveNote={unarchiveNote} /> :
          <DetailArchiveButton archiveNote={archiveNote} />
      }
      <DetailDeleteButton deleteNote={deleteNote} />
    </div>
  );
}

DetailButton.propTypes = {
  archived: PropTypes.bool.isRequired,
  deleteNote: PropTypes.func.isRequired,
  archiveNote: PropTypes.func.isRequired,
  unarchiveNote: PropTypes.func.isRequired,
}

export default DetailButton;
