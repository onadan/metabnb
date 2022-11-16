import { maskIcon, connectIcon } from "../assets/icons";
import { IoIosArrowForward, IoMdClose } from "react-icons/io";

const Connect = ({handleClick}) => {
  return (
    <div className={`absolute top-0 left-0`}>
      <div className="fixed h-screen w-full flex justify-center items-center overflow-hidden bg-gray-800 bg-opacity-20">
        <div className=" m-2 bg-white rounded-lg w-full max-w-[30rem]">
          <header className="flex p-5 border-b justify-between items-center">
            <p className="font-bold text-xl">Connect Wallet</p>
            <div className="text-xl" onClick={handleClick}><IoMdClose /></div>
          </header>
          <p className=" text-md font-medium px-5 py-2">
            Choose your preferred wallet:
          </p>
          <div className="px-5">
            <div className="border hover:bg-gray-100 flex justify-between items-center p-2 my-2 rounded-lg">
              <div className="flex items-center gap-1">
                <img
                  src={maskIcon}
                  alt="metamask"
                  className="object-fit max-h-10"
                />
                <p className="font-bold">Metamask</p>
              </div>
              <div className="text-2xl text-gray-400">
                <IoIosArrowForward />
              </div>
            </div>
            <div className="border hover:bg-gray-100 flex justify-between items-center p-2 my-2 rounded-lg">
              <div className="flex items-center gap-1">
                <img
                  src={connectIcon}
                  alt="metamask"
                  className="object-fit max-h-10"
                />
                <p className="font-bold">Wallet Connect</p>
              </div>
              <div className="text-2xl text-gray-400">
                <IoIosArrowForward />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
