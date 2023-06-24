import { Skill } from "@/type";
import { FunctionComponent } from "react";

const Bar: FunctionComponent<{
  data: Skill;
}> = ({ data: { Icon, skill, level } }) => {
  return (
    <div className="my-2 text-white rounded-full bg-gray-200">
      <div
        className="px-4 py-1 flex items-center rounded-full bg-gradient-to-r from-red-200 to-blue-300 animate-pulse"
        style={{ width: level }}
      >
        <Icon className="mr-3" />
        {skill}
      </div>
    </div>
  );
};
export default Bar;
