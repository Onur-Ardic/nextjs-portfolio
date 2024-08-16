import Image from 'next/image'
const HeroRight = () => {
  return (
    <div className="hero-right">
      <div className="hero-img h-[700px] relative md:w-[550px]">
        <Image src={'/heroİmage.png'} alt="heroİmage" fill />
      </div>
    </div>
  )
}

export default HeroRight
