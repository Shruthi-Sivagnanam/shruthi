import HeadTag from "@/components/HeadTag";
import { achivements, education, work } from "@/data";

export default function resume() {
  return (
    <>
      <HeadTag />
      <div className="p-3 overflow-y-scroll" style={{ height: "75vh" }}>
        <div className="grid md:grid-cols-2 gap-5 my-2 ">
          <div className="bg-gray-200 rounded-lg lg: col-span-1 p-3">
            <h5 className="my-3 text-xl font-bold">Education</h5>
            {education.map((edu) => (
              <div key={edu.course}>
                <h5 className="my-2 text-s font-bold">{edu.course}</h5>
                <p className="text-sm">{edu.institute}</p>
                <p className="text-sm">{edu.year}</p>
                <p className="text-sm">{edu.percentage}</p>
              </div>
            ))}
          </div>
          <div className="bg-gray-200 rounded-lg lg: col-span-1 p-3">
            <h5 className="my-3 text-xl font-bold">Achievements</h5>
            <div>
              {achivements.map((achivement) => (
                <>
                  <h5 className="my-2 text-s font-bold">{achivement.title}</h5>
                  <p className="text-sm">{achivement.des}</p>
                </>
              ))}
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-5 my-2">
          <div className="bg-gray-200 rounded-lg lg: col-span-1 p-3">
            <h5 className="my-3 text-xl font-bold">Work Experience</h5>
            {work.map((w) => (
              <div key={w.title}>
                <h5 className="my-2 text-s font-bold">{w.title}</h5>
                <p className="text-sm">{w.companyName}</p>
                <p className="text-sm">{w.duration}</p>
                <i className="text-sm">{w.ip}</i>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
