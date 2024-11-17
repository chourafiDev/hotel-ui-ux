import { StaticImageData } from "next/image";
import {
  HeartAngelIcon,
  HeartIcon,
  MapPointIcon,
  StarsIcon,
} from "@/lib/assets";
import Image from "next/image";

type HotelCardProps = {
  hotel: {
    title: string;
    city: string;
    image: StaticImageData;
    price: number;
    oldPrice?: number;
    review: string;
    favorite: boolean;
  };
};

const HotelCard = ({
  hotel: { title, city, image, price, oldPrice, review, favorite },
}: HotelCardProps) => {
  return (
    <>
      <div className="relative w-full h-64 rounded-xl overflow-hidden">
        <Image alt={title} src={image} fill className="absolute object-cover" placeholder="blur" />

        <button className="absolute top-3 right-3 bg-white/20 backdrop-blur-lg size-7 rounded-full flex items-center justify-center">
          {favorite ? (
            <HeartAngelIcon className="size-5 text-red-500" />
          ) : (
            <HeartIcon className="size-5 text-white" />
          )}
        </button>
      </div>
      <h5 className="font-medium text-slate-900 dark:text-white mb-[2px] mt-[7px] text-[17px]">{title}</h5>
      <div className="flex items-center gap-x-1">
        <MapPointIcon className="size-[14px] text-slate-900/50 dark:text-white/60" />
        <p className="text-slate-900/50 dark:text-white/60 text-sm font-medium">{city}</p>
      </div>
      <div className="flex items-center gap-x-1 mb-3">
        <StarsIcon className="size-[14px] text-slate-900/50 dark:text-white/60" />
        <p className="text-slate-900/50 dark:text-white/60 text-sm font-medium">{review}</p>
      </div>
      <div className="flex items-center gap-1">
        <p className="text-dark dark:text-white font-semibold text-xl">${price}</p>
        {oldPrice && (
          <p className="text-slate-900/50 dark:text-white/60 text-sm font-medium ml-2 line-through">
            ${oldPrice}
          </p>
        )}
      </div>
      <p className="text-slate-900/50 dark:text-white/60 text-xs font-medium">
        Includes taxes & fees
      </p>
    </>
  );
};

export default HotelCard;
