import React, { useState } from "react";
import {
  africanFarmar,
  asianFarmer,
  economicalAgro,
  maizePlan,
} from "../NewsData/NewsData";

const AgroNews = () => {
  const [expand, setExpand] = useState(false);

  const preview = maizePlan.split(" ").slice(0, 100).join(" ") + ".....";
  const previewAsianFarmer =
    asianFarmer.split(" ").slice(0, 100).join(" ") + ".....";
  const previewAfricanFarmar =
    africanFarmar.split(" ").slice(0, 100).join(" ") + ".....";
  const previewEconomicalAgro =
    economicalAgro.split(" ").slice(0, 100).join(" ") + ".....";

  return (
    <div className="bg-[#273c75] hover:bg-[#273c32] py-12">
      <h2 className="text-5xl font-bold text-white text-center mb-12">
        Latest Farming Updates
      </h2>
      <div
        className={`grid  ${
          expand
            ? "grid-cols-1  w-10/12 mx-auto gap-12"
            : "grid-cols-1 lg:grid-cols-2 w-full gap-5"
        }  `}
      >
        <div className="w-full p-5 bg-base-300 shadow-xl rounded-xl">
          <img
            className={`w-full h-96 ${expand ? "h-[600px]" : "h-96"}`}
            src={"https://i.ibb.co.com/21h5XsBc/popcorn2.jpg"}
            alt=""
          />
          <h2 className="text-2xl font-bold text-[#273c75] my-3">
            A Story of Two Maize Plans—and a Better Farmer-Led Food System
          </h2>
          <p className="text-lg">
            {expand ? maizePlan : preview}

            <button
              className="text-base font-bold text-blue-500"
              onClick={() => {
                setExpand(!expand);
              }}
            >
              {expand ? "Read Less" : "Read More"}
            </button>
          </p>
        </div>
        <div className="w-full p-5 bg-base-300 shadow-xl rounded-xl">
          <img
            className={`w-full h-96 ${expand ? "h-[600px]" : "h-96"}`}
            src={"https://i.ibb.co.com/HTG5Sjmt/asianfarm.jpg"}
            alt=""
          />
          <h2 className="text-2xl font-bold text-[#273c75] my-3">
            Asia’s Farmers Root for a Resilient Future
          </h2>
          <p className="text-lg">
            {expand ? asianFarmer : previewAsianFarmer}
            <button
              className="text-base font-bold text-blue-500"
              onClick={() => {
                setExpand(!expand);
              }}
            >
              {expand ? "Read Less" : "Read More"}
            </button>
          </p>
        </div>
        <div className="w-full p-5 bg-base-300 shadow-xl rounded-xl">
          <img
            className={`w-full h-96 ${expand ? "h-[600px]" : "h-96"}`}
            src={"https://i.ibb.co.com/DPjBNbLY/africanfarmer.webp"}
            alt=""
          />
          <h2 className="text-2xl font-bold text-[#273c75] my-3">
            Financing Africa’s Food Systems Transformation: Challenges and
            Pathways to Drive Growth and Nutrition Security Across the Continent
          </h2>
          <p className="text-lg">
            {expand ? africanFarmar : previewAfricanFarmar}
            <button
              className="text-base font-bold text-blue-500"
              onClick={() => {
                setExpand(!expand);
              }}
            >
              {expand ? "Read Less" : "Read More"}
            </button>
          </p>
        </div>
        <div className="w-full p-5 bg-base-300 shadow-xl rounded-xl">
          <img
            className={`w-full h-96 ${expand ? "h-[600px]" : "h-96"}`}
            src={"https://i.ibb.co.com/8ggxxX19/fruits.jpg"}
            alt=""
          />
          <h2 className="text-2xl font-bold text-[#273c75] my-3">
            From Molecules to Markets: Building a Food Intelligence Economy
          </h2>
          <p className="text-lg">
            {expand ? economicalAgro : previewEconomicalAgro}
            <button
              className="text-base font-bold text-blue-500"
              onClick={() => {
                setExpand(!expand);
              }}
            >
              {expand ? "Read Less" : "Read More"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AgroNews;
