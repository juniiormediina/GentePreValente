import React from "react";
import FontAwesome from "react-fontawesome";

const Buttons = () => {
  return (
    <div className="flex py-7 flex-col items-center">
      <button className="m-2 p-2 py-3 shadow-lg rounded-full bg-white w-52">
        <FontAwesome
          name="check-circle"
          size="2x"
          className="mr-2 fill-current text-green"
        />
        Aprobar Empresa
      </button>
      <button className="m-2 p-2 py-3 shadow-lg rounded-full bg-white w-52">
        <FontAwesome
          name="times-circle"
          size="2x"
          className="mr-2 fill-current text-red"
        />
        Rechazar Empresa
      </button>
    </div>
  );
};

export default Buttons;
