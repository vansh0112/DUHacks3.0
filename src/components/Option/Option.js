import React from "react";
import { Link } from "react-router-dom";

const Option = () => {
  return (
    <div className="flex justify-center items-center space-x-4 bg-gray-900 py-5">
      <Link
        to="/Form"
        className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition duration-300 focus:outline-none focus:ring focus:border-blue-300"
      >
        Form
      </Link>
      <Link
        to="/data"
        className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition duration-300 focus:outline-none focus:ring focus:border-blue-300"
      >
        Data
      </Link>
    </div>
  );
};

export default Option;
