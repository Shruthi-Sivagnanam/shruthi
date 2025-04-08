import Navbar from "@/components/Navbar";
import SideBar from "@/components/SideBar";
import "@/styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <div className="grid grid-cols-12 gap-6 px-4 my-10 lg:px-48 sm:px-20 md:px-32">
      <div className="lg:col-span-4 bg-white rounded-2xl col-span-12 p-4 text-center flex items-center">
        <AnimatePresence>
          <motion.div
            initial="initialState"
            animate="animateState"
            exit="exitState"
            className="w-full"
            transition={{
              duration: 0.75,
            }}
            variants={{
              initialState: {
                opacity: 0,
              },
              animateState: {
                opacity: 1,
              },
              exitState: {},
            }}
          >
            <SideBar />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="lg:col-span-8 col-span-12">
        <div className="bg-white rounded-2xl mb-2">
          <Navbar />
        </div>
        <div className="bg-white rounded-2xl mt-5 pb-4">
          <AnimatePresence>
            <motion.div
              key={router.route}
              initial="initialState"
              animate="animateState"
              exit="exitState"
              transition={{
                duration: 0.75,
              }}
              variants={{
                initialState: {
                  opacity: 0,
                },
                animateState: {
                  opacity: 1,
                },
                exitState: {},
              }}
            >
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
