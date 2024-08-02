import Image from "next/image";
const HeroRight = () => {
    return (
        <div className="hero-right">
            <div className="hero-img w-[550px] h-[700px] relative">
                <Image src={'/heroİmage.png'} alt="heroİmage" fill />
            </div>
        </div>
    )
}

export default HeroRight