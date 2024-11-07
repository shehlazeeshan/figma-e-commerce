import Image from 'next/image'
import React from 'react'

const Sale = () => {
  return (
 <main>
    <div className='w-full sm:h-full md:h-[300px] flex justify-center items-center mt-10'>
        <div className='w-[80%] h-full'>
            {/* top side */}
              <div>
                <span className='border-l-8 border-red-600 text-red-600 mb-5 font-bold'>Today's</span>
                <h1 className='text-4xl font-bold mt-5'>Flash Sales</h1>
              </div>
              {/* products */}
              {/* container boxes */}
              <div className="flex sm:flex-col md:flex-row justify-between mt-7">
                <div>
                      <div className='w-[200px] h-[170px] bg-gray-200 flex justify-center items-center'>
                          <Image src={"/images/frame1.png"} width={150} height={100} alt="gaming"></Image>
                      </div>
                      {/* title */}
                      <div className='flex flex-col'>
                        <span className='font-bold pt-3'>HAVIT HV-G92 Gamepad</span>
                        <span className='font-bold'>$120</span>
                      </div>
                </div>
                <div>
                     <div className='w-[200px] h-[170px] bg-gray-200 flex justify-center items-center'>
                         <Image src={"/images/frame2.png"} width={150} height={100} alt="keyboard"></Image>
                     </div>
                     {/* title */}
                     <div className='flex flex-col'>
                        <span className='font-bold pt-3'>AK-900 Wired Keyboard</span>
                        <span className='font-bold'>$960</span>
                     </div>
                </div>
                <div>
                      <div className='w-[200px] h-[170px] bg-gray-200 flex justify-center items-center'>
                          <Image src={"/images/frame3.png"} width={150} height={100} alt="lcd"></Image>
                      </div>
                      {/* title */}
                      <div className='flex flex-col'>
                        <span className='font-bold pt-3'>IPS LCD Gaming Monitor</span>
                        <span className='font-bold'>$370</span>
                      </div>
                </div>
                <div>
                       <div className='w-[200px] h-[170px] bg-gray-200 flex justify-center items-center'>
                           <Image src={"/images/frame4.png"} width={150} height={100} alt="chair"></Image>
                       </div>
                       {/* title */}
                       <div className='flex flex-col'>
                          <span className='font-bold pt-3'>S-Series Comfort Chair </span>
                          <span className='font-bold'>$375</span>
                       </div>
                </div>
               
              </div>
        </div>
    </div>
    <br />
    <br />
    <button className='py-2 px-3 bg-red-500 items-center ml-[600px] rounded-md text-white'>View All Products</button>
    <br />
 </main>
  )
}

export default Sale