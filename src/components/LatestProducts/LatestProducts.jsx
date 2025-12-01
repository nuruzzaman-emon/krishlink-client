import React from "react";
import { Link } from "react-router";
import Crop from "../Crop/Crop";

const LatestProducts = ({ crops }) => {
  // console.log(crops);
  return (
    <div className="   bg-[#273c75] hover:bg-[#273c32] py-6">
      <h2 className="text-5xl font-bold text-white text-center">
        Our <span className="text-[#F79F1F]">Latest Crops</span> Are Here
      </h2>
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
        {crops?.map((crop) => (
          <Crop key={crop._id} crop={crop}></Crop>
        ))}
      </div>
      <div className="flex justify-center">
        <Link to={"/allcrops"}>
          <button className="w-32 btn btn-secondary mt-4">View All </button>
        </Link>
      </div>
    </div>
  );
};

export default LatestProducts;
