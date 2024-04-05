import Carousel from "../Layout/Carousel/page"
// import Container from "../Layout/Container/page"

export default function Banner() {
    return (
      <>
        <div className="bg-secondary pt-[80px] pb-[150px] overflow-hidden">
            <div className=" relative absolute top-0 left-[60%]"><Carousel/></div>
            <div className='max-w-container mx-auto px-2.5 sm:px-6 md:px-7 lg:px-10 xl:px-0'>
            <div className="w-1/2">
                <h1 className="font-pops leading-snug text-5xl font-extrabold text-white">Self Defense Training Be Safe. Be Smart.</h1>
                <p className="font-roboto text-3xl font-normal text-primary pt-8">New Karate Courses Going On </p>
            </div>
            <div>
                <button className='mt-[46px] border-2 border-primary rounded-full p-btn z-[1] text-base text-primary relative after:content[""] after:absolute after:top-0 after:right-[100%] after:bg-primary after:w-full after:h-full after:duration-300 overflow-hidden after:z-[-1] hover:after:right-0 hover:text-secondary'>GET ENROLLED</button>
            </div>
            </div>
        </div>
            <div className="overflow-hidden">
            <div className="wave bg-secondary py-10 relative absolute top-0">.</div>
            <div className="wave bg-secondary opacity-50 py-10 relative absolute top-[-98px] right-[27px] w-[1400px] z-[-11]">.</div>
            <div className="wave bg-primary py-10 relative absolute top-[-200px] z-[-10] right-[80px] w-[2000px]">.</div>
            </div>
      </>
    );
  }
  