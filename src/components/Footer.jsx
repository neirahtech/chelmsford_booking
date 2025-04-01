import React from 'react'
import logo from '../assets/logo.png'

const Footer = () => {

    return (
        <div className='md:mx-10 py-10 px-10 font-sans'>
            <div className='flex flex-col sm:grid grid-cols-[2fr_1fr_1fr] gap-10 text-sm'>

                {/* ----- Left section ------ */}
                <div>
                    <img className='w-40 wd-44 mb-5 cursor-pointer' onClick={() => window.location.href = "https://chelmsfordmastercabs.com"} src={logo} alt="" />
                    <p className='w-full md:w-2/3 leading-6'>
                        Providing safe, reliable, and affordable taxi services
                        for daily commutes, airport transfers, group travel, and special events. Available 24/7
                        with professional drivers and well-maintained vehicles.</p>
                </div>

                {/* ----- Center section ------ */}
                <div>
                    <p className='text-xl font-medium mb-5 font-mono'>SERVICES</p>
                    <ul className='flex flex-col gap-2 text-gray-400'>
                        {[
                            { name: 'Contract Taxi Service', id: 'service1' },
                            { name: 'Standard Taxi Service', id: 'service2' },
                            { name: 'Airport Transfers', id: 'service3' },
                            { name: 'Scheduled Rides', id: 'service6' },
                            { name: 'Party & Night Out Transport', id: 'service4' },
                        ].map((service, index) => (
                            <li key={index}>
                                <a
                                    href={`https://chelmsfordmastercabs.com/services/#${service.id}`}
                                    className="hover:text-white hover:border-b-1 hover:border-red-500 transition duration-300"
                                >
                                    &gt; <span className="ml-1"></span> {service.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* ----- Right section ------ */}
                <div>
                    <p className='text-xl font-medium mb-5 font-mono'>CONTACT US</p>
                    <ul className='flex flex-col gap-2'>
                        <li><i className="fas fa-map-marker-alt text-amber-300 w-6"></i> 12 Brook Lane, Galleywood, Chelmsford, CM2 8NJ</li>
                        <li><i className="fas fa-envelope text-amber-300 w-6"></i> cmastercabs@gmail.com</li>
                        <li><i className="fas fa-phone-alt text-amber-300 w-6"></i> +44 7501 067194</li>
                    </ul>
                </div>

            </div>

            {/* ------ Copyright ------- */}
            <div className='flex flex-col md:flex-row items-center justify-evenly text-lg'>
                <p
                    className='py-5 text-center'>
                    <span
                        className='hover:text-red-500 cursor-pointer'
                        onClick={() => window.location.href = "https://chelmsfordmastercabs.com/"}
                    >
                        © 2025 Chelmsford Mastercabs - Powered by
                    </span>
                    <span className='hover:text-red-500 cursor-pointer'
                        onClick={() => window.location.href = "https://neirahtech.com/"}>
                        <span className='ml-1'>Nierahtech</span>
                    </span>
                </p>
                <div className='flex flex-col md:flex-row gap-4'>
                    <p className='hover:underline cursor-pointer' onClick={() => window.location.href = "https://chelmsfordmastercabs.com/privacy-policy/"}>Privacy Policy</p>
                    <p className='hover:underline cursor-pointer' onClick={() => window.location.href = "https://chelmsfordmastercabs.com/terms-conditions/"}>Terms & Conditions</p>
                </div>

            </div>
        </div>
    )
}

export default Footer
