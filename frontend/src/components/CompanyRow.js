import React, { useState } from "react";
import CommunicationModal from "./CommunicationModal";

const CompanyRow = ({ company, communications, onDelete, methods }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredComm, setHoveredComm] = useState(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const getLastFiveCommunications = () => {
    const now = new Date();
    const pastCommunications = communications
      .filter((comm) => new Date(comm.date) < now)
      .sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort by date descending
      .slice(0, 5);

    return pastCommunications.map((comm, index) => {
      const method = methods.find((m) => m.id === comm.method);
      const methodName = method ? method.name : "Unknown Method";
      return (
        <div
          key={index}
          className="flex items-center gap-2 bg-gray-100 p-2 rounded-md mb-2 shadow relative"
          onMouseEnter={() => setHoveredComm(comm)}
          onMouseLeave={() => setHoveredComm(null)}
        >
          <span className="text-blue-600 font-semibold">⚠️</span>
          <span>{methodName} - {" "}<span className="text-gray-600">{new Date(comm.date).toLocaleDateString()}</span></span>

          {/* Hovered Communication Notes Modal */}
          {hoveredComm === comm && (
            <div className="absolute top-0 left-0 mt-6 p-2 bg-white text-gray-700 border rounded-lg shadow-lg z-10">
              <p>{comm.notes}</p>
            </div>
          )}
        </div>
      );
    });
  };

  const getNextScheduledCommunications = () => {
    const now = new Date();
    const futureCommunications = communications
      .filter((comm) => new Date(comm.date) > now)
      .sort((a, b) => new Date(a.date) - new Date(b.date)); // Sort by date ascending

    if (futureCommunications.length === 0) {
      return <span className="text-gray-500">No upcoming communication.</span>;
    }

    return futureCommunications.map((comm, index) => {
      const method = methods.find((m) => m.id === comm.method);
      const methodName = method ? method.name : "Unknown Method";
      const commDate = new Date(comm.date);
      const isDueToday = commDate.toDateString() === now.toDateString();
      const isOverdue = commDate < now;

      return (
        <div
          key={index}
          className={`flex items-center gap-2 p-2 rounded-md mb-2 shadow ${
            isOverdue
              ? "bg-red-100 text-red-600"
              : isDueToday
              ? "bg-yellow-100 text-yellow-600"
              : "bg-green-100 text-green-600"
          } relative`}
          onMouseEnter={() => setHoveredComm(comm)}
          onMouseLeave={() => setHoveredComm(null)}
        >
          <span className="text-lg font-semibold">⏳</span>
          <span>
            {methodName} -{" "}
            <span className="font-bold">{commDate.toLocaleDateString()}</span>
          </span>

          {/* Hovered Communication Notes Modal */}
          {hoveredComm === comm && (
            <div className="absolute top-0 left-0 mt-6 p-2 bg-white text-gray-700 border rounded-lg shadow-lg z-10">
              <p>{comm.notes}</p>
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <tr className="border-t bg-gray-300">
      <td className="px-4 py-2 text-left font-medium">{company.name}</td>
      <td className="px-4 py-2 text-left">{company.location}</td>
      <td className="px-4 py-2">
        {communications.length > 0 ? (
          <div>{getLastFiveCommunications()}</div>
        ) : (
          <span className="text-gray-500">No communications yet.</span>
        )}
      </td>
      <td className="px-4 py-2">{getNextScheduledCommunications()}</td>
      <td className="px-4 py-2 flex gap-2">
        <button
          onClick={openModal}
          className="bg-slate-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Log Communication
        </button>
        <button
          onClick={onDelete}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </td>
      {isModalOpen && (
        <CommunicationModal
          company={company}
          onClose={closeModal}
        />
      )}
    </tr>
  );
};

export default CompanyRow;
