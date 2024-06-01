import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { RiInstagramLine } from "@remixicon/react";
import { RiLinkedinFill } from "@remixicon/react";
import { RiGithubFill } from "@remixicon/react";

const Social = () => {
  return (
    <div className='social '>
      <RiInstagramLine
        
        color="white"
        className="my-icon" />
         <RiLinkedinFill
        
        color="white"
        className="my-icon" />
         <RiGithubFill
        
        color="white"
        className="my-icon" />
    </div>

  )
}

export default Social
