import React, { useState } from "react";
import { submitRecord } from "../../store/interactions";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import Option from "../Option/Option";


const Form = () => {
  const provider = useSelector((state) => state.provider.connection);
  const medical = useSelector((state) => state.medical.contract);
  const account = useSelector((state) => state.provider.account);
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    submitRecord(
      name,
      age,
      gender,
      bloodType,
      allergies,
      diagnosis,
      treatment,
      provider,
      medical,
      dispatch
    );
    resetForm();
  };

  const resetForm = () => {
    setName("");
    setAge("");
    setGender("");
    setBloodType("");
    setAllergies("");
    setDiagnosis("");
    setTreatment("");
  };

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [allergies, setAllergies] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [treatment, setTreatment] = useState("");

  return (
    <><Navbar /><Option /><div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="max-w-md w-full p-8 rounded-lg shadow-lg bg-gray-900">
        <h1 className="text-3xl font-semibold mb-4">Patient Details</h1>

        {account ? (
          <form onSubmit={submitHandler}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium">
                Patient Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="4Bit"
                className="block w-full mt-1 p-2 border-b-2 border-gray-600 focus:outline-none focus:border-blue-500 bg-gray-800 text-white" />
            </div>

            <div className="mb-4">
              <label htmlFor="age" className="block text-sm font-medium">
                Age:
              </label>
              <input
                type="number"
                id="age"
                name="age"
                required
                placeholder="29"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="block w-full mt-1 p-2 border-b-2 border-gray-600 focus:outline-none focus:border-blue-500 bg-gray-800 text-white" />
            </div>

            <div className="mb-4">
              <label htmlFor="gender" className="block text-sm font-medium">
                Gender:
              </label>
              <select
                id="gender"
                name="gender"
                required
                onChange={(e) => setGender(e.target.value)}
                value={gender}
                className="block w-full mt-1 p-2 border-b-2 border-gray-600 focus:outline-none focus:border-blue-500 text-white bg-gray-800"
              >
                <option value="" className="text-white">Select Gender</option>
                <option value="Male" className="text-white">Male</option>
                <option value="Female" className="text-white">Female</option>
                <option value="Other" className="text-white">Other</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="bloodType" className="block text-sm font-medium">
                Blood type:
              </label>
              <input
                type="text"
                id="bloodType"
                name="bloodType"
                required
                placeholder="B positive"
                value={bloodType}
                onChange={(e) => setBloodType(e.target.value)}
                className="block w-full mt-1 p-2 border-b-2 border-gray-600 focus:outline-none focus:border-blue-500 bg-gray-800 text-white" />
            </div>

            <div className="mb-4">
              <label htmlFor="allergies" className="block text-sm font-medium">
                Allergies:
              </label>
              <input
                type="text"
                id="allergies"
                name="allergies"
                required
                placeholder="Pollen allergy"
                value={allergies}
                onChange={(e) => setAllergies(e.target.value)}
                className="block w-full mt-1 p-2 border-b-2 border-gray-600 focus:outline-none focus:border-blue-500 bg-gray-800 text-white" />
            </div>

            <div className="mb-4">
              <label htmlFor="diagnosis" className="block text-sm font-medium">
                Diagnosis:
              </label>
              <input
                type="text"
                id="diagnosis"
                name="diagnosis"
                required
                placeholder="Osteoporosis"
                value={diagnosis}
                onChange={(e) => setDiagnosis(e.target.value)}
                className="block w-full mt-1 p-2 border-b-2 border-gray-600 focus:outline-none focus:border-blue-500 bg-gray-800 text-white" />
            </div>

            <div className="mb-4">
              <label htmlFor="treatment" className="block text-sm font-medium">
                Treatment:
              </label>
              <input
                type="text"
                id="treatment"
                name="treatment"
                required
                placeholder="Surgery"
                value={treatment}
                onChange={(e) => setTreatment(e.target.value)}
                className="block w-full mt-1 p-2 border-b-2 border-gray-600 focus:outline-none focus:border-blue-500 bg-gray-800 text-white" />
            </div>

            <div className="mt-6">
              <input
                type="submit"
                value="Submit"
                className="bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center" />
            </div>
          </form>
        ) : (
          <h1 className="text-2xl font-semibold">Connect the account</h1>
        )}
      </div>
    </div></>
  );
};

export default Form;
