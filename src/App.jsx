import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Connect from "./components/Connect";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import PlaceToStay from "./pages/PlaceToStay";

const ModalContext = createContext(false);

const App = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      {/* <div className="bg-blue-700 text-white flex items-center justify-center p-2">
        <p className="text-lg font-bold">Made with ❤️</p>
      </div> */}

      <ModalContext.Provider value={modal}>
        <Navbar handleClick={() => setModal(!modal)} />
      </ModalContext.Provider>

      {modal && <Connect handleClick={() => setModal(!modal)} />}

      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/place-to-stay" element={<PlaceToStay />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
