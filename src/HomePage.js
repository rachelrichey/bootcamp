import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Welcome to the Homepage</h1>
      <p>Choose an option:</p>
      <ul>
        <li>
          <Link to="/editor">Go to Editor</Link>
        </li>
        <li>
          <Link to="/viewer">Go to Viewer</Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
