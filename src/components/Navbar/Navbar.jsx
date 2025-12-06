import React from "react";
import { Link, NavLink, useNavigate } from "react-router";
import useAuth from "../../hooks/UseAuth";
import { GiGrassMushroom } from "react-icons/gi";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  const { user, logOutUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logOutUser().then(() => {
      navigate("/login");
    });
  };

  // console.log(user);
  const links = (
    <div className="text-lg md:text-2xl font-bold ">
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
          <NavLink to="/addcrops">Add Crops</NavLink>
        </>
      )}
    </div>
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
            <div className="dropdown dropdown-hover">
              <div tabIndex={0} className=" m-1">
                {user?.photoURL ? (
                  <img
                    className="w-10 h-10 rounded-4xl"
                    src={user.photoURL}
                    alt=""
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <FaUser color="white" className="w-8 h-8"></FaUser>
                )}
              </div>
              <ul
                tabIndex="-1"
                className="dropdown-content menu bg-base-100 rounded-box z-20 w-36 p-2 shadow-sm"
              >
                <li className="text-base font-bold text-[#FC427B]">
                  <NavLink to="/profile">My Profile</NavLink>
                </li>
                <li className="text-base font-bold text-[#FC427B]">
                  <NavLink to="/mypost">My Post</NavLink>
                </li>
                <li className="text-base font-bold text-[#FC427B]">
                  <NavLink to="/myinterest">My Interest</NavLink>
                </li>
              </ul>
            </div>
            <button
              onClick={handleLogout}
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
      <div className="flex justify-center items-center bg-[#0a3d62] p-4 text-white">
        {links}
      </div>
    </div>
  );
};

export default Navbar;
