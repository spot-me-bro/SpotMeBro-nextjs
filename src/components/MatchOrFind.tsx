'use client';

import Link from 'next/link';
import '../app/globals.css'; // Import the CSS file

const MatchOrFind: React.FC = () => (
  <div className="container">
    <h1 className="heading">Please select one of the two choices</h1>
    <div className="button-container">
      <Link href="/#">
        <a className="button" href="/#">Match Gym Bros</a>
      </Link>
      <Link href="/#">
        <a className="button" href="/#">Find a Workout Page</a>
      </Link>
    </div>
  </div>
);

export default MatchOrFind;
