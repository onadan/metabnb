import { Link } from "react-router-dom";
import { logo } from "../assets/icons";
import { HiMenuAlt3 } from "react-icons/hi";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const Navbar = ({ handleClick }) => {
  const [menu, setMenu] = useState(false);

  const handleMenuClick = () => {
    setMenu(!menu);
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  return (
    <div className="fixed bg-white w-full shadow-lg z-50">
      <div className="max-w-[1240px]  mx-auto px-4 py-3 bg-white z-50 ">
        <div className="flex justify-between items-center gap-2">
          <Link to="/">
            <div className="flex justify-center items-center">
              <img src={logo} alt="metabnb_logo" />
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#DC3E88] via-[#B840AE] to-[#843FE8] font-bold text-4xl md:text-5xl">
                Metabnb
              </p>
            </div>
          </Link>
          <div className="md:flex md:gap-5 hidden">
            <li>
              <Link to="/" className="hover:text-[#A02279]">
                Home
              </Link>
            </li>
            <li>
              <Link to="/place-to-stay" className="hover:text-[#A02279]">
                Place to stay
              </Link>
            </li>
            <li className="hover:text-[#A02279]">NFTs</li>
            <li className="hover:text-[#A02279]">Commmunity</li>
          </div>
          <div className="hidden md:flex">
            <button
              className="bg-[#A02279] rounded-lg py-2 px-4 text-white text-sm sm:text-lg"
              onClick={handleClick}
            >
              Connect Wallet
            </button>
          </div>
          <div
            className="md:hidden text-4xl text-[#A02279]"
            onClick={() => handleMenuClick()}
          >
            {menu === false ? <HiMenuAlt3 /> : <IoMdClose />}
          </div>
        </div>
        {menu && (
          <div className="md:hidden mt-10 py-2 min-h-[10rem]">
            <div className="flex flex-col justify-center items-center gap-2">
              <Link to="/" className="menuBtn" onClick={handleMenuClick}>
                Home
              </Link>

              <Link
                to="/place-to-stay"
                className="menuBtn"
                onClick={handleMenuClick}
              >
                Place to stay
              </Link>
              <li className="menuBtn" onClick={handleMenuClick}>
                NFTs
              </li>
              <li className="menuBtn" onClick={handleMenuClick}>
                Commmunity
              </li>

              <div className="w-full" onClick={handleMenuClick}>
                <button
                  className="border border-[#A02279] text-[#A02279] font-bold w-full hover:bg-[#A02279] rounded-lg py-2 px-4 hover:text-white text-sm sm:text-lg hover:scale-105"
                  onClick={handleClick}
                >
                  Connect Wallet
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
