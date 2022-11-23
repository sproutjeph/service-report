import React, { useState } from "react";
import { Modal } from "../modal/Modal";

const ReportModal = ({ showModal, setShowModal }: any) => {
  return (
    <>
      <Modal.Frame
        open={showModal}
        onClose={() => {
          setShowModal(false);
        }}
      >
        <>
          <>
            <Modal.Head>
              <h2 className="text-lg">Enter Your Report</h2>
            </Modal.Head>
          </>

          <Modal.Body>
            <>
              <div className=" mt-4">
                <div className=" ">
                  <label htmlFor="input-wizard-1" className="form-label">
                    Restaurant name
                  </label>
                  <input type="text" className="form-control"></input>
                </div>
              </div>
              <div className="">
                <button
                  className="btn bg-violet-900 py-2 px-5 rounded-md shadow-md mt-5 text-sm tracking-widest"
                  onClick={() => {
                    setShowModal(false);
                  }}
                >
                  Save
                </button>
              </div>
            </>
          </Modal.Body>
        </>
      </Modal.Frame>
    </>
  );
};

export default ReportModal;
