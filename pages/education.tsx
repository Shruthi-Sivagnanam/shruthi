import HeadTag from "@/components/HeadTag";
import { education_details } from "@/data";

export default function education() {
  return(
    <>
      <HeadTag/>
      <div className="p-3 overflow-y-scroll" style={{ height: "75vh" }}>
        {education_details.map((item) => (
        <>
          <div className="relative pl-8 sm:pl-32 py-6 group">
            <div className="flex flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-red-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-blue-200 after:border-4 after:box-content after:border-blue-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
              <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-red-300 bg-blue-200 rounded-full">{item.year}</time>
              <div className="text-xl font-bold text-slate-900">{ item.course }</div>
            </div>
            <div className="text-slate-500">{ item.institute }</div>
            <div className="text-slate-500">{ item.percentage }</div>
          </div>
        </>
        ))}
      </div>
    </>
  )
}