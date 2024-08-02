import HeroLeft from "@/components/Home/Hero/HeroLeft";
import HeroRight from "@/components/Home/Hero/HeroRight";


export default function Home() {
  return (
    <main className="pt-16 josefin-sans ">
      <div className="hero-wrapper  bg-[#F2F0F1]">
        <div className="hero-container container mx-auto grid grid-cols-2 justify-center items-center">
          <HeroLeft />
          <HeroRight />
        </div>
      </div>
    </main>
  );
}
