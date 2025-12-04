import React from "react";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="py-12">
        <h2 className="text-4xl font-bold text-red-500 text-center my-6">
          404 — Page Not Found
        </h2>
        <img
          src={"https://i.ibb.co.com/d9H9v7r/error-404.png"}
          alt="error page"
        />
      </div>
    </div>
  );
};

export default ErrorPage;
