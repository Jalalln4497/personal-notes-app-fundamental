import React from "react";
import { getAllNotes, getActiveNotes } from "../utils/local-data";
import NoteList from "../components/NoteList";
import EmptyNotes from "../components/EmptyNotes";
import AddNotePageButton from "../components/AddNotePageButton";
// import SearchBar from "../components/SearchBar";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getActiveNotes()
    }
  }

  render() {
    return (
      <section className="homepage">
        <h2>Active Notes</h2>
        {
          this.state.notes.length ? <NoteList notes={this.state.notes} /> : <EmptyNotes />
        }
        <AddNotePageButton />
      </section>
    );
  }
}

export default HomePage;
