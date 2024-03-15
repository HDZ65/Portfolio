import photoMoi from "./../../assets/images/photoMoi.png";
import Image from "next/image"; 




const MaPhoto = () => {
  return (
    <div className="pr-16">
      <Image
        className="rounded-full bg-gradientviolet border border-primaryDark-1000 max-w-[450px] w-11/12"
        src={photoMoi}
        alt="Ma photo"
      />
    </div>
  );
};

export default MaPhoto;
