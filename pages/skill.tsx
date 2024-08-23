import Bar from "@/components/Bar";
import HeadTag from "@/components/HeadTag";
import { framework, language, tools } from "@/data";

export default function skill() {
  return (
    <>
      <HeadTag />
      <div className="p-3 overflow-y-scroll" style={{ height: "75vh" }}>
        <div className="grid md:grid-cols-2 gap-5 my-2">
          <div>
            <h5 className="my-3 text-xl font-bold">Languages & Framework</h5>
            <div className="my-2">
              {language.map((lang) => (
                <Bar data={lang} key={lang.skill} />
              ))}
            </div>
          </div>
          <div>
            <h5 className="my-3 text-xl font-bold">Frameworks</h5>
            <div className="my-2">
              {framework.map((tech) => (
                <Bar data={tech} key={tech.skill}></Bar>
              ))}
            </div>
          </div>
          <div>
            <h5 className="my-3 text-xl font-bold">Tools and Software</h5>
            <div className="my-2">
              {tools.map((tool) => (
                <Bar data={tool} key={tool.skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
