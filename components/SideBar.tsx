import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

const SideBar = () => {
  return (
    <div>
      <img
        src="https://media.licdn.com/dms/image/D5603AQHH93U3b1L0SQ/profile-displayphoto-shrink_800_800/0/1716400683796?e=1725494400&v=beta&t=XZ7nNW4IbV-dTK4BYPzTmgaNaRzIo2GheZwtncaIAHM"
        alt="myimg"
        className="w-32 h-32 mx-auto rounded-full"
      />
      <h3 className="my-1 text-2xl font-medium tracking-wider">
        <span className="text-blue-200">Shruthi </span>
        <span className="text-red-300">Sivagnanam </span>
      </h3>
      <p className="px-2 py-2 my-2 bg-gray-200 rounded-full animate-pulse">
        Developer
      </p>

      <div className="flex justify-around my-3 text-blue-200 md:w-full">
        <a
          href="https://github.com/Shruthi-Sivagnanam "
          className="hover:animate-bounce"
        >
          <AiFillGithub className="w-8 h-8" />
        </a>
        <a
          href="https://www.linkedin.com/in/shruthi-sivagnanam/"
          className="hover:animate-bounce"
        >
          <AiFillLinkedin className="w-8 h-8" />
        </a>
      </div>

      <div
        className="py-4 my-4 bg-gray-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>TamilNadu,India</span>
        </div>
        <p className="my-2">shruthi.11012003@gmail.com</p>
        <p className="my-2">8778618606</p>
      </div>
      <button
        className="bg-gradient-to-r from-red-300 to-blue-200 w-8/12 rounded-full py-2 my-2 text-white hover:animate-bounce"
        onClick={() => window.open("mailto:shruthi.11012003@gmail.com")}
      >
        Email me
      </button>
    </div>
  );
};

export default SideBar;
