import Carousel from "../Layout/Carousel/page"
// import Container from "../Layout/Container/page"

export default function Banner() {
    return (
      <>
        <div className="bg-secondary 3xl:pt-[80px] mobile:mt-[-33px] mobile:pb-[100px] pb-[270px] sm:pb-[80px] 3xl:pb-[150px] overflow-hidden">
            <div className=" relative absolute top-[270px] sm:top-12 md:top-8 3xl:top-0 sm:left-[45%] lg:left-[49%] left-[32%] 3xl:left-[1060px]"><Carousel/></div>
            <div className='max-w-container mx-auto px-2.5 sm:px-6 md:px-7 lg:px-10 3xl:px-0'>
            <div className="sm:w-1/2">
                <h1 className="font-pops sm:leading-snug lg:leading-snug mobile:leading-snug mobile:text-4xl text-[39px] lg:text-5xl font-extrabold text-white">Self Defense Training Be Safe. Be Smart.</h1>
                <p className="font-roboto text-3xl sm:text-[21px] lg:text-3xl font-normal text-primary mobile:pt-5 pt-8">New Karate Courses Going On </p>
            </div>
            <div>
                <button className='mt-[46px] border-2 border-primary rounded-full  mobile:px-5 p-btn z-[1] mobile:text-sm text-base text-primary relative after:content[""] after:absolute after:top-0 after:right-[100%] after:bg-primary after:w-full after:h-full after:duration-300 overflow-hidden after:z-[-1] hover:after:right-0 hover:text-secondary'>GET ENROLLED</button>
            </div>
            </div>
        </div>

            {/* Wave */}
            <div className=" overflow-hidden">
              <div className="wave bg-secondary py-12 relative absolute 3xl:top-[-1px]">.</div>
              <div className="wave bg-secondary opacity-50 py-10 relative absolute top-[-100px] 3xl:top-[-98px] right-[27px] lg:right-[205px] sm:w-[1380px] lg:w-[2000px] z-[-11]">.</div>
              <div className="wave bg-primary py-10 relative absolute top-[-210px] 3x:top-[-200px] z-[-10] right-[-40px] sm:right-[205px] md:right-[75px] lg:right-[160px] 3xl:right-[80px] sm:w-[1580px] lg:w-[2000px]">.</div>
            </div>
      </>
    );
  }
  