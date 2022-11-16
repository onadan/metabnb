import React from "react";
import { mbtokenIcon, metamaskIcon, openseaIcon } from "../assets/icons";
import { frame, img_four, img_one, img_three, img_two } from "../assets/images";
import NftCard from "../components/NftCard";
import { mainNftImages } from "../data";

const Home = () => {
  return (
    <>
      <main className="max-w-[1240px] w-full mx-auto px-4 py-2 ">
        <div className="min-h-[400px] grid md:grid-cols-9 mx-auto pt-14">
          <div className="grid-rows-1 md:col-span-5 min-h-[400px]">
            <p className="text-4xl pb-8 leading-normal font-bold max-w-[35rem] lg:w-full sm:text-5xl md:text-6xl">
              Rent a <span className="text-[#A02279]">place</span> away from{" "}
              <span className="text-[#A02279]">Home</span> in the{" "}
              <span className="text-[#e996cfd9]">Metaverse</span>
            </p>
            <p className="sm:font-semibold leading-tight text-xl md:text-1xl pb-10 max-w-[35rem] lg:w-full">
              we provide you access to luxury and affordable houses in the
              metaverse, get a chance to turn your imagination to reality at
              your comfort zone
            </p>

            <div className="grid grid-cols-3 rounded-xl overflow-hidden border max-w-[35rem] lg:w-full">
              <div className="col-span-2 flex items-center px-2">
                <input
                  type="text"
                  name="search"
                  placeholder="Search for location"
                  className="outline-none w-full"
                />
              </div>
              <div className="col-span-1 bg-[#A02279] text-white py-3 px-4 flex justify-center items-center">
                Search
              </div>
            </div>
          </div>

          <div className="grid-rows-1 md:col-span-4 w-8/12 mx-auto">

            <div className=" grid grid-cols-2 gap-2">
              <div className="col-span-1 grid grid-rows-6">
                <div className="row-span-1 "></div>
                <div className="row-span-5 grid grid-row-2 gap-2">
                  <div className="row-span-1">
                    <img src={img_one} alt="" className="object-cover" />
                  </div>
                  <div className="row-span-1">
                    <img src={img_two} alt="" className="object-cover" />
                  </div>
                </div>
              </div>

              <div className="col-span-1 grid grid-rows-6">
                <div className="row-span-5 grid grid-row-2  gap-2">
                  <div className="row-span-1">
                    <img src={img_three} alt="" className="object-cover" />
                  </div>
                  <div className="row-span-1">
                    <img src={img_four} alt="" className="object-cover" />
                  </div>
                </div>
                <div className="row-span-1 "></div>
              </div>

            </div>
          </div>
        </div>
      </main>

      <div className="bg-[#A02279] w-full overflow-hidden">
        <div className="max-w-[1000px] mx-auto py-2">
          <div className=" grid grid-cols-3 gap-10 justify-evenly px-4">
            <img src={mbtokenIcon} alt="mbtoken" className="object-fit col-span-1" />
            <img src={metamaskIcon} alt="metamask" className="object-fit col-span-1 " />
            <img src={openseaIcon} alt="opensea" className="object-fit col-span-1" />
          </div>
        </div>
      </div>

      <section className="max-w-[1240px] w-full mx-auto px-4 py-5 pb-14">
        <header className="py-10 text-center font-semibold md:text-5xl text-3xl">
          Inspiration for your next adventure
        </header>
        <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center">
          {mainNftImages.map((item) => (
            <NftCard image={item.image} key={item.id} />
          ))}
        </div>
      </section>

      <section className="bg-[#A02279] text-white">
        <div className="max-w-[1240px] w-full mx-auto px-4 py-20">
          <div className=" flex flex-col-reverse gap-10 md:grid md:grid-cols-2 items-center">
            <div className="col-span-1 flex flex-col justify-between h-max max-w-[30rem] z-10">
              <header className="font-bold text-5xl py-1">Metabnb NFTs</header>
              <p className="font-medium text-xl leading-normal py-10 ">
                Discover our NFT gift cards collection. Loyal customers gets
                amazing gift cards which are traded as NFTs. These NFTs gives
                our cutomer access to loads of our exclusive services.
              </p>
              <div className=" bg-white text-[#A02279] w-max px-4 py-3 rounded-lg cursor-pointer">
                Learn more
              </div>
            </div>
            <div className="col-span-1 flex justify-center ">
              <img src={frame} alt="nfts" className=" max-w-[20rem] md:max-w-[30rem] h-auto" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
