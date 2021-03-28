import React from "react";

import FontAwesome from "react-fontawesome";

import LogoNegro from "../../assets/images/Logo Negro.png";
import paperclip from "../../assets/images/paperclip-solid.svg";

const Approval = () => {
  return (
    <div>
      <div className="py-6">
        <p>Administración/Aprobación de Empresas</p>
      </div>
      {window.screen.width < 640 ? (
        <div className="flex justify-center py-6">
          <button>
            <FontAwesome name="chevron-circle-left" size="2x" />
          </button>
          <p>Empresa 1 de 2 pendientes por aprobación</p>
          <button>
            <FontAwesome name="chevron-circle-right" size="2x" />
          </button>
        </div>
      ) : null}
      <div className="w-full container mx-auto md:w-9/12 shadow-md bg-white rounded-xl">
        <div className="p-5 sm:p-20">
          <div className="flex sm:justify-end">
            <div className="sm:mr-16 w-72 h-56 bg-gray-300 flex items-center justify-center">
              <img src={LogoNegro} alt="" />
            </div>
            {window.screen.width > 640 ? (
              <div className="flex flex-col">
                <button className="m-2 p-2 shadow-lg rounded">
                  <FontAwesome
                    name="check-circle"
                    background="#14CF10"
                    size="2x"
                    className="mr-2 fill-current text-green-700"
                  />
                  Aprobar Empresa
                </button>
                <button className="m-2 p-2 shadow-lg rounded">
                  <FontAwesome
                    name="times-circle"
                    size="2x"
                    className="mr-2 fill-current text-red-600"
                  />
                  Rechazar Empresa
                </button>
              </div>
            ) : null}
          </div>
          <form className="w-full flex flex-wrap py-6">
            <div className="w-full sm:flex">
              <div className="block sm:w-1/2 py-6">
                <label htmlFor="" className="block">
                  <span>Nombre de la empresa</span>

                  <input
                    type="text"
                    className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                  />
                </label>
              </div>
              <div className="block sm:w-1/2 sm:px-8 py-6">
                <label htmlFor="">Razón Social</label>
                <input
                  type="text"
                  className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                />
              </div>
            </div>
            <div className="w-full sm:flex">
              <div className="block sm:w-1/2 py-6">
                <label htmlFor="">Tipo de identificación</label>
                <input
                  type="text"
                  className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                />
              </div>
              <div className="sm:w-1/2 sm:px-8 py-6">
                <label htmlFor="">Identificación</label>
                <input
                  type="text"
                  className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                />
              </div>
            </div>
            <div className="w-full sm:flex">
              <div className="sm:w-1/2 py-6">
                <label htmlFor=""># de empleados</label>
                <input
                  type="text"
                  className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                />
              </div>
              {window.screen.width > 640 ? (
                <div className="sm:w-1/2 sm:px-8 py-6">
                  <button className="flex my-6 p-2 shadow-lg rounded">
                    <img src={paperclip} alt="" className="w-4 mr-2" />
                    Ver archivos adjuntos
                  </button>
                </div>
              ) : (
                <div>
                  <h1>Aqui va la lista de los documentos</h1>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
      {window.screen.width < 640 ? (
        <div className="w-full flex flex-col items-center">
          <button className="m-2 p-2 py-3 shadow-lg rounded-full bg-white w-52">
            <FontAwesome
              name="check-circle"
              background="#14CF10"
              size="2x"
              className="mr-2 fill-current text-green-700"
            />
            Aprobar Empresa
          </button>
          <button className="m-2 p-2 py-3 shadow-lg rounded-full bg-white w-52">
            <FontAwesome
              name="times-circle"
              size="2x"
              className="mr-2 fill-current text-red-600"
            />
            Rechazar Empresa
          </button>
        </div>
      ) : null}

      {window.screen.width > 640 ? (
        <div className="flex justify-center py-6">
          <button>
            <FontAwesome name="chevron-circle-left" size="2x" />
          </button>
          <p>Empresa 1 de 2 pendientes por aprobación</p>
          <button>
            <FontAwesome name="chevron-circle-right" size="2x" />
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Approval;
