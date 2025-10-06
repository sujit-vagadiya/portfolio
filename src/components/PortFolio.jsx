import React from "react";
import CAR from "../../public/car.png";
import ET from "../../public/et.png";
import FOOD from "../../public/food.png";
import IPL from "../../public/ipl.png";
import PET from "../../public/pet.png";
import TODO from "../../public/todo.png";
import CHATBOT from "../../public/chatbot.png";
import TRAVELLER from "../../public/traveller.png";

function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: CAR,
      name: "CAR RENTAL MANAGEMENT",
      videoLink: "https://youtu.be/oFlRbqxlfqQ",
    },
    {
      id: 2,
      logo: ET,
      name: "EXPENSE TRACKER",
      videoLink: "https://youtu.be/mAnnhkAx6G4",
    },
    {
      id: 3,
      logo: FOOD,
      name: "FOOD DELIVERY WEBSITE",
      videoLink: "https://youtu.be/nYI1Wf3mSF4",
    },
    {
      id: 4,
      logo: IPL,
      name: "IPL MANAGEMENT",
      videoLink: "https://youtu.be/G-CAAjDHjQg",
    },
    {
      id: 5,
      logo: PET,
      name: "PET RELATED PRODUCT",
      videoLink: "https://youtu.be/pHX2THkWJgg",
    },
    {
      id: 6,
      logo: TODO,
      name: "TODO LIST",
      videoLink: "https://youtu.be/bjPhTcOQE_w",
    },
    {
      id: 7,
      logo: CHATBOT,
      name: "CHATBOT",
      videoLink: "https://youtu.be/TM6eRuOuBIg",
    },
    {
      id: 8,
      logo: TRAVELLER,
      name: "TRAVELLER WEBSITE",
      videoLink: "https://youtu.be/KksuYRCSuik",
    },
  ];

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
        <span className="underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map(({ id, logo, name, videoLink }) => (
            <div
              key={id}
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px] mx-auto mt-2"
                alt={name}
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2 text-center">
                  {name}
                </div>
                <p className="px-2 text-gray-700 text-center">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="px-6 py-4 flex justify-center">
                <a
                  href={videoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                    Video
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
