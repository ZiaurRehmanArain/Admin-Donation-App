import React, { useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const AllRequestCard = () => {
  const [approvalStatus, setApprovalStatus] = useState(null);

  const handleApprovalChange = (status) => {
    setApprovalStatus(status);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md">
      <div className="p-4">
        {/* Name and Title */}
        <div className="mb-4">
          <h2 className="text-xl font-bold">John Doe</h2>
          <p className="text-gray-600">Software Engineer</p>
        </div>

        {/* Category */}
        <div className="mb-4">
          <span className="text-sm font-semibold text-gray-600">Category:</span>
          <span className="ml-2 text-sm text-blue-500">Technology</span>
        </div>

        {/* Approval Dropdown */}
        <div className="mb-4">
          <label htmlFor="approvalStatus" className="text-sm font-semibold text-gray-600 block">
            Approval Status:
          </label>
          <select
            id="approvalStatus"
            name="approvalStatus"
            onChange={(e) => handleApprovalChange(e.target.value)}
            value={approvalStatus || ''}
            className="mt-1 p-2 w-full border rounded-md"
          >
            <option value="" disabled>
              Select Approval Status
            </option>
            <option value="approve">Approve</option>
            <option value="reject">Reject</option>
          </select>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end p-4 bg-gray-100">
        <button className="bg-green-500 text-white px-4 py-2 rounded-md mr-2">
          Save
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded-md">
          Delete
        </button>
      </div>
    </div>
  );
};

export default AllRequestCard;
