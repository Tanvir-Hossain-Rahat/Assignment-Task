import Image from 'next/image'

export default function Middlepart() {
  return (
    <>
        <div className="mx-auto">
            <div className="w-full">
                <Image src="/assets/frame.png"
                      width={1000}
                      height={1000}
                      alt="" className='w-full'/>
            </div>
        </div>
    </>
  );
}
