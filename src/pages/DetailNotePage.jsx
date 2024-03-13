import React from "react";
import { useParams } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import { getNote } from "../utils/local-data";
import { showFormattedDate } from "../utils/index";

const DetailNotePage = () => {
  const { id } = useParams();
  if (!getNote(id)) {
    return <NotFoundPage />
  }

  const { title, body, createdAt } = getNote(id);

  return (
    <section className="detail-page">
      <h3 className="detail-page__title">{title}</h3>
      <p className="detail-page__createdAt">{showFormattedDate(createdAt)}</p>
      <p className="detail-page__body">{body}</p>
    </section>
  );
}

export default DetailNotePage;
