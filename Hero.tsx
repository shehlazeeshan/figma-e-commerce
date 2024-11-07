import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';

function Hero () {
    return (
        <div className='w-full h-[400px] flex justify-center mt-8'>
            <div className='bg-black w-[80%] h-full flex justify-between'>
                {/* left side */}
                <div className='ml-12 m mt-16 text-white'>
                    <div className='flex justify-center items-center mr-52'>
                        <span> <FontAwesomeIcon icon={faApple} className='w-[40px] ' /> </span>
                        <span className='ml-4'>iphone 14 series</span>
                    </div>

                    <div className='w-[450px]'>
                        <h1 className='text-7xl font-sans font-bold ml-5'>Up to 10%</h1>
                        <br />
                        <h1 className='text-7xl font-sans font-bold ml-5'>off Voucher</h1>
                        <br />
                        <button className='font-bold underline underline-offset-8 ml-5 mt-5'>Shop Now</button>
                    </div>
                </div>
                {/* right side */}
                <div>
                    <Image src={"/images/hero.png"} width={610} height={200} alt='Heroimage'></Image>
                </div>
            </div>
        </div>
    )
}

export default Hero