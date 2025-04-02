import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import bg_img from '../assets/bg_img.jpg';

const Banner = () => {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.7,
    });

    return (
        <div
            className="flex items-center justify-end min-h-screen relative backdrop-invert backdrop-opacity-10 p-10"
            style={{
                backgroundImage: `url(${bg_img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
            }}
        >
            {/* Overlay */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.3)", // Dark overlay
                    zIndex: -1, // Keep behind content
                }}
            />

            {/* Text container aligned to the right */}
            <div className="w-1/2 flex flex-col items-end text-right space-y-4">
                <motion.h1
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                    transition={{ duration: 1 }}
                    className="text-6xl text-amber-300 font-bold font-serif"
                >
                    Book Your Car Now!
                </motion.h1>

                <motion.p
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-3xl text-white"
                >
                    Ride with Comfort, Arrive in Style
                </motion.p>
            </div>
        </div>
    );
};

export default Banner;