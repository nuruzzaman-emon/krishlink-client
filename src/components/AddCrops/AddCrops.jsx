import React from "react";
import useAuth from "../../hooks/UseAuth";
import useAxios from "../../hooks/useAxios";
import Swal from "sweetalert2";

const AddCrops = () => {
  const { user } = useAuth();
  const axiosInstance = useAxios();
  const handleAddCrop = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    const pricePerUnit = e.target.pricePerUnit.value;
    const unit = e.target.unit.value;
    const quantity = e.target.quantity.value;
    const location = e.target.location.value;
    const description = e.target.description.value;
    const type = e.target.type.value;
    const newCrop = {
      name,
      image,
      pricePerUnit,
      unit,
      quantity,
      location,
      description,
      type,
      owner: { ownerEmail: user.email, ownerName: user.displayName },
      created_at: new Date(),
    };

    axiosInstance
      .post("/allcrops", newCrop)
      .then((data) => {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "The crop has been added usccessfully",
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(data.data);
      })
      .catch((err) => console.log(err));

    console.log(newCrop);
  };
  return (
    <div className="card bg-base-100 w-full max-w-xl mx-auto mt-8 shrink-0 shadow-2xl  ">
      <div className="card-body">
        <form onSubmit={handleAddCrop}>
          <fieldset className="fieldset scroll-py-2">
            <label className="label text-lg">Name</label>
            <input
              type="text"
              className="outline-1 outline-orange-600 p-2 rounded-lg text-base"
              placeholder="name"
              name="name"
              required
            />
            <label className="label text-lg">Image Url</label>
            <input
              type="text"
              className="outline-1 outline-orange-600 p-2 rounded-lg text-base"
              placeholder="Image url"
              name="image"
              required
            />
            <label className="label text-lg">Price</label>
            <input
              type="number"
              className="outline-1 outline-orange-600 p-2 rounded-lg text-base"
              placeholder="price"
              name="pricePerUnit"
              required
            />
            <label className="label text-lg">Unit</label>
            <select
              name="unit"
              className="w-full border text-lg border-gray-300 outline-1 outline-orange-600 rounded-lg p-2 focus:ring focus:ring-orange-600"
              required
            >
              <option value="">Select Unit</option>
              <option value="Grain">kg</option>
              <option value="Vegetable">piece</option>
              <option value="Fruit">ton</option>
            </select>
            <label className="label text-lg">Quantity</label>
            <input
              type="number"
              className="outline-1 outline-orange-600 p-2 rounded-lg text-base"
              placeholder="quantity"
              name="quantity"
              required
            />
            <label className="label text-lg">Location</label>
            <input
              type="text"
              className="outline-1 outline-orange-600 p-2 rounded-lg text-base"
              placeholder="location"
              name="location"
              required
            />
            <label className="label text-base">Type</label>
            <select
              name="type"
              className="w-full border text-lg border-gray-300 outline-1 outline-orange-600 rounded-lg p-2 focus:ring focus:ring-orange-600"
              required
            >
              <option value="">Select Type</option>
              <option value="Grain">Grain</option>
              <option value="Vegetable">Vegetable</option>
              <option value="Fruit">Fruit</option>
              <option value="Spice">Spice</option>
              <option value="Oilseed">Oilseed</option>
            </select>
            <label className="label text-lg">Description</label>
            <textarea
              className="outline-1 outline-orange-600 p-2 rounded-lg text-base"
              name="description"
              placeholder="Write about your item"
              rows={4}
              required
            ></textarea>
            <button className="btn btn-primary mt-4">Add Products</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default AddCrops;
