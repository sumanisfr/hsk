import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation';

export default function Description() {
    const phrase = "Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.";
    const description = useRef<HTMLDivElement>(null);
    const isInView = useInView(description);

    return (
        <div ref={description} className="px-20 mt-20 flex justify-center">
            <div className="max-w-[1400px] flex gap-12 relative">
                <p className="text-3xl text-red-500 gap-2 leading-[1.3]">
                    {phrase.split(" ").map((word, index) => (
                        <span key={index} className="relative overflow-hidden inline-flex">
                            <motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index} className="mr-1">
                                {word}
                            </motion.span>
                        </span>
                    ))}
                </p>
                <motion.p variants={opacity} animate={isInView ? "open" : "closed"} className="text-lg text-red-500 w-4/5 font-light">
                    The combination of my passion for design, code & interaction positions me in a unique place in the web design world.
                </motion.p>
            </div>
        </div>
    );
}