import Image from 'next/image'

const HeroRight = () => {
  return (
    <div className="hero-right">
      <div className="hero-img h-[733px] relative md:w-[550px]">
        <Image src="/heroİmage.png" alt="heroİmage" width={1200} height={800} layout="responsive" />
      </div>
    </div>
  )
}

export default HeroRight
