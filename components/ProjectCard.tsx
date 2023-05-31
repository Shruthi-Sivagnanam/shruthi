import { ProjectsWebiste } from "@/type";
import { FunctionComponent } from "react";

const ProjectCard: FunctionComponent<{
  project: ProjectsWebiste;
}> = ({ project: { title, projectUrl, webisteUrl, des } }) => {
  return (
    <div>
      <h4 className="font-bold">{title}</h4>
      <i className="text-sm">{des}</i>
      <div className="flex sticky top-[100vh]">
        <a href={projectUrl} className="mr-6 text-red-300">
          View Project
        </a>
        {webisteUrl && (
          <a href={webisteUrl} className="text-red-300">
            Vist Website
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
