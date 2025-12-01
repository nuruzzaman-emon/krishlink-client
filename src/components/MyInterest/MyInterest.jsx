import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/UseAuth";
import useAxios from "../../hooks/useAxios";

const MyInterest = () => {
  const [myInterests, setMyInterests] = useState([]);
  console.log(myInterests);
  const { user } = useAuth();

  const axiosInstance = useAxios();

  useEffect(() => {
    axiosInstance
      .get(`myinterest?email=${user.email}`, {
        headers: {
          authorization: `Bearer ${user.accessToken}`,
        },
      })
      .then((data) => {
        setMyInterests(data.data);
        console.log(data.data);
      });
  }, [axiosInstance, user]);
  return (
    <div className="bg-[#273c75] hover:bg-[#273c32] py-12 ">
      <h2 className="text-5xl font-bold text-white text-center">
        My Interest Page
      </h2>
      <div className="flex justify-center items-center flex-wrap text-white text-center mt-12">
        <table>
          <thead>
            <tr>
              <th className="p-3">No.</th>
              <th className="p-3">Crop Name</th>
              <th className="p-3">Owner Name</th>
              <th className="p-3">Requested Quantity</th>
              <th className="p-3">Message</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          {MyInterest.length !== 0 ? (
            <tbody>
              <div className=" mt-12">
                <h2 className="text-5xl font-semibold text-center">
                  You haven’t shown interest in any crops yet.
                </h2>
              </div>
            </tbody>
          ) : (
            <tbody>
              {myInterests?.map((myInterest, index) => (
                <tr key={myInterest.index}>
                  <td className="p-4">{index + 1}</td>
                  <td className="p-4">
                    {myInterest.cropName}
                  </td>
                  <td className="p-4">{myInterest.cropOwner}</td>
                  <td className="p-4">{myInterest.quantity}</td>
                  <td className="p-4">{myInterest.message}</td>
                  <td className="p-4">
                    <span
                      className={`badge ${
                        myInterest.status === "accepted"
                          ? "badge-success"
                          : myInterest.status === "rejected"
                          ? "badge-error"
                          : "badge-warning"
                      }`}
                    >
                      {myInterest.status}
                    </span>
                  </td>
                  <td className="flex gap-2 p-4"></td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default MyInterest;
