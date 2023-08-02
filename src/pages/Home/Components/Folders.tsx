import { ArrowUpRightIcon, PlayButtonIcon, SolutionsIcon } from "../Icons";
import styles from "./Folders.module.css";

const Folders = () => {
  return (
    <section className="mt-20 flex gap-2 min-h-[25vh]">
      <div className="w-2/4  flex flex-col justify-between max-w-[480px]">
        <div className="flex items-center gap-4">
          <button className="w-10 h-10 rounded-full bg-white text-black flex justify-center items-center">
            <PlayButtonIcon size={18} />
          </button>
          <div className="flex flex-col text-neutral-400">
            <span className="leading-none text-sm">Let's See</span>
            <span className="leading-none mt-1">How We Did It</span>
          </div>
        </div>
        <div className="">
          <button className="block uppercase py-2 px-4 border border-neutral-400 text-neutral-400 rounded-full mt-2">
            Web Analytics
          </button>
          <button className="block uppercase py-2 px-4 border border-neutral-400 text-neutral-400 rounded-full mt-2">
            Email Marketing
          </button>
          <button className="block uppercase py-2 px-4 border border-neutral-400 text-neutral-400 rounded-full mt-2">
            SEO 2.0
          </button>
        </div>
      </div>
      <div className="w-3/4 text-black flex gap-1">
        <div
          className={`${styles.folder}  h-full flex flex-col bg-orange-600 before:bg-orange-600 p-6 flex-1 max-w-[350px]`}
        >
          <h3 className="font-[500]">Unique</h3>
          <h3 className="font-[500] leading-none">Business Solutions</h3>

          <div className="mt-auto">
            <SolutionsIcon size={70} />
          </div>
        </div>
        <div
          className={`${styles.folder}  h-full flex flex-col bg-gray-300 before:bg-gray-300 p-6 flex-1 max-w-[350px]`}
        >
          <div className="flex justify-between items-center">
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-black rounded-full"></div>
              <div className="w-2 h-2 bg-transparent border border-black rounded-full"></div>
            </div>
            <div>
              <ArrowUpRightIcon size={25} />
            </div>
          </div>

          <h3 className="mt-auto text-4xl font-[500]">Our Case Studies</h3>
        </div>
        <div
          className={`${styles.folder} h-full  flex flex-col bg-amber-400 before:bg-amber-400 p-6 flex-1 max-w-[350px]`}
        >
          <h3 className="font-[500]">Successful</h3>
          <h3 className="font-[500] leading-none">Projects</h3>
          <h3 className="mt-auto text-7xl font-[500]">
            700 <sup className="-ml-6 text-4xl ">+</sup>
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Folders;
