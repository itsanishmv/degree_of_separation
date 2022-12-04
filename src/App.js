import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddConnections from "./pages/AddConnections";
import ConnectionList from "./pages/ConnectionList";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="w-[50%] flex flex-col  h-[100vh]  bg-[white] relative">
      <div className="p-5 flex justify-between items-center">
        <img src="Applogo.png" alt="logo" />
        <div className=" font-poppins text-[#0091ff] font-semibold text-sm">
          View more
        </div>
      </div>

      <BrowserRouter>
        <ToastContainer position="top-center" />
        <Routes>
          <Route path="/" element={<AddConnections />} />
          <Route path="/list" element={<ConnectionList />} />
        </Routes>

        <Navbar />
      </BrowserRouter>
    </div>
  );
}

export default App;
