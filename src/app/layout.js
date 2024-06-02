'use client'

import { Inter } from "next/font/google";
import "./globals.css";
import { metadata } from './metadata';
import SmoothScroll from "@/Components/SmoothScroll";
const inter = Inter({ subsets: ["latin"] });

import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Head from "next/head";

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body className={inter.className}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
