"use client";

import React, { useEffect, useRef } from "react";
import { AltArrowLeftIcon, AltArrowRightIcon } from "@/lib/assets";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { mostVisitedHotel } from "@/lib/data";
import HotelCard from "./HotelCard";

const MostVisited = () => {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <section className="mt-14 md:px-6 px-1">
      <h1 className="text-slate-900 dark:text-white text-2xl mb-1 font-semibold">
        Most visited hotel this month
      </h1>
      <p className="text-slate-900/50 dark:text-white/60">
        Trending exception hospitality that captivated travelers this month.
      </p>

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
          onSwiper={(swiper) => (swiperRef.current = swiper)}
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
          {mostVisitedHotel.map((hotel) => (
            <SwiperSlide key={hotel.id}>
              <HotelCard hotel={hotel} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex items-center justify-center gap-x-2 mt-5">
          <div
            className="size-10 border border-slate-900/10 dark:border-white/10 cursor-pointer rounded-full flex justify-center items-center"
            ref={prevRef}
          >
            <AltArrowLeftIcon className="size-5" />
          </div>
          <div
            className="size-10 border border-slate-900/10 dark:border-white/10 cursor-pointer rounded-full flex justify-center items-center"
            ref={nextRef}
          >
            <AltArrowRightIcon className="size-5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MostVisited;
