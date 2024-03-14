import React from "react";
import PropTypes from "prop-types";
import NoteItem from "../components/NoteItem";

const NoteList = ({ notes }) => {
  return (
    <section className="notes-list">
      {
        notes.map((note) => (<NoteItem {...note} key={note.id} />))
      }
    </section>
  );
}

NoteList.propTypes = {
  notes: PropTypes.array.isRequired,
}

export default NoteList;
