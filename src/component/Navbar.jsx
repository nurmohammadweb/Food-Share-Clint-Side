import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext)

  const links = <>
    <NavLink to="/"><li className='m-3 text-[15px] font-bold'>Home</li></NavLink>
    <NavLink to="/availablefoods"> <li className='m-3 text-[15px] font-bold'>Available Foods</li></NavLink>
     <NavLink to="/addfood"> <li className='m-3 text-[15px] font-bold'>Add Food</li></NavLink>
         <NavLink to="/managemyfoods"> <li className='m-3 text-[15px] font-bold'>Manage My Foods</li></NavLink>
       <NavLink to="myfoodrequests"> <li className='m-3 text-[15px] font-bold'>My Food Requests</li></NavLink>
  </>

  const handleLogOut = () => {
    console.log("Current user:", user);

     console.log("user trying to logout");
    logOut().then(() => {
      alert("you logged out successfully");
    })
      .catch((error) => {
        console.log(error);
      });
   } 


  return (
 <div className="navbar bg-base-100 shadow-sm ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
      {links}
            
      </ul>
    </div>
    <Link to="/" className="btn btn-ghost text-xl">PlateShare</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     { links}
    </ul>
  </div>
  <div className="navbar-end">
        {
          user ? (<div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src={user?.photoURL || "/default-avatar.png"} />
        </div>
            </div>
           
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li>
                  <li>{user.displayName || "No Name"}</li>
            <li>{user.email}</li>
          {/* <a className="justify-between">
            Profile
          <Link to="/updateprofile">  <span className="badge">Update</span></Link>
          </a>  */}
        </li>
        
            {
              user ?( <Link to="/auth/login" className='text-center mt-4' ><button className="btn " onClick={handleLogOut}>LogOut</button></Link>) : (<Link to="/auth/login" className="btn bg-blue-400"><IoMdLogIn /> Login</Link>)
            }
          </ul>
         </div>)  : (<Link to="/auth/login" ><button className="btn">Login</button></Link>)
       }
        

      


      </div>
      
      
    </div>
  );
};

export default Navbar;