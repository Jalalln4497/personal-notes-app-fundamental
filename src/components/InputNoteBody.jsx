import React from "react";

const InputNoteBody = ({ body, changeBodyHandler }) => {
  return (
    // <div className="add-new-page__input__body" contentEditable="true" data-placeholder="body note"></div>
    <textarea
      cols="30"
      rows="10"
      className="add-new-page__input__body"
      placeholder="Body note..."
      value={body}
      onChange={(event) => changeBodyHandler(event.target.value)}>
    </textarea>
  );
}

export default InputNoteBody;
