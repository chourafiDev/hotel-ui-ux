import NavBar from "@/components/core/navbar";
import SearchHotel from "@/components/search-hotel";

const Banner = () => {
  return (
    <section className="h-[90vh] w-full relative overflow-hidden bg-banner bg-center bg-no-repeat bg-cover rounded-xl">
      <div className="bg-slate-950/65 absolute top-0 left-0 w-full h-full"></div>

      <NavBar />
      <SearchHotel />
    </section>
  );
};

export default Banner;
