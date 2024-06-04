'use client'
import React from 'react';

import { RiArrowUpLine } from "@remixicon/react";

const BackToTopButton = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button className="backToTopButton" onClick={scrollToTop}>
            <RiArrowUpLine
                color="white"
                className="my-icon" />
        </button>
    );
};

export default BackToTopButton;