import Image from 'next/image'
import React from 'react'
import { RiDribbbleLine } from "@remixicon/react";

const Walkaway = () => {
    return (
        <div className='walkaway'>

            <div className='walkawayHeading'>
                <h3>Walkaway</h3>
            </div>
            <div className='walkawayPart'>
                <div className='img' data-aos="flip-left" data-aos-duration="3000"><Image alt='#' src="/achieve/flipkart grid.jpg" width={500} height={500}></Image></div>
                <div className='img' data-aos="flip-left" data-aos-duration="3000"><Image alt='#' src="/achieve/hack the mountain.png" width={400} height={400}></Image></div>
                <div className='img' data-aos="flip-left" data-aos-duration="3000"><Image alt='#' src="/achieve/hack this fall.png" width={300} height={300}></Image></div>
                <div className='img' data-aos="flip-left" data-aos-duration="3000"><Image alt='#' src="/achieve/nptel.png" width={200} height={200}></Image></div>
                <div className='img' data-aos="flip-left" data-aos-duration="3000"><Image alt='#' src="/achieve/hacktoberfest (3).png" width={500} height={500}></Image></div>
                <div className='img' data-aos="flip-left" data-aos-duration="3000"><Image alt='#' src="/achieve/flipkart grid.jpg" width={400} height={400}></Image></div>


            </div>
            <a href='https://dribbble.com/devil_546k' target="_blank">
                <div className=''>
                    <div className='btndiv'>
                        <RiDribbbleLine
                            color="white"
                            className="my-icon" />
                        <h4>See More</h4>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default Walkaway
