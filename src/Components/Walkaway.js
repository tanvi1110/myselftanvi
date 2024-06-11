import Image from 'next/image'
import './Walkaway.css'
import { RiDribbbleLine } from "@remixicon/react";

const Walkaway = () => {
    return (
        <div className='walkaway'>

            <div className='walkawayHeading'>
                <h3>Walkaway</h3>
            </div>
            <div className='walkawayPart'>
                <div className='img' data-aos="flip-left" data-aos-duration="3000"><Image alt='#' src="/achieve/w1.png" width={500} height={500}></Image></div>
                <div className='img' data-aos="flip-left" data-aos-duration="3000"><Image alt='#' src="/achieve/w2.png" width={400} height={400}></Image></div>
                <div className='img' data-aos="flip-left" data-aos-duration="3000"><Image alt='#' src="/achieve/w3.png" width={300} height={300}></Image></div>
                <div className='img' data-aos="flip-left" data-aos-duration="3000"><Image alt='#' src="/achieve/w4.png" width={200} height={200}></Image></div>
                <div className='img' data-aos="flip-left" data-aos-duration="3000"><Image alt='#' src="/achieve/w5.png" width={500} height={500}></Image></div>
                <div className='img' data-aos="flip-left" data-aos-duration="3000"><Image alt='#' src="/achieve/w6.png" width={400} height={400}></Image></div>


            </div>
            <a href='https://dribbble.com/devil_546k' target="_blank">
                <div className='btnSeeMore'>
                    <div className='btndivw'>
                        <RiDribbbleLine
                            color="white"
                            className="my-icon" />
                        <h3>See More</h3>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default Walkaway
