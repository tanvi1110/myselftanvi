import Image from 'next/image'
import React from 'react'
import './Projects.css'
import { RiDribbbleLine, RiGithubFill } from "@remixicon/react";
const Projects = () => {
    return (
        <div className='projects'>
            <div className='projectHeading'>
                <h3>Projects</h3>
            </div>
            <div className='projectdiv'>
                <div className='projectPart'>
                    <div className='pLeft'>
                        <div className='imgdiv'>
                            <Image className='pLeftimg' src="/achieve/flipkart grid.jpg" width={500} height={500}></Image>
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
                <div className='projectPart'>
                    <div className='pLeft'>
                        <div className='imgdiv'>
                            <Image className='pLeftimg' src="/achieve/flipkart grid.jpg" width={500} height={500}></Image>
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
                <div className='projectPart'>
                    <div className='pLeft'>
                        <div className='imgdiv'>
                            <Image className='pLeftimg' src="/achieve/flipkart grid.jpg" width={500} height={500}></Image>
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
                <div className='projectPart'>
                    <div className='pLeft'>
                        <div className='imgdiv'>
                            <Image className='pLeftimg' src="/achieve/flipkart grid.jpg" width={500} height={500}></Image>
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
            <div className='btnSeeMore'>
                <div className='btndiv'>
                    <RiDribbbleLine
                        color="white"
                        className="my-icon" />
                    <h4>See More</h4>
                </div>
            </div>
        </div>
    )
}

export default Projects
