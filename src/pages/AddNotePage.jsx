import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import AddNewNoteButton from "../components/AddNewNoteButton";
import InputNote from "../components/InputNote";
import { addNote } from "../utils/local-data";

const AddNotePageWrapper = () => {
  const nav = useNavigate();
  return <AddNotePage navigate={nav} />
}

class AddNotePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: ''
    }
  }

  onChangeTitleHandler(title) {
    this.setState(() => {
      return {
        title,
      }
    });
  }

  onChangeBodyHandler(body) {
    this.setState(() => {
      return {
        body,
      }
    });
  }

  onAddNoteHandler() {
    addNote(this.state);
    this.props.navigate('/');
  }

  render() {
    return (
      <section className="add-new-page">
        <InputNote
          title={this.state.title}
          body={this.state.body}
          changeTitleHandler={this.onChangeTitleHandler.bind(this)}
          changeBodyHandler={this.onChangeBodyHandler.bind(this)} />
        <section className="homepage__action">
          <AddNewNoteButton addNoteHandler={this.onAddNoteHandler.bind(this)} />
        </section>
      </section>
    );
  }
}

AddNotePage.propTypes = {
  navigate: PropTypes.func.isRequired,
}

export default AddNotePageWrapper;
