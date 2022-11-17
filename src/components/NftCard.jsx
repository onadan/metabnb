import { FaStar } from "react-icons/fa";
import { HiHeart } from "react-icons/hi";

const NftCard = ({ image }) => {
  return (
    <div className="w-[280px] h-[380px] border rounded-lg p-4 overflow-hidden relative">
      <div className="w-full max-h-[16.5rem] h-full rounded-2xl overflow-hidden shadow-lg">
        {image ? (
          <img src={image} alt="nft_image" className="object-cover h-full w-auto" />
        ) : (
          <div className="flex justify-center items-center w-full h-full text-sm bg-gray-300 border">Preview not available</div>
        )}
        <div className="absolute top-4 right-5 text-xl p-2 text-gray-300 ">
          <HiHeart />
        </div>
      </div>
      <div className="pt-3 pb-1 flex justify-between items-center">
        <p className="text-xs">Desert King</p>
        <p className="font-bold text-xs">1MBT per night</p>
      </div>
      <div className="py-1 flex justify-between items-center">
        <p className="text-xs">2345km away</p>
        <p className="text-xs">available for 2weeks stay</p>
      </div>
      <div className="flex gap-2 py-1 text-[#A02279] text-sm">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
    </div>
  );
};

export default NftCard;
