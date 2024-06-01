import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { RiInstagramLine } from "@remixicon/react";
import { RiLinkedinFill } from "@remixicon/react";
import { RiGithubFill } from "@remixicon/react";

const Social = () => {
  return (
    <div className=' social fixed flex flex-col bottom-5 left-5 pl-5'>
      <RiInstagramLine
        size={24}
        color="white"
        className="my-icon" />
         <RiLinkedinFill
        size={24}
        color="white"
        className="my-icon" />
         <RiGithubFill
        size={24}
        color="white"
        className="my-icon" />
    </div>

  )
}

export default Social
