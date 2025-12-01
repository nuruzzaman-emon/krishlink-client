import React, { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import Crop from "../Crop/Crop";
import Loading from "../Loading/Loading";

const AllCrops = () => {
  const [crops, setCrops] = useState([]);
  const [loading,setLoading] = useState(true)
  // console.log(crops)
  const axiosinstance = useAxios();
  useEffect(() => {
    axiosinstance
      .get("/allcrops")
      .then((data) => {
        setCrops(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [axiosinstance]);

  //   for search
  const handleSearchField = (e) => {
    const inputData = e.target.value;
    const searchData = inputData.toLowerCase().trim();
    const searchCrops = crops.filter((crop) =>
      crop.name.toLowerCase().trim().includes(searchData)
    );
    setCrops(searchCrops);
    if (inputData.length === 0) {
      setCrops(crops);
    }
  };

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="bg-[#273c75] hover:bg-[#273c32] py-12 ">
      <h2 className="text-5xl font-bold text-white text-center">
        All Our Crops Are Here
      </h2>
      <div className="w-11/12 mx-auto flex justify-center my-8">
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            onChange={handleSearchField}
            type="search"
            required
            placeholder="Search"
          />
        </label>
      </div>
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
        {crops.map((crop) => (
          <Crop key={crop._id} crop={crop}></Crop>
        ))}
      </div>
    </div>
  );
};

export default AllCrops;
