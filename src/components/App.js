import { Route, Routes } from "react-router-dom";
import "../App.css";
import Data from "./Data/Data";
import Form from "./Form/Form";
import 'tailwindcss/tailwind.css'
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  loadAccount,
  loadAllData,
  loadMedical,
  loadNetwork,
  loadProvider,
  subscribeToEvents,
} from "../store/interactions";
import config from "../config.json";
import Alert from "./Alert/Alert";
import Home from "./Home";

function App() {
  const dispatch = useDispatch();
  const loadBlockchainData = async () => {
    const provider = loadProvider(dispatch);
    const chainId = await loadNetwork(provider, dispatch);
    const medical_config = config[80001].medical;
    window.ethereum.on("accountsChanged", () => {
      loadAccount(provider, dispatch);
    });
    window.ethereum.on("chainChanged", () => {
      window.location.reload();
    });
    const medical = loadMedical(provider, medical_config.address, dispatch);
    loadAllData(provider, medical, dispatch);
    subscribeToEvents(medical, dispatch);
  };
  useEffect(() => {
    loadBlockchainData();
  });
  return (
    <div className="App">
      <div className="navbar">
        
        <Routes>
        <Route path = '/' exact element={<Home/>} />
        <Route path="/Form" exact element={<Form />} />
        <Route path="/Data" element={<Data />} />
        </Routes>
        <Alert />
      </div>
    </div>
  );
}

export default App;
