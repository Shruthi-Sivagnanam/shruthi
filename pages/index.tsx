import HeadTag from "@/components/HeadTag";
import ServicesCard from "@/components/ServicesCard";
import { about, frameworks, programmingLanguage, services, toolsAndIde } from "@/data";
import {} from "react";



const Home = () => {
  return (
    <>
      <HeadTag />
      <div
        className="flex flex-col px-5 pt-1 overflow-y-scroll"
        style={{ height: "75vh" }}
      >
        <p className="my-3 font-medium text-justify">
          {about.map((a) => (
            <>{a.des}</>
          ))}
        </p>
        <div className="p-2">
          <h3 className="font-bold">What am I Doing</h3>
          <div className="grid gap-3 lg:grid-cols-2 pt-2">
            {services.map((service) => (
              <div
                className="lg:col-span-1 bg-gray-200 rounded-lg lg: col-span-1 p-3"
                key={service.title}
              >
                <ServicesCard services={service} key={service.title} />
              </div>
            ))}
          </div>
        </div>
        <h3 className="font-bold pl-2">My Strengths</h3>
        <div className="mb-2 pl-2">
          <div>
            <h5 className="my-3 font-bold">Languages</h5>
            <div className="flex flex-wrap gap-2">
            {
              programmingLanguage.map((icon) => (
                <div className="tooltip" key={icon.text}>
                   <span className="tooltipText tw">{icon.text}</span>
                    <icon.iconName className="icon-xl cursor-pointer tooltip"/>
                </div>
                
              ))
            }
            </div>
          </div>
          <div>
            <h5 className="my-3 font-bold">Frameworks And Libraries</h5>
            <div className="my-2">
            <div className="flex flex-wrap gap-2">
              {
                frameworks.map((icon) => (
                  <div className="tooltip" key={icon.text}>
                    <span className="tooltipText tw">{icon.text}</span>
                    <icon.iconName className="icon-xl cursor-pointer tooltip"/>
                  </div>
                ))
              }
            </div>
            </div>
          </div>
          <div>
            <h5 className="my-3 font-bold">Tools and Software</h5>
            <div className="my-2">
              <div className="flex flex-wrap gap-2">
                {toolsAndIde.map((icon) => (
                  <div className="tooltip" key={icon.text}>
                    <span className="tooltipText tw">{icon.text}</span>
                    <icon.iconName className="icon-xl cursor-pointer tooltip"/>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
