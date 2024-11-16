import { destinations } from "@/lib/data";
import DestinationCard from "./DestinationCard";

const Destinations = () => {
  return (
    <section className="mt-14 md:px-6 px-1">
      <h1 className="text-slate-900 dark:text-white text-2xl mb-1 font-semibold">
        Discover your destination
      </h1>
      <p className="text-slate-900/50 dark:text-white/60">
        Explore our range of property types pf every traveler&apos;s preference
      </p>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-7">
        {destinations.map((destination) => (
          <DestinationCard key={destination.id} destination={destination} />
        ))}
      </div>
    </section>
  );
};

export default Destinations;
