import React from "react";
import { Button } from "./ui/button";
import { ArrowRightIcon, promo1, promo2, SaleIcon } from "@/lib/assets";
import Image from "next/image";

const Promo = () => {
  return (
    <section className="mt-14 md:px-6 px-1">
      <div className="flex items-center justify-between">
        <h1 className="text-slate-900 dark:text-white text-2xl mb-1 font-semibold">
          Get promo for cheaper price
        </h1>
        <Button variant={"outline"} size={"lg"}>
          See All <ArrowRightIcon />
        </Button>
      </div>

      <div className="flex lg:flex-row flex-col items-center gap-2 mt-5">
        <div className="relative w-full h-72 rounded-lg overflow-hidden">
          <div className="absolute inset-0 from-black/65 via-black/40 to-black/10 bg-gradient-to-r z-20"></div>

          <div className="absolute w-full h-full z-20 top-0 left-0 p-6">
            <div className="flex flex-col justify-between h-full">
              <div className="flex items-center justify-between">
                <div className="bg-yellow-500 flex justify-center items-center backdrop-blur-md size-10 rounded-full">
                  <SaleIcon className="text-slate-900 size-6" />
                </div>

                <div className="bg-slate-600/10 backdrop-blur-md px-4 py-[6px] rounded-full">
                  <p className="text-white text-[13px] font-medium">
                    Valid only on 14 Jan - 20 Jan 2024
                  </p>
                </div>
              </div>

              <div>
                <p className="text-white font-semibold text-xl mb-1 md:pr-96 pr-0">
                  Get Extra Discount at Azure Oasis Hotel
                </p>
                <p className="text-white text-5xl font-semibold">50%</p>
              </div>

              <p className="text-white/80 text-[13px] font-medium">
                with Terms and conditions
              </p>
            </div>
          </div>

          <Image
            src={promo1}
            alt="promo1"
            fill
            className="absolute object-cover"
            placeholder="blur"
          />
        </div>
        <div className="relative w-full h-72 rounded-lg overflow-hidden">
          <div className="absolute inset-0 from-black/65 via-black/35 to-black/10 bg-gradient-to-r z-20"></div>

          <div className="absolute w-full h-full z-20 top-0 left-0 p-6">
            <div className="flex flex-col justify-between h-full">
              <div className="flex items-center justify-between">
                <div className="bg-yellow-500 flex justify-center items-center backdrop-blur-md size-10 rounded-full">
                  <SaleIcon className="text-slate-900 size-6" />
                </div>

                <div className="bg-slate-600/10 backdrop-blur-md px-4 py-[6px] rounded-full">
                  <p className="text-white text-[13px] font-medium">
                    Valid only on 16 Jan - 28 Jan 2024
                  </p>
                </div>
              </div>

              <div>
                <p className="text-white font-semibold text-xl mb-1 md:pr-96 pr-0">
                  Exclusive Deals Just For You
                </p>
                <p className="text-white text-5xl font-semibold">75%</p>
              </div>

              <p className="text-white/80 text-[13px] font-medium">
                with Terms and conditions
              </p>
            </div>
          </div>

          <Image
            src={promo2}
            alt="promo2"
            fill
            className="absolute object-cover"
            placeholder="blur"
          />
        </div>
      </div>
    </section>
  );
};

export default Promo;
