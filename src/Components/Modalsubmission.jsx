import React from "react";

const ModalForSubmitConfirm = ({ isOpen, onClose, onConfirm, label }) => {
  if (!isOpen) return null;

  return (
<div className="absolute inset-0 flex items-center justify-center bg-red bg-opacity-200 z-50 overflow-hidden">
<div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-1/3">
        <h2 className="text-lg font-bold mb-4">Confirm Submission</h2>
        <p className="mb-4">
          Are you sure you want to submit this {label || "information"}?
        </p>
        <div className="flex justify-end space-x-2">
          <button
            className="bg-gray-300 hover:bg-gray-400 text-black font-semibold py-2 px-4 rounded-md"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-[#04A9F5]  hover:bg-[#0390d0] text-white font-semibold py-2 px-4 rounded-md"
            onClick={onConfirm}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalForSubmitConfirm;
