import React from "react";
import PropTypes from "prop-types";
import { useSearchParams } from "react-router-dom";
import { getArchivedNotes } from "../utils/local-data";
import NoteList from "../components/NoteList";
import EmptyNotes from "../components/EmptyNotes";
import SearchBar from "../components/SearchBar";

const ArchivedPageWrapper = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParamsTitle = searchParams.get('title');

  const changeParamsUrl = (keyword) => {
    setSearchParams({ title: keyword });
  }
  return <ArchivedPage defaultKeyword={queryParamsTitle} changeParamsUrl={changeParamsUrl} />
}

class ArchivedPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getArchivedNotes(),
      keyword: props.defaultKeyword || ''
    }
  }

  onChangeKeywrodHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      }
    });
    this.props.changeParamsUrl(keyword);
  }

  render() {
    const notes = this.state.notes.filter((note) => {
      return note.title.toLowerCase().trim().includes(this.state.keyword.toLowerCase().trim());
    });

    return (
      <section>
        <h2>Archived Notes</h2>
        <section className="search-bar">
          <SearchBar keyword={this.state.keyword} keywordChange={this.onChangeKeywrodHandler.bind(this)} />
        </section>
        {
          this.state.notes.length ? <NoteList notes={notes} /> : <EmptyNotes />
        }
      </section>
    );
  }
}

ArchivedPage.propTypes = {
  defaultKeyword: PropTypes.string,
  changeParamsUrl: PropTypes.func.isRequired,
}

export default ArchivedPageWrapper;
