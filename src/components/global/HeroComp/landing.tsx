'use client'
import { motion } from 'framer-motion';
import { slideUp } from './animation';
import Image from 'next/image';

export default function Landing() {
  return (
    <motion.main variants={slideUp} initial="initial" animate="enter" className="relative flex h-screen overflow-hidden">
      <video 
        src='/videos/video2.mp4'
        autoPlay
        loop
        muted
        className='h-full w-full object-cover'
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-1/2 max-w-sm md:max-w-sm lg:max-w-md mx-auto">
          <Image
            src="/logos/Black-Text-Logo.svg" //change it to White or Red for more logo colours
            alt="Logo"
            width={600} // Provide a default width
            height={600} // Provide a default height
            className="w-full h-auto"
          />
        </div>
      </div>
    </motion.main>
  );
}