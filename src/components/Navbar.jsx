import { Link } from "react-router-dom";
import { logo } from "../assets/icons";

const Navbar = ({ handleClick }) => {
  return (
    <div className="max-w-[1240px] w-full mx-auto px-4 py-2 pt-5">
      <div className="flex justify-between items-center flex-wrap gap-2">
        <Link to="/">
          <div className="flex justify-center items-center">
            <img src={logo} alt="metabnb_logo" />
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#DC3E88] via-[#B840AE] to-[#843FE8] font-bold text-2xl sm:text-3xl md:text-4xl">
              Metabnb
            </p>
          </div>
        </Link>
        <div className="md:flex md:gap-5 hidden">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/place-to-stay">Place to stay</Link>
          </li>
          <li>NFTs</li>
          <li>Commmunity</li>
        </div>
        <div>
          <button
            className="bg-[#A02279] rounded-lg py-2 px-4 text-white text-sm sm:text-lg"
            onClick={handleClick} 
          >
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
