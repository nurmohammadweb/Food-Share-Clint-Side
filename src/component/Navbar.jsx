import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { IoPersonCircle, IoLogIn } from 'react-icons/io5';
import { FcHome, FcList, FcAddDatabase, FcManager, FcLike } from 'react-icons/fc';
import logo from '../assets/logo-removebg-preview.png'

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => alert("You logged out successfully"))
      .catch(console.error);
  };

  const linkClass = ({ isActive }) =>
    `flex items-center gap-2 px-3 py-1 rounded hover:bg-gray-100 ${isActive ? 'text-blue-600' : 'text-gray-800'}`;

  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-compact dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/" className={linkClass}><FcHome /> Home</NavLink>
            </li>
            <li>
              <NavLink to="/availablefoods" className={linkClass}><FcList /> Available Foods</NavLink>
            </li>
            {user && (
              <>
                <li>
                  <NavLink to="/addfood" className={linkClass}><FcAddDatabase /> Add Food</NavLink>
                </li>
                <li>
                  <NavLink to="/managemyfoods" className={linkClass}><FcManager /> Manage My Foods</NavLink>
                </li>
                <li>
                  <NavLink to="/myfoodrequests" className={linkClass}><FcLike /> My Food Requests</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl"><img className='w-10' src={logo} alt="logo" /> PlateShare</Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/" className={linkClass}><FcHome /> Home</NavLink>
          </li>
          <li>
            <NavLink to="/availablefoods" className={linkClass}><FcList /> Available Foods</NavLink>
          </li>
          {user && (
            <>
              <li>
                <NavLink to="/addfood" className={linkClass}><FcAddDatabase /> Add Food</NavLink>
              </li>
              <li>
                <NavLink to="/managemyfoods" className={linkClass}><FcManager /> Manage My Foods</NavLink>
              </li>
              <li>
                <NavLink to="/myfoodrequests" className={linkClass}><FcLike /> My Food Requests</NavLink>
              </li>
            </>
          )}
        </ul>
      </div>

      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 h-10 rounded-full flex items-center justify-center">
                {user.photoURL ? (
                  <img src={user.photoURL} alt="avatar" className="w-full h-full rounded-full" />
                ) : (
                  <IoPersonCircle className="w-8 h-8 text-gray-600" />
                )}
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              <li className="mb-2 text-center">
                <p className="font-medium">{user.displayName}</p>
                <p className="text-sm text-gray-600">{user.email}</p>
              </li>
              <li className="text-center">
                <button className="btn w-full" onClick={handleLogOut}>Logout</button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/auth/login">
            <button className="btn flex items-center gap-2">
              <IoLogIn /> Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
