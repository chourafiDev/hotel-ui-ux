"use client";

import React, { useRef } from "react";
import {
  AltArrowLeftIcon,
  AltArrowRightIcon,
  ArrowRightIcon,
} from "@/lib/assets";
import { Button } from "./ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { trendingHotel } from "@/lib/data";
import HotelCard from "./HotelCard";

const Trending = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

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
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            // @ts-ignore
            // eslint-disable-next-line no-param-reassign
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-ignore
            // eslint-disable-next-line no-param-reassign
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.update();
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            400: {
              slidesPerView: 1,
            },
            639: {
              slidesPerView: 2,
            },
            865: {
              slidesPerView: 2,
            },
            1000: {
              slidesPerView: 4,
            },
            1500: {
              slidesPerView: 4,
            },
            1700: {
              slidesPerView: 4,
            },
          }}
        >
          {trendingHotel.map((hotel) => (
            <SwiperSlide key={hotel.id}>
              <HotelCard hotel={hotel} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex items-center justify-center gap-x-2 mt-5">
          <button
            className="size-10 border border-slate-900/10 dark:border-white/10 cursor-pointer rounded-full flex justify-center items-center"
            ref={prevRef}
          >
            <AltArrowLeftIcon className="size-5" />
          </button>
          <button
            className="size-10 border border-slate-900/10 dark:border-white/10 cursor-pointer rounded-full flex justify-center items-center"
            ref={nextRef}
          >
            <AltArrowRightIcon className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Trending;
