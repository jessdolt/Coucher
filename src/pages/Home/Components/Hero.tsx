import WomanModel from "../../../assets/wepik-export-202308020212026g1M.png";
import { RightArrowIcon } from "../Icons";

const Hero = () => {
  return (
    <section className="flex justify-between mt-20">
      <div className="mr-12 lg:mr-2">
        <div className=" text-8xl pb-12 border-b-2 border-b-neutral-600 ">
          <h2>Unlimited</h2>
          <h2>Prententious</h2>
          <div className="flex items-center">
            <div className="flex">
              <div className="w-[80px] h-[80px] rounded-full bg-black p-1 ">
                <img
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="w-[80px] h-[80px] rounded-full bg-black p-1 -ml-4">
                <img
                  src="https://images.pexels.com/photos/3310693/pexels-photo-3310693.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="w-[80px] h-[80px] rounded-full bg-black p-1 -ml-4">
                <img
                  src="https://images.pexels.com/photos/3841338/pexels-photo-3841338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            IDEAS
          </div>
        </div>
        <div className="flex justify-between py-4">
          <span>Our Solutions</span>
          <span className="max-w-[170px]  text-left">
            We Provide The Full Funnel Approach
          </span>
        </div>
      </div>

      <div className="flex-1 ml-12 text-black ">
        <div className="relative bg-violet-400 rounded-3xl w-full h-full">
          <img src={WomanModel} alt="" className="w-full h-full object-cover" />

          <div className="absolute top-0 right-0 p-8 flex gap-1">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="w-2 h-2 bg-black rounded-full"></div>
          </div>

          <span className="absolute top-0 left-0 z-20 p-8 max-w-[50px] leading-[1.2] font-[500]">
            Your Business Boost
          </span>

          <div className="absolute bottom-6 w-full px-8">
            <div className="w-full py-2 rounded-full px-8 flex justify-between items-center border border-black cursor-pointer">
              <span className="capitalize font-[500]">Book Demo Call</span>
              <span className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center">
                <RightArrowIcon size={20} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
