import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-slate-700 p-2 text-white text-xl flex justify-between items-center">
      <h1 className="text-lg font-bold my-2">
        Calendar Application for Communication Tracking
      </h1>
      <div>
        <Link
          to="/admin-panel"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Admin Panel
        </Link>
      </div>
    </div>
  );
};

export default Navbar;