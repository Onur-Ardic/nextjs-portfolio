import AboutLeft from '@/components/Home/About/AboutLeft'
import Footer from '@/components/Home/Footer/Footer'
import HeroLeft from '@/components/Home/Hero/HeroLeft'
import HeroRight from '@/components/Home/Hero/HeroRight'
import Articles from '@/components/Home/Projects_Articles/Articles/Articles'
import ArticlesWrapper from '@/components/Home/Projects_Articles/Articles/ArticlesWrapper'
import Projects from '@/components/Home/Projects_Articles/Projects'

import Image from 'next/image'

export default function Home() {
  return (
    <main className="pt-16 josefin-sans ">
      <header className="hero-wrapper  ">
        <div className="hero-container container mx-auto grid justify-center items-center md:grid-cols-2">
          <HeroLeft />
          <HeroRight />
        </div>
        <div className="line p-0 m-0"></div>
      </header>

      <section className="about-us container mx-auto border rounded-md p-3 mt-10 border-slate-50">
        <div className="about-us-title text-center my-5 text-3xl">About Us</div>
        <div className="about-content-wrapper grid gap-4  md:grid-cols-2 ">
          <AboutLeft />

          <div className="about-us-right">
            <div className="about-us-right-image relative h-96 aspect-w-16 aspect-h-9">
              <Image src="/about-img.png" fill className="rounded-md" alt="about-me-image" />
            </div>
          </div>
        </div>
      </section>

      <section className="projetcs-articles container mx-auto">
        <div className="projects-articles-wrapper grid md:grid-cols-2 gap-10">
          <Projects />
          <div>
            <ArticlesWrapper />
            <Articles />
          </div>
        </div>
      </section>
    </main>
  )
}
