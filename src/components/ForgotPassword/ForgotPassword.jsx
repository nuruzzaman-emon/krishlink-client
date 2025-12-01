import React from "react";
import useAuth from "../../hooks/UseAuth";
import Swal from "sweetalert2";

const ForgotPassword = () => {
  return (
    <div className=" bg-[#273c75] h-screen w-full pt-20">
      <div className="max-w-md mx-auto bg-base-300 p-5 rounded-xl  ">
        <form>
          <h1 className="text-5xl font-bold my-6">Reset Password</h1>
          <fieldset className="fieldset">
            <label className="label text-lg text-primary">Email</label>
            <input
              type="email"
              className="input w-full my-2"
              name="email"
              placeholder="Enter Your Email"
            />
            <button className="btn btn-primary w-52 mx-auto mt-4">Send</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
