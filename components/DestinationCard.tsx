import { ArrowRightIcon } from "@/lib/assets";
import Image, { StaticImageData } from "next/image";

type DestinationCardprops = {
  destination: {
    id: number;
    city: string;
    available: string;
    image: StaticImageData;
    Icon: React.ComponentType<any>;
  };
};

const DestinationCard = ({
  destination: { city, available, image, Icon },
}: DestinationCardprops) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-slate-900 dark:text-white font-medium text-lg">{city}</p>
          <div className="flex items-center gap-1">
            <Icon className="text-slate-900/50 dark:text-white/60 size-4" />
            <p className="text-slate-900/50 dark:text-white/60 text-sm mt-[2px]">{available}</p>
          </div>
        </div>
        <button className="size-11 flex items-center justify-center rounded-lg border border-gray-100 dark:border-white/10">
          <ArrowRightIcon className="text-slate-800 dark:text-white/80 size-5" />
        </button>
      </div>

      <div className="relative w-full h-36 rounded-xl overflow-hidden mt-2">
        <Image src={image} alt={city} fill className="absolute object-cover" />
      </div>
    </div>
  );
};

export default DestinationCard;
