import React, { use } from 'react'
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
  const { user, userLogout } = use(AuthContext)

  const handleLogout = () => {
     userLogout()
      .then(()=>{

      })
      .catch(error=>{
        console.log(error.message)
      })
  }
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/plantdata'>Plants</Link></li>
            <li><Link to="/myprofile">My Profile</Link></li>
            <li><Link to="/my-orders">My Orders</Link></li>
            <li><Link to="/my-plants">My Plants</Link></li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Green Nest</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/plantdata'>Plants</Link></li>
          <li><Link to="/myprofile">My Profile</Link></li>
          <li><Link to="/add-plants">Add Plants</Link></li>
           <li><Link to="/my-orders">My Orders</Link></li>
             <li><Link to="/my-plants">My Plants</Link></li>
        </ul>
      </div>
      <div className="navbar-end">
        {
          user && (
          <div>
            <button
              onClick={handleLogout}
              className="px-6 py-2 font-semibold text-white rounded-lg bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 hover:from-purple-600 hover:via-indigo-500 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Logout
            </button>
            </div>
            ) 
        }

       {!user && (
          <div >
            <Link
              to={"/Login"}
              className="px-6 py-2 font-semibold text-white rounded-lg bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 hover:from-purple-600 hover:via-indigo-500 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Login
            </Link>
          </div>
        )}



      </div>
    </div>
  )
}

export default Navbar

