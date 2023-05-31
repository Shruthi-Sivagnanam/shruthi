import HeadTag from "@/components/HeadTag";
import ProjectCard from "@/components/ProjectCard";
import { projects_details } from "@/data";

export default function projects() {
  return (
    <>
      <HeadTag />
      <div className="px-5 py-2 overflow-y-scroll" style={{ height: "75vh" }}>
        <div className="grid md:grid-cols-2 gap-5 my-2 ">
          {projects_details.map((project) => (
            <div className="bg-gray-200 rounded-lg lg: col-span-1 p-3">
              <ProjectCard project={project} key={project.title} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
