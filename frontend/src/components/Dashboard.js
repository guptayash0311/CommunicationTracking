import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCompaniesAsync,
  deleteCompanyAsync,
} from "../redux/companiesSlice";
import { fetchCommunicationMethodsAsync } from "../redux/communicationSlice";
import axios from "axios";
import CompanyRow from "./CompanyRow";

const Dashboard = () => {
  const dispatch = useDispatch();
  const companies = useSelector((state) => state.companies.companies);
  const [communications, setCommunications] = useState([]);
  const methods = useSelector((state) => state.communications.methods);

  useEffect(() => {
    dispatch(fetchCompaniesAsync());
    dispatch(fetchCommunicationMethodsAsync());

    const fetchCommunications = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/logs/");
        setCommunications(response.data);
      } catch (error) {
        console.error("Error fetching communications:", error);
      }
    };

    fetchCommunications();
  }, [dispatch]);

  if (!methods || methods.length === 0) {
    return <div>Loading communication methods...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
        Communication Dashboard
      </h1>
      <div className="overflow-x-auto bg-gray-50 p-6 rounded-lg shadow-xl">
        <table className="table-auto w-full border rounded-lg">
          <thead>
            <tr className="bg-slate-700 text-white text-left">
              <th className="px-4 py-3 font-semibold">Company Name</th>
              <th className="px-4 py-3 font-semibold">Location</th>
              <th className="px-4 py-3 font-semibold">Last Communications</th>
              <th className="px-4 py-3 font-semibold">
                Upcoming Communication
              </th>
              <th className="px-4 py-3 font-semibold text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {companies.length > 0 ? (
              companies.map((company) => (
                <CompanyRow
                  key={company.id}
                  company={company}
                  communications={communications.filter(
                    (comm) => comm.company === company.id
                  )}
                  methods={methods}
                  onDelete={() => dispatch(deleteCompanyAsync(company.id))}
                />
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="text-center text-gray-500 py-6 italic"
                >
                  No companies available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
