import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ user }) => {
  return (
    <nav className="flex flex-wrap p-4 justify-between items-center bg-[#EE2B69] text-white shadow-md">
      <h3 className="text-2xl font-bold tracking-wide">
        <Link to="/" className="hover:text-[#FFE553] transition">StartupSphere</Link>
      </h3>
      <ul className="flex gap-6 items-center text-lg">
        {user?.role === 'Founder' && (
          <>
            <li>
              <Link to="/post" className="hover:text-[#FFE553] transition">Create Post</Link>
            </li>
            <li>
              <Link to="/offers" className="hover:text-[#FFE553] transition">Offers</Link>
            </li>
            <li>
              <Link to="/startup" className="hover:text-[#FFE553] transition">Create Startup</Link>
            </li>
          </>
        )}
        {user?.role === 'Investor' && (
          <>
            <li>
              <Link to="/" className="hover:text-[#FFE553] transition">Home</Link>
            </li>
          </>
        )}
        {!user && (
          <li>
            <Link to="/register" className="hover:text-[#FFE553] transition">Register</Link>
          </li>
        )}
      </ul>
      {user && (
        <span className="ml-4 px-3 py-1 rounded-full bg-[#FFE553] text-[#EE2B69] font-semibold text-sm">
          {user.name} ({user.role})
        </span>
      )}
    </nav>
  );
};

export default Navbar;