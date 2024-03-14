import React from "react";
import PropTypes from "prop-types";
import { useSearchParams } from "react-router-dom";
import { getActiveNotes } from "../utils/local-data";
import NoteList from "../components/NoteList";
import EmptyNotes from "../components/EmptyNotes";
import AddNotePageButton from "../components/AddNotePageButton";
import SearchBar from "../components/SearchBar";

const HomePageWrapper = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParamsTitle = searchParams.get('title');

  const changeParamsUrl = (keyword) => {
    setSearchParams({ title: keyword });
  }

  return <HomePage defaultKeyword={queryParamsTitle} changeParamsUrl={changeParamsUrl} />
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getActiveNotes(),
      keyword: props.defaultKeyword || ''
    }
  }

  onChangeKeywordHandler(keyword) {
    this.setState(() => {
      return {
        keyword
      }
    });
    this.props.changeParamsUrl(keyword);
  }

  render() {
    const notes = this.state.notes.filter((note) => {
      return note.title.toLowerCase().trim().includes(this.state.keyword.toLowerCase().trim());
    });

    return (
      <section className="homepage">
        <h2>Active Notes</h2>
        <section className="search-bar">
          <SearchBar keyword={this.state.keyword} keywordChange={this.onChangeKeywordHandler.bind(this)} />
        </section>
        {
          this.state.notes.length ? <NoteList notes={notes} /> : <EmptyNotes />
        }
        <section className="homepage__action">
          <AddNotePageButton />
        </section>
      </section>
    );
  }
}

HomePage.propTypes = {
  defaultKeyword: PropTypes.string,
  changeParamsUrl: PropTypes.func.isRequired,
}

export default HomePageWrapper;
