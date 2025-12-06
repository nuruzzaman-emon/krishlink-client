import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/UseAuth";
import useAxios from "../../hooks/useAxios";
import Loading from "../Loading/Loading";
import { Link } from "react-router";

const MyInterest = () => {
  const [myInterests, setMyInterests] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  // console.log(user.email);

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
        setLoading(false);
        // console.log(data.data);
      });
  }, [axiosInstance, user]);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="bg-[#273c75] hover:bg-[#273c32] py-12 ">
      <h2 className="text-3xl  md:text-5xl font-bold text-white text-center">
        My Interest Page
      </h2>

      {myInterests?.length === 0 ? (
        <div className=" py-12 ">
          <h2 className="text-3xl font-semibold text-white text-center">
            You haven’t shown interest in any crops yet.
          </h2>
        </div>
      ) : (
        <div className="md:flex justify-center items-center  text-white text-center mt-12 overflow-auto p-3">
          <table>
            <thead>
              <tr>
                <th className="p-3 border border-gray">No.</th>
                <th className="p-3 border border-gray">Crop Name</th>
                <th className="p-3 border border-gray">Owner Name</th>
                <th className="p-3 border border-gray">Requested Quantity</th>
                <th className="p-3 border border-gray">Message</th>
                <th className="p-3 border border-gray">Status</th>
              </tr>
            </thead>
            <tbody>
              {myInterests?.map((myInterest, index) => (
                <tr key={myInterest._id}>
                  <td className="p-4 border border-gray-200">{index + 1}</td>
                  <td className="p-4 border border-gray-200 hover:underline">
                    <Link to={`/allcrops/${myInterest.cropId}`}>
                      {myInterest.cropName}
                    </Link>
                  </td>
                  <td className="p-4 border border-gray-200">
                    {myInterest.cropOwner}
                  </td>
                  <td className="p-4 border border-gray-200">
                    {myInterest.quantity}
                  </td>
                  <td className="p-4 border border-gray-200">
                    {myInterest.message}
                  </td>
                  <td className="p-4 border border-gray-200">
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyInterest;
