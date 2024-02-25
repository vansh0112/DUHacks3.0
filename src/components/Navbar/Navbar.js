import React from "react";
import healthReport from "../../assets/health-report.png";
import { loadAccount } from "../../store/interactions";
import { useDispatch, useSelector } from "react-redux";
import Blockies from "react-blockies";
import config from "../../config.json";


const Navbar = () => {
  const dispatch = useDispatch();
  const provider = useSelector((state) => state.provider.connection);
  const account = useSelector((state) => state.provider.account);
  const balance = useSelector((state) => state.provider.balance);
  const chainId = useSelector((state) => state.provider.chainId);

  const connectHandler = async (e) => {
    await loadAccount(provider, dispatch);
  };

  const networkHandler = async (e) => {
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [
        {
          chainId: e.target.value,
        },
      ],
    });
  };

  return (
    <div className="navbar bg-black text-white p-4 md:px-8 shadow-lg flex flex-col md:flex-row items-center justify-between">
      <div className="flex items-center space-x-4 mb-4 md:mb-0">
        <img src={healthReport} alt="Health Report" width="40" height="40" />
        <h2 className="text-lg font-semibold">Medical Record</h2>
      </div>

      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
        <p className="text-sm">
          {balance ? (
            <>
              <small>My Balance: </small>
              {Number(balance).toFixed(4)}
            </>
          ) : (
            <>
              <small>My Balance: </small>
              0ETH
            </>
          )}
        </p>

        {account ? (
          <a
            href="#"
            className="flex items-center text-sm font-semibold focus:outline-none focus:shadow-outline-blue"
          >
            <span className="mr-2">{account.slice(0, 5) + "...." + account.slice(38, 42)}</span>
            <Blockies
              seed={account}
              size={10}
              scale={3}
              color="#2187D0"
              bgColor="#F1F2F9"
              spotColor="#767F92"
              className="identicon"
            />
          </a>
        ) : (
          <button
            className="bg-blue-500 hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue py-2 px-4 rounded"
            onClick={connectHandler}
          >
            Connect
          </button>
        )}

        <select
          name="network"
          id="network"
          onChange={networkHandler}
          value={config[chainId] ? `0x${chainId.toString(16)}` : `0`}
          className="bg-gray-800 border border-gray-700 p-2 rounded focus:outline-none focus:border-blue-500"
        >
          <option value="0" disabled>
            Select Network
          </option>
          <option value="31337">Localhost</option>
          <option value="0x5">Goerli</option>
          <option value="0x13881">Mumbai</option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;
