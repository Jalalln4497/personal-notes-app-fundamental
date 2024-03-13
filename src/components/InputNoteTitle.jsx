import React from "react";

const InputNoteTitle = ({ title, changeTitleHandler }) => {
  return (
    <input
      type="text"
      className="add-new-page__input__title"
      placeholder="Title note"
      value={title}
      onChange={(event) => changeTitleHandler(event.target.value)} />
  );
}

export default InputNoteTitle;
