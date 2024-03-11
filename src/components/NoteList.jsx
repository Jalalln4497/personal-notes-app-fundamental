import React from "react";
import NoteItem from "../components/NoteItem";

const NoteList = ({notes}) => {
  return (
    <section className="notes-list">
      {
        notes.map((note) => (<NoteItem {...note} key={note.id}/>))
      }
    </section>
  );
}

export default NoteList;
