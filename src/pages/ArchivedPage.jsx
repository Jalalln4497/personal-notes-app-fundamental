import React from "react";
import { getArchivedNotes }from "../utils/local-data";
import NoteList from "../components/NoteList";
import EmptyNotes from "../components/EmptyNotes";
// import SearchBar from "../components/SearchBar";

class ArchivedPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getArchivedNotes()
    }
  }

  render() {
    return (
      <section>
        <h2>Archived Notes</h2>
        {
          this.state.notes.length ? <NoteList notes={this.state.notes}/> : <EmptyNotes/>
        }
      </section>
    );
  }
}

export default ArchivedPage;
