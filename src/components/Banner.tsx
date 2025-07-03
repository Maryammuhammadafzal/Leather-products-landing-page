
import Image from "next/image";
const Banner = () => {
  return (
    <div className='w-full h-[450px] py-10 flex justify-center items-center'>
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
