import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/UseAuth";
import useAxios from "../../hooks/useAxios";
import { Link } from "react-router";
import { FaUser } from "react-icons/fa";
import Loading from "../Loading/Loading";

const Profile = () => {
  const { user } = useAuth();
  const [crops, setCrops] = useState([]);
  const [interests, setInterest] = useState([]);
  const [loading, setLoading] = useState(true);

  const axiosInstance = useAxios();

  // for user interest
  useEffect(() => {
    axiosInstance
      .get(`myinterest?email=${user.email}`, {
        headers: {
          authorization: `Bearer ${user.accessToken}`,
        },
      })
      .then((data) => {
        setInterest(data.data);
        setLoading(false);
      });
  }, [user]);

  // for user crops
  useEffect(() => {
    axiosInstance
      .get(`/mypost?email=${user.email}`, {
        headers: {
          authorization: `Bearer ${user.accessToken}`,
        },
      })
      .then((data) => {
        setCrops(data.data);
        setLoading(false);
      });
  }, [user]);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="bg-[#273c75]">
      <div className="w-8/12 mx-auto bg-[#40739e] py-6">
        <div className=" flex justify-center items-center gap-16 py-12">
          <div className="">
            {user?.photoURL ? (
              <img
                className="w-[400px] h-[400px] rounded-[50%]"
                src={user.photoURL}
                alt=""
                referrerpolicy="no-referrer"
              />
            ) : (
              <FaUser
                color="white"
                className="w-[400px] h-[400px] rounded-[50%] border-2"
              ></FaUser>
            )}
          </div>
          <div className="">
            {user?.displayName ? (
              <h2 className="text-4xl font-bold my-8 text-center text-white">
                {user?.displayName}
              </h2>
            ) : (
              <h2 className="text-4xl font-bold my-8 text-center text-white">
                User Name
              </h2>
            )}
            <h2 className="btn text-2xl font-bold text-blue-500 ">
              <Link to={"/updateprofile"}>Update Your Profile</Link>
            </h2>
          </div>
        </div>
        <div className="flex justify-center mt-12 gap-16">
          <div>
            <h2 className="text-2xl font-bold my-6 text-white">
              User information
            </h2>
            <p className="text-xl font-medium text-[#ffdd59]">
              Email: {user?.email}
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold my-6 text-white">
              User Activities
            </h2>
            <p className="text-xl font-medium text-[#ffdd59]">
              Crops Posted:{" "}
              <span className="text-white text-2xl font-bold ">
                {crops?.length}
              </span>{" "}
              crops
            </p>
            <p className="text-xl font-medium text-[#ffdd59]">
              interested in :{" "}
              <span className="text-2xl text-white font-bold">
                {interests.length}
              </span>{" "}
              products{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
