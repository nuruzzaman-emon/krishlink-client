import React, { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import Crop from "../Crop/Crop";
import Loading from "../Loading/Loading";
import useAuth from "../../hooks/UseAuth";

const AllCrops = () => {
  const [crops, setCrops] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const axiosinstance = useAxios();
  useEffect(() => {
    axiosinstance
      .get("allcrops")
      .then((data) => {
        setCrops(data.data);
        setLoading(false);
      })
      .catch(() => {
        // console.log(error);
        setLoading(false);
      });
  }, [axiosinstance]);

  //   for search
  const handleSearchField = (e) => {
    e.preventDefault();
    setLoading(true);
    const inputData = e.target.search.value;
    // console.log(inputData);

    axiosinstance
      .get(`search?search=${inputData}`, {
        headers: {
          authorization: `Bearer ${user.accessToken}`,
        },
      })
      .then((data) => {
        setCrops(data.data);
        setLoading(false);
        // console.log(data.data);
      });
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
        <form onSubmit={handleSearchField} className="flex gap-3">
          <label className="input rounded-full md:w-md">
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
            <input type="search" name="search" placeholder="Search" />
          </label>
          <button className=" btn btn-primary rounded-full">Search</button>
        </form>
      </div>
      {crops?.length === 0 ? (
        <div className=" mt-32 h-screen ">
          <h2 className="text-3xl font-semibold text-white text-center">
            No data available for this search term.
          </h2>
        </div>
      ) : (
        <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {crops.map((crop) => (
            <Crop key={crop._id} crop={crop}></Crop>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllCrops;
