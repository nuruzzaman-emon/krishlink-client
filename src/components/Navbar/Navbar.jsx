import React from "react";
import { Link, NavLink } from "react-router";
import useAuth from "../../hooks/UseAuth";
import { GiGrassMushroom } from "react-icons/gi";

const Navbar = () => {
  const { user, logOutUser } = useAuth();
  console.log(user);
  const links = (
    <>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/allcrops"}>AllCrops</NavLink>
      {!user && (
        <>
          <NavLink to={"/login"}>Login</NavLink>
          <NavLink to="/register">Register</NavLink>
        </>
      )}

      {user && (
        <>
          <NavLink to="/mypost">My Post</NavLink>
          <NavLink to="/myinterest">My Interest</NavLink>
          <NavLink to="/profile">Profile</NavLink>
          <NavLink to="/addcrops">Add Crops</NavLink>
        </>
      )}
    </>
  );
  return (
    <div>
      <div className="flex justify-between items-center bg-[#2c2c54] px-[5%] py-4">
        <div className="flex items-center gap-1">
          <GiGrassMushroom color="white" size={26} />
          <h2 className="text-xl font-semibold text-white">Krishi Link</h2>
        </div>
        {user ? (
          <div className="flex items-center gap-2">
            <img className="w-10 h-10 rounded-4xl" src={user.photoURL} alt="" referrerpolicy="no-referrer" />
            <button
              onClick={() => logOutUser()}
              className="btn btn-primary text-white"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div>
            <Link className="btn btn-primary " to={"/login"}>
              <span className="text-white text-lg">Login</span>
            </Link>
            <Link className="btn btn-primary " to={"/register"}>
              <span className="text-white text-lg">Register</span>
            </Link>
          </div>
        )}
      </div>
      <div className="flex justify-center items-center bg-[#a5b1c2] p-4">
        {links}
      </div>
    </div>
  );
};

export default Navbar;
