import HeadTag from "@/components/HeadTag";
import ServicesCard from "@/components/ServicesCard";
import { about, services } from "@/data";
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
      </div>
    </>
  );
};

export default Home;
