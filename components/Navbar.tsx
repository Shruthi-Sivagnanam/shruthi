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
    if (pathname == "/education") setActiveItem("Education");
    if (pathname == "/projects") setActiveItem("Projects");
    if (pathname == "/work") setActiveItem("Work");
  }, [pathname]);

  const [activeItem, setActiveItem] = useState("");

  return (
    <div className="flex justify-between space-x-3 py-3 mx-3 items-center">
      <span className="text-xl text-red-200 border-b-4 border-red-200 cursor-pointer">
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
          name="Education"
          route="/education"
        />
        <NavItem 
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Work"
          route="/work"
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
