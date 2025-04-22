import { ProjectsWebiste } from "@/type";
import { FunctionComponent } from "react";

import NewTabIcon from '@/public/icons/newtab.svg';

const ProjectCard: FunctionComponent<{
  project: ProjectsWebiste;
}> = ({ project: { title, projectUrl, webisteUrl, des } }) => {
  return (
    <div className="flex flex-col justify-center items-center h-full py-2">
      <div className="flex-1">
        <h4>{title}</h4>
      </div>
      <div className="flex items-center justify-center mt-1">
        <a href={projectUrl} className="mr-6 text-red-300 items-baseline badge info">
          <NewTabIcon className="icon-xs"  />
          View Code
        </a>
        {webisteUrl && (
          <a href={webisteUrl} className="text-red-300 items-baseline badge success">
            Vist Website
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
