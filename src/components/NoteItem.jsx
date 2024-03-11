import React from "react";
import { showFormattedDate }  from "../utils/index";

const NoteItem = ({ title, body, createdAt }) => {
  return (
    <article className="note-item">
      <h3 className="note-item__title">{title}</h3>
      <p className="note-item__createdAt">{showFormattedDate(createdAt)}</p>
      <p className="note-item__body">{body}</p>
    </article>
  );
}

export default NoteItem;