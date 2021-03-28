import React from "react";
import { Link } from "react-router-dom";

const DetailCard = ({
  cards: {
    icon,
    iconName,
    title,
    status: { iconClock, description },
  },
}) => {
  return (
    <div className="h-72 rounded-l-3xl rounded-r-3xl overflow-hidden shadow-md">
      <div className="absolute rounded-l-2xl rounded-r-2xl w-24 h-24 flex items-center justify-center bg-blue-500 ml-5 -mt-16">
        <img src={icon} alt={iconName} className="w-14 h-12" />
      </div>
      <div className="px-6 mb-8 mt-16">
        <h1 className="h-32">
          {title === "Solicitudes de creación de empresas" ? (
            <Link to="/approval" className="text-gray-700 text-4xl">
              {title}
            </Link>
          ) : (
            <Link className="text-gray-700 text-4xl">{title}</Link>
          )}
        </h1>
      </div>
      <div className="px-6 py-1 border-t-2 flex pt-2 mt-4">
        <img src={iconClock} alt="status" className="w-5" />
        <p className=" px-3 py-1 text-sm  mr-2">{description}</p>
      </div>
    </div>
  );
};

export default DetailCard;
