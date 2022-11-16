import { FaStar } from "react-icons/fa";

const NftCard = ({ image }) => {
  return (
    <div className="w-[292px] h-[372px] border rounded-lg p-4">
      <div className="w-[260px] h-[265px]">
        {image ? (
          <img src={image} alt="nft_image" className="object-cover" />
        ) : (
          <div className="flex justify-center items-center h-full font-bold text-md">Preview not available</div>
        )}
      </div>
      <div className="pt-2 pb-1 flex justify-between items-center">
        <p className="text-sm">Desert King</p>
        <p className="font-bold text-sm">1MBT per night</p>
      </div>
      <div className="py-1 flex justify-between items-center">
        <p className="text-sm">2345km away</p>
        <p className="text-sm">available for 2weeks stay</p>
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
