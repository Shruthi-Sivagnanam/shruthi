import Navbar from "@/components/Navbar";
import SideBar from "@/components/SideBar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="grid grid-cols-12 gap-6 px-4 my-10 lg:px-48 sm:px-20 md:px-32">
      <div className="lg:col-span-4 bg-white rounded-2xl col-span-12 p-4 text-center">
        <SideBar />
      </div>
      <div className="lg:col-span-8 bg-white rounded-2xl col-span-12 pb-4">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </div>
  );
}
