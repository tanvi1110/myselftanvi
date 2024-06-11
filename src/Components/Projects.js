import Image from 'next/image'
import React from 'react'
import './Projects.css'
import { RiGithubFill } from "@remixicon/react";
const Projects = () => {
    return (
        <div id='projects' className='projects'>
            <div className='projectHeading'>
                <h3>Projects</h3>
            </div>
            <div className='projectdiv'>
                <div className='projectPart'>
                    <div className='pLeft'>
                        <div className='imgdiv' data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine">
                            <Image alt='#' className='pLeftimg' src="/images/projects/p5.png" width={500} height={500}></Image>
                        </div>
                    </div>
                    <div className='rightdiv'>
                        <div className='pRight'>
                            <div className='githubPart'>
                                <a href='https://github.com/tanvi1110/Web-Island'>
                                    <RiGithubFill
                                        color="white"
                                        className="my-icon" />
                                </a>
                            </div>
                            <div className='paraPart'><b>3d-Island: </b>A website that features an integrated 3D model, providing an immersive and interactive user experience. The 3D model allows visitors to explore and interact with it directly on the website, enhancing engagement and offering a dynamic visual element. </div>
                            <div className='lanPart'>

                                <div className='lan'><h5>ViteJS</h5></div>

                                <div className='lan'><h5>CSS</h5></div>

                                <div className='lan'><h5>JS</h5></div>

                                <div className='lan'><h5>Vercel</h5></div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='projectPart'>
                    <div className='pLeft'>
                        <div className='imgdiv' data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine">
                            <Image alt='#' className='pLeftimg' src="/images/projects/p1.png" width={500} height={500}></Image>
                        </div>
                    </div>
                    <div className='rightdiv'>
                        <div className='pRight'>
                            <div className='githubPart'>
                                <a href='https://github.com/tanvi1110/haven-js'>
                                    <RiGithubFill
                                        color="white"
                                        className="my-icon" />
                                </a>
                            </div>
                            <div className='paraPart'><b>Haven World: </b>Introducing HavenJS, a newly launched website dedicated to showcasing an exquisite collection of garden items, including flowers, pots, and more. </div>
                            <div className='lanPart'>

                                <div className='lan'><h5>HTML</h5></div>

                                <div className='lan'><h5>CSS</h5></div>

                                <div className='lan'><h5>JS</h5></div>

                                <div className='lan'><h5>Vercel</h5></div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='projectPart'>
                    <div className='pLeft'>
                        <div className='imgdiv' data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine">
                            <Image alt='#' className='pLeftimg' src="/images/projects/p3.png" width={500} height={500}></Image>
                        </div>
                    </div>
                    <div className='rightdiv'>
                        <div className='pRight'>
                            <div className='githubPart'>
                                <a href='https://github.com/HackTvarit/website'>
                                    <RiGithubFill
                                        color="white"
                                        className="my-icon" />
                                </a>
                            </div>
                            <div className='paraPart'><b>Hacktvarit: </b> A hackathon website built using Next.js. Hacktvarit serves as a comprehensive platform for organizing and participating in hackathons, offering seamless user experiences and robust functionality. </div>
                            <div className='lanPart'>

                                <div className='lan'><h5>NextJS</h5></div>

                                <div className='lan'><h5>Typescript</h5></div>

                                <div className='lan'><h5>Tailwind</h5></div>

                                <div className='lan'><h5>Vercel</h5></div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='projectPart'>
                    <div className='pLeft'>
                        <div className='imgdiv' data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine">
                            <Image alt='#' className='pLeftimg' src="/images/projects/p4.png" width={500} height={500}></Image>
                        </div>
                    </div>
                    <div className='rightdiv'>
                        <div className='pRight'>
                            <div className='githubPart'>
                                <a href='https://github.com/tanvi1110/Stockers'>
                                    <RiGithubFill
                                        color="white"
                                        className="my-icon" />
                                </a>
                            </div>
                            <div className='paraPart'><b>Stockers: </b> Built the website’s frontend for a stock market prediction platform. Utilized machine learning in a
                                hackathon to showcase our predictive skills. It is giving accuracy of 86.9% even better than most of predictive tools!</div>
                            <div className='lanPart'>

                                <div className='lan'><h5>HTML</h5></div>

                                <div className='lan'><h5>CSS</h5></div>

                                <div className='lan'><h5>Python</h5></div>

                                <div className='lan'><h5>Streamlit</h5></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Projects
