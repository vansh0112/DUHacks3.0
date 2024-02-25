import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteData } from "../../store/interactions";
import { dataBookSelector } from "../../store/selectors";
import Navbar from "../Navbar/Navbar";
import Option from "../Option/Option";


const Data = () => {
  const orderData = useSelector(dataBookSelector);
  const account = useSelector((state) => state.provider.account);
  const provider = useSelector((state) => state.provider.connection);
  const medical = useSelector((state) => state.medical.contract);
  const dispatch = useDispatch();

  const deleteHandler = (e, data) => {
    if (window.confirm("Do you want to delete the record?")) {
      deleteData(medical, data.recordId, dispatch, provider);
    } else {
      console.log("Data not delete");
    }
  };

  return (
    <><Navbar /><Option /><div className="bg-gray-900 text-white">
      {account ? (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-700">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-800 text-left text-sm font-semibold uppercase tracking-wider">
                  Record ID
                </th>
                <th className="px-6 py-3 bg-gray-800 text-left text-sm font-semibold uppercase tracking-wider">
                  Data and Time
                </th>
                <th className="px-6 py-3 bg-gray-800 text-left text-sm font-semibold uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 bg-gray-800 text-left text-sm font-semibold uppercase tracking-wider">
                  Age
                </th>
                <th className="px-6 py-3 bg-gray-800 text-left text-sm font-semibold uppercase tracking-wider">
                  Gender
                </th>
                <th className="px-6 py-3 bg-gray-800 text-left text-sm font-semibold uppercase tracking-wider">
                  Blood Type
                </th>
                <th className="px-6 py-3 bg-gray-800 text-left text-sm font-semibold uppercase tracking-wider">
                  Allergies
                </th>
                <th className="px-6 py-3 bg-gray-800 text-left text-sm font-semibold uppercase tracking-wider">
                  Diagnosis
                </th>
                <th className="px-6 py-3 bg-gray-800 text-left text-sm font-semibold uppercase tracking-wider">
                  Treatment
                </th>
                <th className="px-6 py-3 bg-gray-800 text-left text-sm font-semibold uppercase tracking-wider">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {orderData &&
                orderData.map((data, index) => {
                  return (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{data.formattedTimestamp}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{data.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{data.ageNew}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{data.gender}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{data.bloodType}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{data.allergies}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{data.diagnosis}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{data.treatment}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button
                          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded focus:outline-none focus:ring focus:border-red-300"
                          onClick={(e) => deleteHandler(e, data)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      ) : (
        <h1 className="text-2xl font-semibold">Connect the account</h1>
      )}
    </div></>
  );
};

export default Data;
