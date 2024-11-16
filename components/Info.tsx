import { Button } from "@/components/ui/button";
import {
  ArrowRightIcon,
  GlobalIcon,
  image5,
  image6,
  image7,
} from "@/lib/assets";
import Image from "next/image";

const Info = () => {
  return (
    <section className="flex lg:flex-row flex-col gap-x-3 lg:gap-y-0 gap-y-3 mb-2">
      <div className="h-full lg:w-[40%] w-full space-y-3">
        <div className="relative rounded-xl overflow-hidden w-full h-[280px]">
          <div className="bg-slate-950/60 backdrop-blur-lg z-20 absolute top-0 left-0 w-full h-full"></div>

          <div className="absolute h-full z-20 top-0 left-0 p-6">
            <div className="flex flex-col justify-between h-full">
              <div className="bg-white/10 flex justify-center items-center backdrop-blur-md size-10 rounded-md">
                <GlobalIcon className="text-white size-6" />
              </div>

              <div>
                <p className="text-white font-medium text-2xl mb-1 pr-28">
                  Explore more to get your comfort zone
                </p>
                <p className="text-white/60 text-base">
                  Book your perfect stay with us.
                </p>
              </div>

              <div>
                <Button>
                  Booking Now <ArrowRightIcon />
                </Button>
              </div>
            </div>
          </div>

          <Image
            alt="image5"
            src={image5}
            fill
            className="absolute object-cover"
          />
        </div>
        <div className="relative rounded-xl overflow-hidden w-full h-[280px]">
          <div className="bg-slate-950/50 z-20 absolute top-0 left-0 w-full h-full"></div>

          <div className="absolute z-20 bottom-6 left-6">
            <p className="text-white font-semibold text-lg mb-1">
              Hotel Available
            </p>
            <p className="text-white font-medium text-[34px]">1,765,489</p>
          </div>
          <Image
            alt="image7"
            src={image7}
            fill
            className="absolute object-cover"
          />
        </div>
      </div>
      <div className="relative rounded-xl overflow-hidden lg:w-[60%] w-full h-[571px]">
        <div className="bg-slate-950/50 z-20 absolute top-0 left-0 w-full h-full"></div>
        <p className="absolute w-full md:px-28 px-5 z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-3xl text-white font-medium">
          Beyond acomodation, creating memories of a life time
        </p>
        <Image
          alt="image6"
          src={image6}
          fill
          className="absolute object-cover"
        />
      </div>
    </section>
  );
};

export default Info;
