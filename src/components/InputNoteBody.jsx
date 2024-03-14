import React from "react";
import PropTypes from "prop-types";

const InputNoteBody = ({ body, changeBodyHandler }) => {
  return (
    <textarea
      cols="30"
      rows="10"
      className="add-new-page__input__body"
      placeholder="Start writing note..."
      value={body}
      onChange={(event) => changeBodyHandler(event.target.value)}>
    </textarea>
  );
}

InputNoteBody.propTypes = {
  body: PropTypes.string.isRequired,
  changeBodyHandler: PropTypes.func.isRequired,
}

export default InputNoteBody;
