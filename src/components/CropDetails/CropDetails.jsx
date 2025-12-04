import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import { useNavigate, useParams } from "react-router";
import useAuth from "../../hooks/UseAuth";
import Swal from "sweetalert2";
import Loading from "../Loading/Loading";

const CropDetails = () => {
  const [crop, setCrop] = useState({});
  const [interests, setInterests] = useState([]);
  // console.log(interests);
  const [quantity, setQuantity] = useState(0);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  // console.log(crop);
  // console.log(crop?._id);
  const navigate = useNavigate();
  const { user } = useAuth();
  const axiosinstance = useAxios();
  const { id } = useParams();

  useEffect(() => {
    if (crop?._id) {
      axiosinstance
        .get(`product-interests/${crop?._id}`, {
          headers: {
            authorization: `Bearer ${user.accessToken}`,
          },
        })
        .then((data) => {
          // console.log(data);
          setInterests(data.data);
          // console.log(data.data);
          setLoading(false);
        });
    }
  }, [crop]);

  //for cropdetails
  useEffect(() => {
    if (!user?.accessToken) return;

    axiosinstance
      .get(`allcrops/${id}`, {
        headers: {
          authorization: `Bearer ${user.accessToken}`,
        },
      })
      .then((res) => {
        setCrop(res.data);
        setLoading(false);
      })
      .catch(() => {
        navigate("/register");
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Unauthorized access!",
        });
      });
  }, [axiosinstance, id, user?.accessToken, navigate]);

  const totalPrice = quantity * crop?.pricePerUnit || 0;

  const handleInterestSubmit = (e) => {
    e.preventDefault();
    const quantity = e.target.quantity.value;
    if (quantity < 1) {
      return setError("Oops! Quantity should be at least 1 to proceed.");
    }
    const message = e.target.message.value;
    //setError empty
    setError("");

    const newInterest = {
      cropName: crop?.name,
      cropOwner: crop?.owner?.ownerName,
      userEmail: user.email,
      userName: user.displayName,
      message,
      quantity,
      status: "pending",
      cropId: crop?._id,
    };

    axiosinstance
      .post("myinterest", newInterest, {
        headers: {
          authorization: ` Bearer ${user.accessToken}`,
        },
      })
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your interest has been submitted successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        setLoading(false);
        navigate("/myinterest");
      });
    // .catch((err) => console.log(err));
  };

  const handleAccept = (id) => {
    axiosinstance
      .patch(
        `product-interests/${id}`,
        { status: "accepted" },
        {
          headers: {
            authorization: `Bearer ${user.accessToken}`,
          },
        }
      )
      .then(() => {
        setInterests((prev) =>
          prev.map((item) =>
            item._id === id ? { ...item, status: "accepted" } : item
          )
        );
      });
  };
  const handleReject = (id) => {
    axiosinstance
      .patch(
        `product-interests/${id}`,
        { status: "rejected" },
        {
          headers: {
            authorization: `Bearer ${user.accessToken}`,
          },
        }
      )
      .then(() => {
        setInterests((prev) =>
          prev.map((item) =>
            item._id === id ? { ...item, status: "rejected" } : item
          )
        );
      });

  };

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="bg-[#273c75] hover:bg-[#636e72]">
      <div className="w-11/12 mx-auto  py-12">
        <div className=" crop-card bg-white shadow-md rounded-xl flex flex-col lg:flex-row justify-between items-center mt-12">
          {/* Image */}
          <div className="h-[400px] w-full overflow-hidden flex-1">
            <img
              src={crop.image}
              alt={crop.name}
              className="w-full h-full object-cover hover:scale-105 transition"
            />
          </div>

          {/* Body */}
          <div className="p-4 space-y-3 flex-1">
            {/* Name + Type */}
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">{crop.name}</h2>

              <span className="text-md bg-green-100 text-orange-700 px-3 py-2 rounded-4xl">
                {crop.type}
              </span>
            </div>

            {/* Created Date */}
            <p className="text-md text-gray-500">
              Added on: {new Date(crop.created_at).toLocaleDateString()}
            </p>

            {/* Price + Quantity */}
            <div className="flex items-center justify-between text-sm">
              <p className="font-bold text-green-700">
                ৳ {crop.pricePerUnit}/{crop.unit}
              </p>
              <p className=" text-xl font-bold">
                {crop.quantity} {crop.unit} available
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-700 ">{crop.description}</p>

            {/* Location */}
            <p className="text-xl text-gray-600 flex items-center gap-1">
              <span>📍</span> {crop.location}
            </p>

            {/* Owner */}
            <div className="text-xs text-gray-500">
              <p className="text-lg font-medium">
                Seller:{" "}
                <span className="font-medium">{crop?.owner?.ownerName}</span>
              </p>
              <p className="text-lg font-medium">
                Email: {crop?.owner?.ownerEmail}
              </p>
            </div>
          </div>
        </div>
        {user.email !== crop?.owner?.ownerEmail ? (
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-white text-center ">
              Are you interested to this crop?
            </h2>
            <div className="card bg-base-100 w-full max-w-xl mx-auto mt-8 shrink-0 shadow-2xl  ">
              <div className="card-body">
                <form onSubmit={handleInterestSubmit}>
                  <fieldset className="fieldset scroll-py-2">
                    <label className="label text-lg">Quantity</label>
                    <input
                      type="number"
                      onChange={(e) => setQuantity(Number(e.target.value))}
                      className="outline-1 outline-orange-600 p-2 rounded-lg text-base"
                      placeholder="quantity"
                      name="quantity"
                    />
                    <p className="text-red-500">{error}</p>
                    <label className="label text-lg">Message</label>
                    <input
                      type="text"
                      className="outline-1 outline-orange-600 p-2 rounded-lg text-base"
                      placeholder="name"
                      name="message"
                    />
                    <label className="label text-lg">Total price</label>
                    <input
                      type="number"
                      value={totalPrice}
                      className="outline-1 outline-orange-600 p-2 rounded-lg text-base"
                      placeholder="price"
                      name="totalPrice"
                      readOnly
                    />
                    <button className="btn btn-primary mt-4">
                      Add Products
                    </button>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h2 className="text-4xl font-bold text-center my-5 text-[#f6b93b]">
              See All The Interest To This Product
            </h2>
            {interests.length === 0 ? (
              <div className="flex justify-center">
                <h2 className="text-2xl font-bold text-white">
                  This product has not received any interest yet.
                </h2>{" "}
              </div>
            ) : (
              <div className="flex justify-center items-center flex-wrap text-white text-center">
                <table>
                  <thead>
                    <tr>
                      <th className="p-3">No.</th>
                      <th className="p-3">Name</th>
                      <th className="p-3">Quantity</th>
                      <th className="p-3">Message</th>
                      <th className="p-3">Status</th>
                      <th className="p-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {interests?.map((interest, index) => (
                      <tr key={interest.index}>
                        <td className="p-3">{index + 1}</td>
                        <td className="p-3">
                          {interest.userName ? interest.userName : "userName"}
                        </td>
                        <td className=" p-1 md:p-3">{interest.quantity}</td>
                        <td className=" p-1 md:p-3">{interest.message}</td>
                        <td className=" p-1 md:p-3">
                          <span
                            className={`badge ${
                              interest.status === "accepted"
                                ? "badge-success"
                                : interest.status === "rejected"
                                ? "badge-error"
                                : "badge-warning"
                            }`}
                          >
                            {interest.status}
                          </span>
                        </td>
                        <td className="flex gap-2 p-3">
                          <button
                            className="btn btn-success"
                            onClick={() => handleAccept(interest?._id)}
                            disabled={interest?.status !== "pending"}
                          >
                            Accept
                          </button>
                          <button
                            onClick={() => handleReject(interest?._id)}
                            className="btn  btn-error"
                            disabled={interest?.status !== "pending"}
                          >
                            Reject
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CropDetails;
