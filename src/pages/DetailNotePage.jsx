import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import DetailButton from "../components/DetailButton";
import { getNote, deleteNote, archiveNote, unarchiveNote } from "../utils/local-data";
import { showFormattedDate } from "../utils/index";

const DetailNotePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  if (!getNote(id)) {
    return <NotFoundPage />
  }

  const { title, body, createdAt, archived } = getNote(id);

  const onDeleteNoteHandler = () => {
    deleteNote(id)
    archived ? navigate('/archives') : navigate('/');
  }

  const onArchiveNoteHandler = () => {
    archiveNote(id);
    archived ? navigate('/archives') : navigate('/');
  }

  const onUnarchiveNoteHandler = () => {
    unarchiveNote(id);
    archived ? navigate('/archives') : navigate('/');
  }

  return (
    <section className="detail-page">
      <h3 className="detail-page__title">{title}</h3>
      <p className="detail-page__createdAt">{showFormattedDate(createdAt)}</p>
      <p className="detail-page__body">{body}</p>
      <DetailButton
        archived={archived}
        deleteNote={onDeleteNoteHandler}
        archiveNote={onArchiveNoteHandler}
        unarchiveNote={onUnarchiveNoteHandler} />
    </section>
  );
}

export default DetailNotePage;
