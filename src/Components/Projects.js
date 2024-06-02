import Image from 'next/image'
import React from 'react'
import './Projects.css'
import { RiGithubFill } from "@remixicon/react";
const Projects = () => {
    return (
        <div className='projects'>
            <div className='projectHeading'>
                <h3>Projects</h3>
            </div>
            <div className='projectPart'>
                <div className='pLeft'>
                    <Image className='pLeftimg' src="/achieve/flipkart grid.jpg" width={500} height={500}></Image>
                </div>
                <div className='pRight'>
                    <div className='githubPart'>
                        <RiGithubFill
                            color="white"
                            className="my-icon" />
                    </div>
                    <div className='paraPart'></div>
                    <div className='lanPart'></div>
                </div>

            </div>
        </div>
    )
}

export default Projects
