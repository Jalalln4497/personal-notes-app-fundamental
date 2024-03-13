import React from "react";
import InputNoteTitle from "./InputNoteTitle";
import InputNoteBody from "./InputNoteBody";

const InputNote = ({ title, body, changeTitleHandler, changeBodyHandler }) => {
  return (
    <div className="add-new-page__input">
      <InputNoteTitle title={title} changeTitleHandler={changeTitleHandler} />
      <InputNoteBody body={body} changeBodyHandler={changeBodyHandler} />
    </div>
  );
}

export default InputNote;
