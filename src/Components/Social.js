import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import {  RiTwitterXLine } from "@remixicon/react";
import { RiLinkedinFill } from "@remixicon/react";
import { RiGithubFill } from "@remixicon/react";

const Social = () => {
  return (
    <div className='social'>
    <a href='https://twitter.com/TanviSh70149225' >
      <RiTwitterXLine
        color="white"
        className="my-icon" />
    </a>
    <a href='https://www.linkedin.com/in/tanvi-shah-4b2159225/?originalSubdomain=in'>
         <RiLinkedinFill
        color="white"
        className="my-icon" />
    </a>
    <a href='https://github.com/tanvi1110'>
         <RiGithubFill
        color="white"
        className="my-icon" />
    </a>
    </div>

  )
}

export default Social
