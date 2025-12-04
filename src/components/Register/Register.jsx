import React, { useState } from "react";
import useAuth from "../../hooks/UseAuth";
import { Link, useLocation, useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Loading from "../Loading/Loading";

const Register = () => {
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { loginByGoogle } = useAuth();
  const { registerUser } = useAuth();

  const handleGoogleSignIn = () => {
    setLoading(true);
    loginByGoogle().then(() => {
      setLoading(false);
      navigate(location.state || "/");
    });
  };

  const handleRegisterUser = (e) => {
    e.preventDefault();
    setLoading(true);

    //set error empty
    setError("");
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const validPassword = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

    if (!validPassword.test(password)) {
      setLoading(false);
      setError(
        "you must include one uppercase one lowercase and it should be six characters"
      );
      return;
    }
    registerUser(email, password)
      .then(() => {
        setLoading(false);
        navigate(location.state || "/");
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
      });
  };

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="relative">
      <img
        className="absolute w-full h-full "
        src={"https://i.ibb.co.com/gLFB5h5V/loginbg22.jpg"}
        alt=""
      />
      <div className="card  w-full max-w-md mx-auto  shadow-xl ">
        <div className="card-body">
          <h1 className="text-5xl font-bold text-white mb-8 text-center">
            Register now!
          </h1>
          <form onSubmit={handleRegisterUser}>
            <fieldset className="fieldset">
              {/* name */}
              <label className="label text-white text-xl">
                Enter Your Name
              </label>
              <input
                type="text"
                className="input w-full"
                name="name"
                placeholder="Name"
                required
              />
              {/* photo */}
              <label className="label text-white text-xl">
                Enter Your Photo URL
              </label>
              <input
                type="text"
                className="input w-full"
                name="photo"
                placeholder="photo"
                required
              />
              {/* email */}
              <label className="label text-white text-xl">
                Enter Your Email
              </label>
              <input
                type="email"
                className="input w-full"
                name="email"
                placeholder="Email"
                required
              />
              {/* password */}
              <label className="label text-white text-xl">Password</label>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  className="input w-full"
                  name="password"
                  placeholder="Password"
                  required
                />
                <span
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600 text-xl"
                >
                  {showPass ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              <p className="text-red-500">{error && error}</p>
              <button className="btn btn-primary mt-4">Register</button>
            </fieldset>
          </form>
          <p className="text-white">
            Already have an account?
            <Link to={"/login"}>
              <span className="text-blue-500 font-semibold"> Login</span>
            </Link>
          </p>
        </div>

        {/* Google */}
        <button
          onClick={handleGoogleSignIn}
          className="btn max-w-md mx-auto bg-white text-black border-[#e5e5e5]"
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Register;
