import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
const SideBar = () => {
  return (
    <div>
      <img
        src="https://media.licdn.com/dms/image/C4E03AQGGs0lbB0Dn9Q/profile-displayphoto-shrink_800_800/0/1628409635517?e=2147483647&v=beta&t=qICBLSgLIZh2DEh7XgyxCKkLbViwCq9k2ytLZD-g6no"
        alt="myimg"
        className="w-32 h-32 mx-auto rounded-full"
      />
      <h3 className="my-1 text-2xl font-medium tracking-wider">
        <span className="text-blue-200">Shruthi </span>
        <span className="text-red-300">Sivagnanam </span>
      </h3>
      <p className="px-2 py-2 my-2 bg-gray-200 rounded-full">Developer</p>

      <div className="flex justify-around my-3 text-blue-200 md:w-full">
        <a href="https://github.com/Shruthi-Sivagnanam">
          <AiFillGithub className="w-8 h-8" />
        </a>
        <a href="https://www.linkedin.com/in/shruthi-sivagnanam/">
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
        className="bg-gradient-to-r from-red-300 to-blue-200 w-8/12 rounded-full py-2 my-2 text-white"
        onClick={() => window.open("mailto:shruthi.11012003@gmail.com")}
      >
        Email me
      </button>
    </div>
  );
};

export default SideBar;
