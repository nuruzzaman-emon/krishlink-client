import React from "react";
import { CircularProgress } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex justify-center mt-12">
      <CircularProgress
        height="100"
        width="100"
        color="#4fa94d"
        ariaLabel="circular-progress-loading"
        wrapperStyle={{}}
        wrapperClass="wrapper-class"
        visible={true}
        strokeWidth={2}
        animationDuration={1}
      />
    </div>
  );
};

export default Loading;
