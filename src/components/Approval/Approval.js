import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

/* Icons */
import LogoNegro from "../../assets/images/Logo_Negro.png";

/* Documents */
import { documents } from "../../assets/data/documents_data";

/* Components */
import Road from "../Road/Road";
import Buttons from "../Buttons/Buttons";
import Modal from "../Modal/Modal";

const Approval = () => {
  const [showModal, setShowModal] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [busionessName, setBusionessName] = useState("");
  const [identificationType, setIdentificationType] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [employeesNumber, setEmployeesNumber] = useState("");

  useEffect(() => {
    documents.forEach((elmen) => {
      setCompanyName(elmen.companyName);
      setBusionessName(elmen.busionessName);
      setIdentificationType(elmen.identificationType);
      setIdNumber(elmen.idNumber);
      setEmployeesNumber(elmen.employeesNumber);
    });
  }, []);

  return (
    <div>
      <div className="py-6">
        <p>
          <Link to="/" className="ml-5 text-blue">
            Administración
          </Link>
          / Aprobación de Empresas
        </p>
      </div>
      {window.screen.width < 640 ? <Road /> : null}
      <div className="w-full container mx-auto md:w-9/12 shadow-md bg-white rounded-xl">
        <div className="p-5 sm:p-20">
          <div className="flex justify-center sm:justify-end">
            <div className="sm:mr-16 2xl:mr-72 w-72 h-56 bg-gray-light flex items-center justify-center">
              <img src={LogoNegro} alt="" />
            </div>
            {window.screen.width > 640 ? <Buttons /> : null}
          </div>
          <form className="w-full flex flex-wrap py-6">
            <div className="w-full sm:flex">
              <div className="block sm:w-1/2 py-6">
                <label htmlFor="" className="block">
                  <span>Nombre de la empresa</span>
                  <input
                    type="text"
                    className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black font-bold text-base"
                    value={companyName}
                  />
                </label>
              </div>
              <div className="block sm:w-1/2 sm:px-8 py-6">
                <label htmlFor="">Razón Social</label>
                <input
                  type="text"
                  className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black font-bold text-base"
                  value={busionessName}
                />
              </div>
            </div>
            <div className="w-full sm:flex">
              <div className="block sm:w-1/2 py-6">
                <label htmlFor="">Tipo de identificación</label>
                <input
                  type="text"
                  className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black font-bold text-base"
                  value={identificationType}
                />
              </div>
              <div className="sm:w-1/2 sm:px-8 py-6">
                <label htmlFor="">Identificación</label>
                <input
                  type="text"
                  className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black font-bold text-base"
                  value={idNumber}
                />
              </div>
            </div>
            <div className="w-full sm:flex">
              <div className="sm:w-1/2 py-6">
                <label htmlFor=""># de empleados</label>
                <input
                  type="text"
                  className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black font-bold text-base"
                  value={employeesNumber}
                />
              </div>
              <Modal showModal={showModal} setShowModal={setShowModal}></Modal>
            </div>
          </form>
        </div>
      </div>
      {window.screen.width < 640 ? <Buttons /> : null}
      {window.screen.width > 640 ? <Road /> : null}
    </div>
  );
};

export default Approval;
