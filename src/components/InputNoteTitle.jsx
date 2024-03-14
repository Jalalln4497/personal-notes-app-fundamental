import React from "react";
import PropTypes from "prop-types";

const InputNoteTitle = ({ title, changeTitleHandler }) => {
  return (
    <input
      type="text"
      className="add-new-page__input__title"
      placeholder="Note title"
      value={title}
      onChange={(event) => changeTitleHandler(event.target.value)} />
  );
}

InputNoteTitle.propTypes = {
  title: PropTypes.string.isRequired,
  changeTitleHandler: PropTypes.func.isRequired,
}

export default InputNoteTitle;
