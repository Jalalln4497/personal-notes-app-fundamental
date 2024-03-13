import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ArchivedPage from '../pages/ArchivedPage';
import AddNotePage from '../pages/AddNotePage';
import DetailNotePage from '../pages/DetailNotePage';
import NotFoundPage from '../pages/NotFoundPage';
import Navigate from './Navigate';

function App() {
  return (
    <div className="app-container">
      <header>
        <h1><Link to="/">Note Apps</Link></h1>
        <Navigate />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/notes/:id" exact element={<DetailNotePage />} />
          <Route path="/archives" element={<ArchivedPage />} />
          <Route path="/notes/new" element={<AddNotePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
