import Explore from "@/components/home/Explore";
import Categories from "@/components/home/Categories";
import Slider from "@/components/home/Slider";
import Features from "@/components/home/Features";

export default function Home() {
  return (
    <div className="flex-col w-full px-40 space-y-20 max-[720px]:px-5">
      <Explore />
      <Categories />
      <Slider />
      <Features />
    </div>
  );
}
