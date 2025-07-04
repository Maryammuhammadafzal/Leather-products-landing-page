
import Image from "next/image";
const Banner = () => {
  return (
    <div className='w-full md:h-[450px] sm:h-[350px] md:py-10 sm:py-5 flex justify-center items-center'>
      <Image
              src="/images/banner-image.png"
              alt="image"
              width={400}
              height={400}
              className="w-full h-full object-cover object-center"
            />
    </div>
  )
}

export default Banner
