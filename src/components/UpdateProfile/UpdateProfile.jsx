import React, { useState } from "react";
import useAuth from "../../hooks/UseAuth";
import { useNavigate } from "react-router";

const UpdateProfile = () => {
  const [err, setErr] = useState("");
  const { modifyData } = useAuth();
  const navigate = useNavigate();

  const handleUpdateForm = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const newData = {
      displayName: name,
      photoURL: photo,
    };
    modifyData(newData)
      .then(() => {
        navigate("/profile");
        s;
      })
      .catch((err) => setErr(err.message));
  };

  return (
    <div className="bg-[#273c75] h-screen">
      <h2 className="text-5xl font-bold text-center text-white pt-8">
        Please Provide Your Data
      </h2>
      <div className="max-w-lg mx-auto text-white mt-6">
        <form onSubmit={handleUpdateForm}>
          <fieldset className="fieldset scroll-py-2">
            <label className="label text-lg">Name</label>
            <input
              type="text"
              className="outline-1 outline-orange-600 p-2 rounded-lg text-base"
              placeholder="name"
              name="name"
            />
            <label className="label text-lg">Photo</label>
            <input
              type="text"
              className="outline-1 outline-orange-600 p-2 rounded-lg text-base"
              placeholder="photo"
              name="photo"
            />
            {err && <p>{err}</p>}
            <button className="btn btn-primary mt-4">Update</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
