import React from "react";
import { Link } from "react-router";

const Crop = ({ crop }) => {
  // console.log(crop);
  return (
    <div className="card bg-base-100 shadow-sm p-5">
      <figure>
        <img src={crop.image} alt="Shoes" className="rounded-xl h-[400px]" />
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-center">
          <h2 className="card-title">{crop.name}</h2>
          <div className="badge badge-secondary">{crop.type}</div>
        </div>
        <p className="text-gray-700 text-sm">
          {crop.description.slice(0, 100) + "..."}
        </p>
        <div className="card-actions justify-between">
          <h2 className="badge  text-lg font-semibold">
            Quantity: {crop.quantity}
          </h2>
          <h2 className="badge  text-lg font-semibold">
            Added on: {new Date(crop.created_at).toLocaleDateString()}
          </h2>
        </div>
      </div>
      <div className="mt-4 ">
        <Link to={`/allcrops/${crop._id}`}>
          <button className="w-full btn  btn-primary text-xl text-white">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Crop;
