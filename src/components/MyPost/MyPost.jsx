import React, { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/UseAuth";
import Crop from "../Crop/Crop";

const MyPost = () => {
  const [crops, setCrops] = useState([]);
  // console.log(crops);
  const { user } = useAuth();
  const axiosinstance = useAxios();
  useEffect(() => {
    axiosinstance
      .get(`mypost?email=${user.email}`, {
        headers: {
          authorization: `Bearer ${user.accessToken}`,
        },
      })
      .then((data) => {
        setCrops(data.data);
        //   console.log(data.data);
      });
  }, [axiosinstance, user]);
  return (
    <div className="bg-[#273c75] hover:bg-[#273c32] py-12 ">
      <h2 className="text-3xl md:text-5xl font-bold text-white text-center">
        My Crops Are Here
      </h2>
      <div>
        <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {crops.map((crop) => (
            <Crop key={crop._id} crop={crop}></Crop>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyPost;
