import AboutLeft from '@/components/Home/About/AboutLeft'
import HeroLeft from '@/components/Home/Hero/HeroLeft'
import HeroRight from '@/components/Home/Hero/HeroRight'
import Articles from '@/components/Home/Projects_Articles/Articles/Articles'
import Projects from '@/components/Home/Projects_Articles/Projects'
import ProjetcsSlide from '@/components/Home/Projects_Articles/ProjectsSlide'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="pt-16 josefin-sans ">
      <header className="hero-wrapper  ">
        <div className="hero-container container mx-auto grid grid-cols-2 justify-center items-center ">
          <HeroLeft />
          <HeroRight />
        </div>
        <div className="line p-0 m-0"></div>
      </header>

      <section className="about-us container mx-auto border rounded-md p-3 mt-10 border-slate-50">
        <div className="about-us-title text-center my-5 text-3xl">About Us</div>
        <div className="about-content-wrapper grid grid-cols-2 gap-4 ">
          <AboutLeft />

          <div className="about-us-right">
            <div className="about-us-right-image relative  h-96">
              <Image src={'/about-img.png'} fill className="rounded-md" />
            </div>
          </div>
        </div>
      </section>

      <section className="projetcs-articles container mx-auto mt-10">
        <div className="projects-articles-wrapper grid grid-cols-2 gap-10">
          <Projects />

          <div className="articles">
            <h4 className="text-center text-2xl mt-3">Articles</h4>
            <Articles />
          </div>
        </div>
      </section>
    </main>
  )
}
