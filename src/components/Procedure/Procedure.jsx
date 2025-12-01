import React from "react";

const Procedure = () => {
  return (
    <div className="bg-[#273c75] hover:bg-[#273c32] py-6 ">
      <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-16">
        How Our Platform Makes Trading Easy
      </h2>
      <div className="w-11/12 mx-auto">
        {/* procedure starts */}
        <div className="lg:h-[600px] md:relative space-y-3">
          <div className="lg:w-[35%] lg:h-50 lg:absolute lg:top-50 lg:left-[32%] bg-[#f7f1e3] lg:bg-[#706fd3] lg:text-white  p-6 rounded-xl flex justify-center items-center">
            <h2 className="text-xl md:text-3xl font-semibold text-[#ffb142] text-center">
              See How Everything <br /> <span className="">Comes Together</span>
            </h2>
          </div>
          <div className=" lg:w-[35%] lg:h-50 lg:absolute lg:left-[32%] bg-[#f7f1e3]  p-6 rounded-xl">
            <h2 className="text-xl font-semibold text-[#3B3B98]">
              Step 1: Create an Account
            </h2>
            <p className="text-[#3B3B98] md:text-lg">
              Users begin by registering on the platform with their name, email,
              profile photo, and password. Once registered, they gain access to
              all features, including posting crops, browsing listings, and
              contacting buyers or sellers, ensuring a secure, personalized, and
              seamless experience from the very start.
            </p>
          </div>
          <div className=" lg:w-[35%] lg:h-50 lg:absolute lg:left-0 lg:top-50 bg-[#f7f1e3]  p-6 rounded-xl">
            <h2 className="text-xl font-semibold text-[#3B3B98]">
              Step 2: Browse or Post Crops
            </h2>

            <p className="text-[#3B3B98] md:text-lg">
              After registration, users can browse available crop listings or
              post their own crops with details like images, quantity, price,
              and location. Farmers can showcase their produce to potential
              buyers, while buyers can easily filter and explore crops, making
              the trading process simple, efficient, and transparent.
            </p>
          </div>
          <div className=" lg:w-[35%] lg:h-50 lg:absolute lg:left-[32%] lg:bottom-0 bg-[#f7f1e3]  p-6 rounded-xl">
            <h2 className="text-xl font-semibold text-[#3B3B98]">
              Step 3: Contact the Seller
            </h2>
            <p className="text-[#3B3B98] md:text-lg">
              Once a buyer finds a suitable crop, they can directly contact the
              seller through the platform. This allows them to ask questions,
              negotiate prices, and arrange delivery or pickup securely,
              ensuring smooth communication between both parties.
            </p>
          </div>
          <div className="lg:w-[35%] lg:h-50 lg:absolute lg:right-0 lg:top-50 bg-[#f7f1e3]  p-6 rounded-xl">
            <h2 className="text-xl font-semibold text-[#3B3B98]">
              Step 4: Complete the Deal
            </h2>
            <p className="text-[#3B3B98] md:text-lg">
              After agreeing on the terms, buyers and sellers finalize the
              transaction. The platform provides a safe and reliable way to
              complete deals, ensuring both parties have a smooth experience
              while trading fresh, quality crops.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Procedure;
