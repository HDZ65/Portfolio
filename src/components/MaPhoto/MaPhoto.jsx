import photoMoi from "./../../assets/images/photoMoi.png";
import Image from "next/image"; 




const MaPhoto = () => {
  return (
    <div className="sm:flex sm:justify-center items-center m-auto">
      <Image
        className="flex md:w-2/3 w-3/5 rounded-full m-auto bg-gradientviolet border border-primaryDark-1000 max-w-[450px] lg:w-11/12"
        src={photoMoi}
        alt="Ma photo"
      />
    </div>
  );
};

export default MaPhoto;
