import React, { useEffect, useState } from "react";
import Slider from "../Slider/Slider";
import LatestProducts from "../LatestProducts/LatestProducts";
import Procedure from "../Procedure/Procedure";
import AgroNews from "../AgroNews/AgroNews";
import WhyFromUs from "../WhyFromUs/WhyFromUs";
import Loading from "../Loading/Loading";
import useAxios from "../../hooks/useAxios";

const Home = () => {
  const [crops, setCrops] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosInstance = useAxios();

  useEffect(() => {
    axiosInstance.get("/latest-crops").then((data) => {
      setCrops(data.data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    <Loading></Loading>;
  }

  return (
    <div>
      <Slider></Slider>
      <LatestProducts crops={crops}></LatestProducts>
      <Procedure></Procedure>
      <AgroNews></AgroNews>
      <WhyFromUs></WhyFromUs>
    </div>
  );
};

export default Home;
