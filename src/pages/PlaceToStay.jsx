import { GoSettings } from "react-icons/go";
import NftCard from "../components/NftCard";
import { nftImages } from "../data";

const PlaceToStay = () => {
  return (
    <div className="max-w-[1240px] w-full mx-auto px-4 pt-20 pb-2">
      <div className="pt-10 pb-5 grid grid-cols-3 md:flex justify-between flex-wrap items-center font-medium gap-4">
        <li>Restaurant</li>
        <li>Cottage</li>
        <li>Castle</li>
        <li>Fantasy City</li>
        <li>Beach</li>
        <li>Carbins</li>
        <li>Off-grid</li>
        <li>Farm</li>
        <div className="p-2 flex justify-center items-center gap-4 border rounded-lg col-span-3">
          <p className="font-semibold">Location</p>
          <div>
            <GoSettings />
          </div>
        </div>
      </div>

      <section className="max-w-[1240px] w-full mx-auto px-4 py-5 pb-14">
        <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center">
          {nftImages.map((item) => (
            <NftCard image={item.image} key={item.id} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default PlaceToStay;
