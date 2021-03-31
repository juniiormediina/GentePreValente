import React from "react";
import FontAwesome from "react-fontawesome";

const Road = () => {
  return (
    <div className="flex justify-center py-6">
      <button>
        <FontAwesome name="chevron-circle-left" size="2x" />
      </button>
      <p className="p-0.5">Empresa 1 de 2 pendientes por aprobación</p>
      <button>
        <FontAwesome name="chevron-circle-right" size="2x" />
      </button>
    </div>
  );
};

export default Road;
