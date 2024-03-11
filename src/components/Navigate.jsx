import React from "react";
import { Link } from 'react-router-dom';

const Navigate = () => {
  return (
    <div className="navigation">
      <ul>
        <li><Link to="/archives">Archived</Link></li>
      </ul>
    </div>
  );
}

export default Navigate;
