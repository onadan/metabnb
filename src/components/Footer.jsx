import { fbIcon, footerLogo, inIcon, twIcon } from "../assets/icons";

const Footer = () => {
  return (
    <div className="bg-black p-4 min-h-[10rem]">
      <div className="max-w-[1240px] w-full mx-auto px-4 py-2">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-white justify-between items-center gap-4">

          <div className="col-span-1 flex flex-col min-h-[15rem] justify-between p-2">
            <img src={footerLogo} alt="logo" className="object-cover max-w-[12rem] h-auto" />
            <div className="flex flex-col gap-8 justify-between">
              <div className="flex gap-2">
                <img src={fbIcon} alt="fb_logo" />
                <img src={inIcon} alt="in_logo" />
                <img src={twIcon} alt="tw_logo" />
              </div>
              <p>&copy; 2022 Metabnb</p>
            </div>
          </div>

          <div className="col-span-1 flex flex-col min-h-[15rem] p-5 gap-4">
          <div className="flex flex-col gap-4">
            <h1 className="font-bold">Community</h1>
            <p className="text-sm">NFT</p>
            <p className="text-sm">Token</p>
            <p className="text-sm">Landlord</p>
            <p className="text-sm">Discord</p>
            </div>
          </div>

          <div className="col-span-1 flex flex-col min-h-[15rem] p-5 gap-4">
          <div className="flex flex-col gap-4">
            <h1 className="font-bold">Places</h1>
            <p className="text-sm">Castle</p>
            <p className="text-sm">Farm</p>
            <p className="text-sm">Beach</p>
            <p className="text-sm">Learn more</p>
            </div>
          </div>

          <div className="col-span-1 flex flex-col min-h-[15rem] p-5 gap-4">
          <div className="flex flex-col gap-4">
            <h1 className="font-bold">About Us</h1>
            <p className="text-sm">Road map</p>
            <p className="text-sm">Creators</p>
            <p className="text-sm">Career</p>
            <p className="text-sm">Contact Us</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
