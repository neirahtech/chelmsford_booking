import React, { useRef, useState } from 'react';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import emailjs from '@emailjs/browser';
import car_image from '../assets/banner_car.png';
import logo from '../assets/logo.png';
import bg_img from '../assets/bg_image.jpg';
import bg_img_2 from '../assets/bg_image_2.jpg';

const ukCities = [
    { value: 'Aberdeen', label: 'Aberdeen' },
    { value: 'Ashford', label: 'Ashford' },
    { value: 'Basildon', label: 'Basildon' },
    { value: 'Basingstoke', label: 'Basingstoke' },
    { value: 'Belfast', label: 'Belfast' },
    { value: 'Blackpool', label: 'Blackpool' },
    { value: 'Bradford', label: 'Bradford' },
    { value: 'Bristol', label: 'Bristol' },
    { value: 'Cambridge', label: 'Cambridge' },
    { value: 'Cardiff', label: 'Cardiff' },
    { value: 'Cheltenham', label: 'Cheltenham' },
    { value: 'Chester', label: 'Chester' },
    { value: 'Colchester', label: 'Colchester' },
    { value: 'Coventry', label: 'Coventry' },
    { value: 'Crawley', label: 'Crawley' },
    { value: 'Derby', label: 'Derby' },
    { value: 'Dundee', label: 'Dundee' },
    { value: 'Edinburgh', label: 'Edinburgh' },
    { value: 'Enfield', label: 'Enfield' },
    { value: 'Eastbourne', label: 'Eastbourne' },
    { value: 'Glasgow', label: 'Glasgow' },
    { value: 'Harrow', label: 'Harrow' },
    { value: 'Hounslow', label: 'Hounslow' },
    { value: 'Hove', label: 'Hove' },
    { value: 'Inverness', label: 'Inverness' },
    { value: 'Kingston upon Hull', label: 'Kingston upon Hull' },
    { value: 'Leeds', label: 'Leeds' },
    { value: 'Leicester', label: 'Leicester' },
    { value: 'Lichfield', label: 'Lichfield' },
    { value: 'London', label: 'London' },
    { value: 'Luton', label: 'Luton' },
    { value: 'Manchester', label: 'Manchester' },
    { value: 'Maidstone', label: 'Maidstone' },
    { value: 'Milton Keynes', label: 'Milton Keynes' },
    { value: 'Newcastle', label: 'Newcastle upon Tyne' },
    { value: 'Norwich', label: 'Norwich' },
    { value: 'Nottingham', label: 'Nottingham' },
    { value: 'Oxford', label: 'Oxford' },
    { value: 'Peterborough', label: 'Peterborough' },
    { value: 'Plymouth', label: 'Plymouth' },
    { value: 'Reading', label: 'Reading' },
    { value: 'Redditch', label: 'Redditch' },
    { value: 'Rushden', label: 'Rushden' },
    { value: 'Sheffield', label: 'Sheffield' },
    { value: 'Slough', label: 'Slough' },
    { value: 'Southampton', label: 'Southampton' },
    { value: 'St Albans', label: 'St Albans' },
    { value: 'Stoke-on-Trent', label: 'Stoke-on-Trent' },
    { value: 'Sunderland', label: 'Sunderland' },
    { value: 'Swindon', label: 'Swindon' },
    { value: 'Warrington', label: 'Warrington' },
    { value: 'Woking', label: 'Woking' },
    { value: 'Wokingham', label: 'Wokingham' },
    { value: 'York', label: 'York' }
];

const BookingForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [mail, setMail] = useState('');
    const [phone, setPhone] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [startCity, setStartCity] = useState(null);
    const [endCity, setEndCity] = useState(null);
    const [pickupDate, setPickupDate] = useState(null);
    const [dropOffDate, setDropOffDate] = useState(null);
    const [note, setNote] = useState('');
    const [isLoading, setIsLoading] = useState(false)
    const [showModal, setShowModal] = useState(false);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);

        emailjs
            .sendForm('service_5swb61o', 'template_rattpb5', form.current, {
                publicKey: 'KmjhBg43Jveju2TqZ',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setIsLoading(false)
                    setDropOffDate("")
                    setEndCity("")
                    setFirstName("")
                    setLastName("")
                    setMail("")
                    setNote("")
                    setPhone("")
                    setPickupDate("")
                    setStartCity("")
                    setWhatsapp("")
                    // Show success modal
                    setShowModal(true);    
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div>
            <div className='bg-black flex flex-row justify-evenly items-center p-4'>
                <img className='w-10 md:w-25' src={logo} alt="Logo" />
                <h1 className='font-serif text-xl sm:text-3xl font-bold text-amber-300'>Book Your Car</h1>
                <button className="text-black bg-amber-100 px-3 md:px-6 py-1 rounded-full hover:bg-amber-300 hover:scale-105" onClick={() => window.location.href = "https://chelmsfordmastercabs.com"}>Back</button>
            </div>
            <div className="flex flex-col items-center justify-center min-h-screen relative backdrop-invert backdrop-opacity-10 "
                style={{ backgroundImage: `url(${bg_img})`, backgroundSize: 'cover', backgroundPosition: 'center', }}>
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
                <form ref={form} onSubmit={sendEmail} className="sm:font-semibold p-6 my-20 rounded-lg shadow-md w-[60%] flex flex-col sm:flex-row md:gap-6 items-center justify-center bg-transparent bg-opacity-50">
                    <div className='w-[50vw] text-white p-3 sm:p-10 rounded'>
                        <p className='text-2xl text-amber-300 mb-3'>Personal Details</p>
                        <div className='flex flex-col md:flex-row justify-between md:gap-4'>
                            {/* User first name */}
                            <div className='flex-1'>
                                <label className="block mb-2">First Name:</label>
                                <input
                                    type="text"
                                    name='firstName'
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    className="w-full p-2 border rounded mb-4"
                                    placeholder='Enter Your First Name'
                                    required
                                />
                            </div>
                            {/* User last name */}
                            <div className='flex-1'>
                                <label className="block mb-2">Last Name:</label>
                                <input
                                    type="text"
                                    name='lastName'
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    className="w-full p-2 border rounded mb-4"
                                    placeholder='Enter Your Last Name'
                                    required
                                />
                            </div>
                        </div>

                        {/* user mail */}
                        <div>
                            <label className="block mb-2">Email:</label>
                            <input
                                type="email"
                                name='mail'
                                value={mail}
                                onChange={(e) => setMail(e.target.value)}
                                className="w-[100%] p-2 border rounded mb-4"
                                placeholder='Enter Your Email Address'
                                required
                            />
                        </div>
                        <div className='flex flex-col md:flex-row justify-between md:gap-4'>
                            {/* user phone number */}
                            <div className='flex-1'>
                                <label className="block mb-2">Phone:</label>
                                <input
                                    type="tel"
                                    name='phone'
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="w-full p-2 border rounded mb-4"
                                    placeholder='Enter Your Mobile Number'
                                    required
                                />
                            </div>
                            {/* user whatsapp number */}
                            <div className='flex-1'>
                                <label className="block mb-2">WhatsApp Number:</label>
                                <input
                                    type="tel"
                                    name='whatsapp'
                                    value={whatsapp}
                                    onChange={(e) => setWhatsapp(e.target.value)}
                                    className="w-full p-2 border rounded mb-4"
                                    placeholder='Enter Your WhatsApp Number'
                                />
                            </div>
                        </div>
                        <p className='text-2xl text-amber-300 my-3'>Booking Details</p>
                        <div className='flex flex-col justify-between'>
                            {/* start city */}
                            <div className='flex-1'>
                                <label className="block mb-2">Travel From:</label>
                                <CreatableSelect
                                    options={ukCities}
                                    name='startCity'
                                    value={startCity}
                                    onChange={setStartCity}
                                    className="w-full mb-4"
                                    color='white'
                                    placeholder="City Travelling from"
                                    required
                                    styles={{
                                        control: (base) => ({
                                            ...base,
                                            backgroundColor: "", // Match regular input background
                                            // border: "1px solid black", // Match regular input border
                                            padding: "2px", // Match input padding
                                            borderRadius: "4px", // Match input border radius
                                        }),
                                        placeholder: (base) => ({
                                            ...base,
                                            color: "#d1d5db"
                                        }),
                                        menu: (base) => ({
                                            ...base,
                                            backgroundColor: "white",
                                        }),
                                        option: (base) => ({
                                            ...base,
                                            color: "black",
                                            ":hover": { backgroundColor: "gray" },
                                        }),
                                        singleValue: (base) => ({
                                            ...base,
                                            color: "white", // Match regular input text color
                                        }),
                                    }}
                                />
                            </div>
                            {/* destination city */}
                            <div className='flex-1'>
                                <label className="block mb-2">Travel To:</label>
                                <CreatableSelect
                                    options={ukCities}
                                    value={endCity}
                                    name='endCity'
                                    onChange={setEndCity}
                                    className="w-full mb-4"
                                    placeholder="City Travelling to"
                                    required
                                    styles={{
                                        control: (base) => ({
                                            ...base,
                                            backgroundColor: "", // Match regular input background
                                            // border: "1px solid black", // Match regular input border
                                            padding: "2px", // Match input padding
                                            borderRadius: "4px", // Match input border radius
                                        }),
                                        placeholder: (base) => ({
                                            ...base,
                                            color: "#d1d5db"
                                        }),
                                        menu: (base) => ({
                                            ...base,
                                            backgroundColor: "white",
                                        }),
                                        option: (base) => ({
                                            ...base,
                                            color: "black",
                                            ":hover": { backgroundColor: "gray" },
                                        }),
                                        singleValue: (base) => ({
                                            ...base,
                                            color: "white", // Match regular input text color
                                        }),
                                    }}
                                />
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row justify-between md:gap-4'>
                            {/* pickup Date */}
                            <div className="mb-4 flex-1">
                                <label className="block mb-2">Pickup Date</label>
                                <DatePicker
                                    selected={pickupDate}
                                    name='pickupDate'
                                    onChange={setPickupDate}
                                    className="w-full p-2 border rounded"
                                    minDate={new Date()}
                                    placeholderText="Select Pickup Date"
                                    required
                                />
                            </div>
                            {/* drop-off Date */}
                            <div className="mb-4 flex-1">
                                <label className="block mb-2">Drop-off Date</label>
                                <DatePicker
                                    selected={dropOffDate}
                                    name='dropOffDate'
                                    onChange={setDropOffDate}
                                    className="w-full p-2 border rounded"
                                    minDate={pickupDate}
                                    placeholderText="Select Drop-off Date"
                                    required
                                />
                            </div>
                        </div>
                        {/* Additional Note */}
                        <div>
                            <label className="block mb-2">Additional Note:</label>
                            <textarea
                                value={note}
                                name='note'
                                onChange={(e) => setNote(e.target.value)}
                                className="w-[100%] p-2 border rounded mb-4"
                                placeholder='Enter any additional message or information...'
                                rows="3"
                            />
                        </div>
                        <div className='flex justify-center'>
                            <button type="submit" className="w-[40%] bg-amber-300 text-black px-2 sm:px-4 py-2 rounded sm:rounded-full hover:bg-amber-400 hover:scale-105 transition-all duration-300 justify-center">{isLoading ? "BOOKING..." : "BOOK NOW"}</button>
                        </div>
                    </div>
                </form>
            </div>
            {/* Modal for success message */}
            {showModal && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center w-[70%] sm:w-[40%]">
                            <h2 className="text-2xl font-semibold text-amber-400 mb-4">Booking Successful!</h2>
                            <p className="text-lg mb-6 text-white">Your car booking has been successfully submitted! We will be in touch shortly.</p>
                            <button
                                onClick={() => {
                                    setShowModal(false);
                                    window.location.href = 'https://chelmsfordmastercabs.com';
                                }}
                                className="px-8 py-2 bg-red-400 text-black rounded-full hover:bg-red-500 transition-all duration-300"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
        </div>

    );
};

export default BookingForm;