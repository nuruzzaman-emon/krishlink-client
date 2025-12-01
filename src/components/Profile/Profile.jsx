import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/UseAuth";
import useAxios from "../../hooks/useAxios";
import { Link } from "react-router";

const Profile = () => {
  const { user } = useAuth();
  const [crops, setCrops] = useState([]);
  const [interests, setInterest] = useState([]);
  console.log(user);

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
        console.log(data.data);
      });
  }, []);

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
      });
  }, [user]);

  return (
    <div className="bg-[#273c75]">
      <div className="w-8/12 mx-auto bg-[#40739e] py-6">
        <div className=" flex justify-center items-center gap-16 py-12">
          <div className="">
            <img
              className="w-[400px] h-[400px] rounded-[50%]"
              src={user?.photoURL}
              alt=""
              referrerpolicy="no-referrer"
            />
          </div>
          <div className="">
            <h2 className="text-4xl font-bold my-8 text-center text-white">
              {user?.displayName}
            </h2>
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
              <span className="text-[#fa983a] text-xl font-bold ">
                {crops?.length}
              </span>{" "}
              crops
            </p>
            <p className="text-xl font-medium text-[#ffdd59]">
              interested in : {interests.length} products{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
