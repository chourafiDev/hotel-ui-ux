import Banner from "@/components/Banner";
import Destinations from "@/components/Destinations";
import Info from "@/components/Info";
import MostVisited from "@/components/MostVisited";
import Promo from "@/components/Promo";
import Trending from "@/components/Trending";
import Brands from "@/components/brands";

export default function Home() {
  return (
    <main className="p-1">
      <Banner />
      <Destinations />
      <Trending />
      <MostVisited />
      <Promo />
      <Brands />
      <Info />
    </main>
  );
}
