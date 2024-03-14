import React from "react";
import PropTypes from "prop-types";
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

InputNote.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  changeTitleHandler: PropTypes.func.isRequired,
  changeBodyHandler: PropTypes.func.isRequired,
}

export default InputNote;
