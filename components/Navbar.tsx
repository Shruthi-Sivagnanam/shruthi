import Link from "next/link";
import { useRouter } from "next/router";
import { FunctionComponent, useEffect, useState } from "react";

export default function Navbar() {
  const NavItem: FunctionComponent<{
    activeItem: string;
    setActiveItem: Function;
    name: string;
    route: string;
  }> = ({ activeItem, setActiveItem, name, route }) => {
    return activeItem !== name ? (
      <Link href={route}>
        <span onClick={() => setActiveItem(name)}>{name}</span>
      </Link>
    ) : null;
  };

  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname == "/") setActiveItem("About");
    if (pathname == "/resume") setActiveItem("Resume");
    if (pathname == "/projects") setActiveItem("Projects");
    if (pathname == "/skill") setActiveItem("Skill");
  }, []);

  const [activeItem, setActiveItem] = useState("");

  return (
    <div className="flex justify-between space-x-3 py-3 mx-3">
      <span className="text-xl text-red-200 border-b-4 border-red-200">
        {activeItem}
      </span>
      <div className="flex text-xl text-blue-200 space-x-3">
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="About"
          route="/"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Resume"
          route="/resume"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Skills"
          route="/skill"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Projects"
          route="/projects"
        />
      </div>
    </div>
  );
}
