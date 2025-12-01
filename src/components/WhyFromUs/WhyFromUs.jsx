import React from "react";

const WhyFromUs = () => {
  return (
    <div className="bg-[#273c75] hover:bg-[#273c32] py-12 ">
      <h2 className="text-5xl font-bold text-white text-center mb-16">
        Why Buy From Us
      </h2>
      <div className="w-11/12 mx-auto">
        <div className="w-10/12 mx-auto text-white mt-5">
          <h2 className="text-2xl mb-3">Purpose:</h2>
          <ul>
            <li className="list-disc hover:bg-[#3c6382] text-lg rounded-lg ml-6 mb-3 p-4">
              <span className="text-xl font-bold">Establish Trust:</span> Our
              platform ensures trust through secure transactions, verified
              sellers, and accurate crop listings. Buyers can confidently engage
              knowing their data is protected, interactions are transparent, and
              every crop meets quality standards. This reliable and professional
              environment eliminates doubts, building credibility and long-term
              confidence for both buyers and sellers.
            </li>
            <li className="list-disc hover:bg-[#3c6382] text-lg rounded-lg ml-6 mb-3 p-4">
              <span className="text-xl font-bold"> Highlight Benefits: </span>
              We offer unique advantages like a wide variety of fresh crops,
              transparent pricing, and direct communication with sellers. Easy
              browsing, smart filters, and clear product information help users
              quickly find what they need, showcasing the platform’s efficiency
              and value.
            </li>
            <li className="list-disc hover:bg-[#3c6382] text-lg rounded-lg ml-6 mb-3 p-4">
              <span className="text-xl font-bold">Encourage Engagement:</span>{" "}
              Engagement is encouraged through interactive features like
              browsing, creating accounts, saving favorites, and contacting
              sellers. Personalized suggestions, notifications, and easy posting
              for sellers make users active and involved, fostering a lively and
              dynamic marketplace.
            </li>
            <li className="list-disc hover:bg-[#3c6382] text-lg rounded-lg ml-6 mb-3 p-4">
              <span className="text-xl font-bold">Improve Conversion:</span>{" "}
              Clear value propositions, simple navigation, and trust indicators
              help turn visitors into buyers. The smooth, transparent process
              reduces hesitation, encourages purchases, and builds loyalty,
              improving conversions while delivering a professional, reliable,
              and satisfying trading experience.
            </li>
          </ul>
        </div>
        {/* Platform Benefits starts */}
        <div className="hover:bg-[#3c6382] py-6 px-3 rounded-xl">
          <h2 className="text-4xl text-white text-center my-6">
            Platform Benefits{" "}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 lg:p-6">
            <div className="bg-white hover:bg-base-300 p-4 rounded-xl shadow-2xl">
              <img
                className="w-full h-40 md:h-72"
                src={"https://i.ibb.co.com/W4HVvJpd/cropsquality.jpg"}
                alt=""
              />
              <h2 className="text-xl font-bold">Fresh & Quality Crops</h2>
              <ul>
                <li className="list-disc ml-8">
                  Every crop is harvested recently and verified for quality.
                </li>
                <li className="list-disc ml-8">
                  Buyers can trust the product is fresh and suitable for their
                  needs.
                </li>
              </ul>
            </div>
            <div className="bg-white hover:bg-base-300 p-4 rounded-xl shadow-2xl">
              <img
                className="w-full h-40 md:h-72"
                src={"https://i.ibb.co.com/kVhKx2fQ/trustedfarmer.jpg"}
                alt=""
              />
              <h2 className="text-xl font-bold">Trusted Farmers & Sellers</h2>
              <ul>
                <li className="list-disc ml-8">
                  All sellers are verified and provide accurate crop details.
                </li>
                <li className="list-disc ml-8">
                  Encourages confidence in the buying process.
                </li>
              </ul>
            </div>
            <div className="bg-white hover:bg-base-300 p-4 rounded-xl shadow-2xl">
              <img
                className="w-full h-40 md:h-72"
                src={"https://i.ibb.co.com/1JsSP7rp/secure.jpg"}
                alt=""
              />
              <h2 className="text-xl font-bold">Secure Transactions</h2>
              <ul>
                <li className="list-disc ml-8">
                  Platform ensures safe communication and transaction
                  processing.
                </li>
                <li className="list-disc ml-8">
                  Protects both buyers and sellers during negotiations and
                  deals.
                </li>
              </ul>
            </div>
            <div className="bg-white hover:bg-base-300 p-4 rounded-xl shadow-2xl">
              <img
                className="w-full h-40 md:h-72"
                src={"https://i.ibb.co.com/RTXgk1yJ/transparent.webp"}
                alt=""
              />
              <h2 className="text-xl font-bold">Easy & Transparent Process</h2>
              <ul>
                <li className="list-disc ml-8">
                  Simple sign-up, browsing, and posting process.
                </li>
                <li className="list-disc ml-8">
                  Direct communication with sellers makes buying clear and
                  efficient.
                </li>
              </ul>
            </div>
            <div className="bg-white hover:bg-base-300 p-4 rounded-xl shadow-2xl">
              <img
                className="w-full h-40 md:h-72"
                src={"https://i.ibb.co.com/pvJ79VwQ/varietycrops.jpg"}
                alt=""
              />
              <h2 className="text-xl font-bold">Wide Variety of Crops</h2>
              <ul>
                <li className="list-disc ml-8">
                  Offers grains, vegetables, fruits, spices, and seeds in one
                  place.
                </li>
                <li className="list-disc ml-8">
                  Buyers can find everything they need without visiting multiple
                  platforms.
                </li>
              </ul>
            </div>
            <div className="bg-white hover:bg-base-300 p-4 rounded-xl shadow-2xl">
              <img
                className="w-full h-40 md:h-72"
                src={"https://i.ibb.co.com/3mcYt7sx/globalreach.webp"}
                alt=""
              />
              <h2 className="text-xl font-bold">Local & Global Reach</h2>
              <ul>
                <li className="list-disc ml-8">
                  Connects buyers to farmers both locally and across regions.
                </li>
                <li className="list-disc ml-8">
                  Promotes wider access to fresh and diverse crops.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyFromUs;
