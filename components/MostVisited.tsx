import React from "react";
import { mostVisitedHotel } from "@/lib/data";
import HotelCard from "./HotelCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const MostVisited = () => {
  return (
    <section className="mt-14 md:px-6 px-1">
      <h1 className="text-slate-900 dark:text-white text-2xl mb-1 font-semibold">
        Most visited hotel this month
      </h1>
      <p className="text-slate-900/50 dark:text-white/60">
        Trending exception hospitality that captivated travelers this month.
      </p>

      <div className="mt-7">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {mostVisitedHotel.map((hotel) => (
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

export default MostVisited;
