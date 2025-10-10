import bannerVca from "../../assets/img/banner-vca2.png";
import ProductCard from "./components/ProductCard";

function MainContainer() {
  return (
    <section className="grid-rows-2 grid-cols-1 min-h-screen ">
      <div className="  bg-[#e8e5da] text-[#0d0d0d] py-10 grid grid-rows-2 grid-cols-4 gap-3 p-10 justify-items-center">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
}

export default MainContainer;
