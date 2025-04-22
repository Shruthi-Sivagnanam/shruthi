import Image from "next/image";
import profileImg from "../public/profileImg.jpg";
import LinkedInIcon from '@/public/icons/linkedin.svg';
import MediumIcon from "@/public/icons/medium.svg";
import GitHubIcon from "@/public/icons/github.svg";
import TwitterIcon from "@/public/icons/twitter.svg";
import LocationIcon from "@/public/icons/location.svg";

const SideBar = () => {
  return (
    <div>
      <Image
        src={profileImg}
        alt="myimg"
        className="w-32 h-32 mx-auto rounded-full"
      />
      <h3 className="my-1 text-2xl font-medium tracking-wider">
        <span className="text-blue-200">Shruthi </span>
        <span className="text-red-300">Sivagnanam </span>
      </h3>
      <p className="px-2 py-2 my-2 font-bold text-red-300 text-lg">
        Developer
      </p>

      <div className="flex justify-around my-3 text-blue-200 md:w-full">
        <a
          href="https://github.com/Shruthi-Sivagnanam"
        >
          <GitHubIcon className="icon icon-2xl"/>
        </a>
        <a 
          href="https://x.com/Shruthi11012003"
        >
          <TwitterIcon className="icon icon-2xl"/>
        </a>
        <a
          href="https://www.linkedin.com/in/shruthi-sivagnanam/"
        >
          <LinkedInIcon className="icon icon-2xl"/>
        </a>
        <a
          href="https://medium.com/@shruthi.11012003"
        >
          <MediumIcon className="icon icon-2xl"/>
        </a>
      </div>

      <div
        className="py-4 my-4 bg-gray-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <LocationIcon className="icon icon-lg" />
          <span>TamilNadu,India</span>
        </div>
      </div>
      <button
        className="bg-gradient-to-r from-red-300 to-blue-200 w-8/12 rounded-full py-2 my-2 text-white"
        onClick={() => window.open("mailto:shruthi.11012003@gmail.com")}
      >
        Email me
      </button>
    </div>
  );
};

export default SideBar;
