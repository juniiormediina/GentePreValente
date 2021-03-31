import React from "react";
import FontAwesome from "react-fontawesome";

/* Components */
import Document from "../Documents/Documents";

/* Icons */
import paperclip from "../../assets/images/paperclip-solid.svg";

const Modal = (props) => {
  return (
    <div className="sm:w-1/2 sm:px-8 py-6">
      {window.screen.width > 640 ? (
        <button
          type="button"
          onClick={() => props.setShowModal(true)}
          className="flex my-6 p-2 shadow-lg rounded"
        >
          <img src={paperclip} alt="" className="w-4 mr-2" />
          Ver archivos adjuntos
        </button>
      ) : (
        <div className="w-full">
          <h3 className="text-xl font-semibold">Documentos cargados</h3>
          <Document />
        </div>
      )}
      {props.showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-96 h-96 my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Documentos cargados
                  </h3>
                  <button
                    className="p-1 -mt-5 -mr-5  border-0  float-right leading-none outline-none focus:outline-none"
                    onClick={() => props.setShowModal(false)}
                  >
                    <FontAwesome name="times" />
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-3 flex justify-center">
                  <Document />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Modal;
