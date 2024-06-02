import Image from 'next/image'
import React from 'react'

const Walkaway = () => {
    return (
        <div className='walkaway'>

            <div className='walkawayHeading'>
                <h3>Walkaway</h3>
            </div>
            <div className='walkawayPart'>
                <div className='img'><Image src="/achieve/flipkart grid.jpg" width={500} height={500}></Image></div>
                <div className='img'><Image src="/achieve/hack the mountain.png" width={400} height={400}></Image></div>
                <div className='img'><Image src="/achieve/hack this fall.png" width={300} height={300}></Image></div>
                <div className='img'><Image src="/achieve/nptel.png" width={200} height={200}></Image></div>
                <div className='img'><Image src="/achieve/hacktoberfest (3).png" width={500} height={500}></Image></div>
                <div className='img'><Image src="/achieve/flipkart grid.jpg" width={400} height={400}></Image></div>


            </div>
        </div>
    )
}

export default Walkaway
