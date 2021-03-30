import React from "react";

/* import documents */
import { documents } from "../../assets/data/documents_data";

const Documentes = () => {
  return (
    <div className="flex-col flex item-center">
      {documents.map((elem, i) => (
        <div key={i}>
          <a href={elem.file} download={`${elem.name}.pdf`}>
            <div className="flex m-4">
              <p className="w-44 text-lg">{elem.name}</p>
              <img src={elem.icon} alt="Document" className="w-5 ml-2" />
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Documentes;
