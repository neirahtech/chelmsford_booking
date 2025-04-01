import React from 'react'
import bg_img from '../assets/bg_image.jpg';
import bg_img2 from '../assets/bg_image_2.jpg';


const Banner = () => {
    return (
            <div className="flex flex-col items-center justify-center min-h-screen relative backdrop-invert backdrop-opacity-10 p-10"
                style={{ backgroundImage: `url(${bg_img2})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'}}>
                {/* Overlay using pseudo-element */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Dark overlay, adjust opacity as needed
                        zIndex: -1,  // Ensure it stays behind the content
                    }}
                />
                <h1 className='text-6xl text-amber-300 font-bold font-serif'>Book Your Car Now!</h1>
                <p className='text-3xl'>Ride with Comfort, Arrive in Style </p>
            </div>
    )
}

export default Banner