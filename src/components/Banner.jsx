import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import bg_img2 from '../assets/bg_image_2.jpg';

const Banner = () => {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.7, 
    });

    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen relative backdrop-invert backdrop-opacity-10 p-10"
            style={{
                backgroundImage: `url(${bg_img2})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
            }}
        >
            {/* Overlay using pseudo-element */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay, adjust opacity as needed
                    zIndex: -1, // Ensure it stays behind the content
                }}
            />

            {/* Animated text with framer-motion */}
            <motion.h1
                ref={ref}
                initial={{ opacity: 0, y: 50 }} // Start position and opacity
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }} // Animation when in view
                transition={{ duration: 1 }} // Animation duration
                className="text-6xl text-amber-300 font-bold font-serif"
            >
                Book Your Car Now!
            </motion.h1>

            <motion.p
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                transition={{ duration: 1, delay: 0.2 }} // Adding delay for second element
                className="text-3xl"
            >
                Ride with Comfort, Arrive in Style
            </motion.p>
        </div>
    );
};

export default Banner;