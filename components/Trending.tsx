import React from "react";
import { ArrowRightIcon } from "@/lib/assets";
import { Button } from "./ui/button";
import { trendingHotel } from "@/lib/data";
import HotelCard from "./HotelCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Trending = () => {
  return (
    <section className="mt-14 md:px-6 px-1">
      <h1 className="text-slate-900 dark:text-white text-2xl mb-1 font-semibold">
        Top trending hotel in worldwide
      </h1>
      <p className="text-slate-900/50 dark:text-white/60">
        Discover the most trending hotels worldwide for an unforgettable
        experience.
      </p>

      <div className="flex md:flex-row flex-col md:items-center items-start justify-between mt-6 gap-3">
        <ul className="flex flex-wrap items-center gap-4 text-sm text-slate-900 dark:text-white font-medium">
          <li className="cursor-pointer bg-slate-900/5 dark:bg-white/10 py-2 px-4 rounded-lg">
            France
          </li>
          <li className="cursor-pointer py-2 px-4 rounded-lg">Japan</li>
          <li className="cursor-pointer py-2 px-4 rounded-lg">Italy</li>
          <li className="cursor-pointer py-2 px-4 rounded-lg">Australia</li>
        </ul>
        <Button variant={"outline"} size={"lg"}>
          See All <ArrowRightIcon />
        </Button>
      </div>

      <div className="mt-7">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {trendingHotel.map((hotel) => (
              <CarouselItem
                key={hotel.id}
                className="md:basis-1/2 lg:basis-1/4"
              >
                <HotelCard hotel={hotel} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center justify-center gap-x-2 mt-5">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Trending;
