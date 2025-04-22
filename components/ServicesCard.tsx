import { Service } from "@/type";
import { FunctionComponent } from "react";

const ServicesCard: FunctionComponent<{ services: Service }> = ({
  services: { Icon, title, about },
}) => {
  const markup = () => {
    return {
      __html: about,
    };
  };
  return (
    <div className="flex items-center space-x-4">
      <Icon className="fill-blue-200 icon-2xl text-blue-200" />
      <div>
        <h4 className="font-bold">{title}</h4>
        <p dangerouslySetInnerHTML={markup()} className="text-sm" />
      </div>
    </div>
  );
};

export default ServicesCard;
