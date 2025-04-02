import React, { useRef, useState } from 'react';
import CreatableSelect from 'react-select/creatable';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import emailjs from '@emailjs/browser';
import AddressAutocomplete from "../AddressAutocomplete";

const BookingForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [mail, setMail] = useState('');
    const [phone, setPhone] = useState('');
    const [startCity, setStartCity] = useState(null);
    const [endCity, setEndCity] = useState(null);
    const [pickupDate, setPickupDate] = useState(null);
    const [pickupTime, setPickupTime] = useState(null);
    const [note, setNote] = useState('');
    const [isLoading, setIsLoading] = useState(false)
    const [showModal, setShowModal] = useState(false);
    const [noOfPeople, setNoOfPeople] = useState();
    const [noOfLuggages, setNoOfLuggages] = useState();

    const handleStartCitySelect = (place) => {
        setStartCity(place.display_name);
    };

    const handleEndCitySelect = (place) => {
        setEndCity(place.display_name);
    };


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
                    setEndCity("")
                    setFirstName("")
                    setLastName("")
                    setMail("")
                    setNote("")
                    setPhone("")
                    setPickupDate("")
                    setStartCity("")
                    setNoOfLuggages("")
                    setNoOfPeople("")
                    setPickupTime("")
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
            <div className="flex flex-col items-center justify-center min-h-screen relative bg-white">
                <form ref={form} onSubmit={sendEmail} className="sm:font-semibold p-6 my-20 text-black rounded-lg shadow-md w-[80%] flex flex-col sm:flex-row md:gap-6 items-center justify-center">
                    <div className='w-[80vw] p-3 sm:p-10 rounded'>
                        <p className='text-2xl text-amber-700 mb-3'>Personal Details</p>
                        <div className='flex flex-col md:flex-row justify-between md:gap-4'>
                            {/* User first name */}
                            <div className='relative flex-1'>
                                <label className="block mb-2">First Name:</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name='firstName'
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        className="w-full p-2 pr-10 mb-4"
                                        placeholder='Enter Your First Name'
                                        required
                                        style={{
                                            border: "none",
                                            borderBottom: "2px solid #000", // Adds bottom border
                                            outline: "none", // Removes outline
                                        }}
                                    />

                                </div>
                                {firstName && (
                                    <button
                                        type="button"
                                        onClick={() => setFirstName("")}
                                        className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-gray-500 hover:bg-gray-700 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs"
                                    >
                                        ✕
                                    </button>
                                )}
                            </div>
                            {/* User last name */}
                            <div className='flex-1 relative'>
                                <label className="block mb-2">Last Name:</label>
                                <input
                                    type="text"
                                    name='lastName'
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    className="w-full p-2 mb-4"
                                    placeholder='Enter Your Last Name'
                                    required
                                    style={{
                                        border: "none",
                                        borderBottom: "2px solid #000", // Adds bottom border
                                        outline: "none", // Removes outline
                                    }}
                                />
                                {lastName && (
                                    <button
                                        type="button"
                                        onClick={() => setLastName("")}
                                        className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-gray-500 hover:bg-gray-700 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs"
                                    >
                                        ✕
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* user mail */}
                        <div className='relative'>
                            <label className="block mb-2">Email:</label>
                            <input
                                type="email"
                                name='mail'
                                value={mail}
                                onChange={(e) => setMail(e.target.value)}
                                className="w-[100%] p-2 mb-4"
                                placeholder='Enter Your Email Address'
                                required
                                style={{
                                    border: "none",
                                    borderBottom: "2px solid #000", // Adds bottom border
                                    outline: "none", // Removes outline
                                }}
                            />
                            {mail && (
                                <button
                                    type="button"
                                    onClick={() => setMail("")}
                                    className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-gray-500 hover:bg-gray-700 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs"
                                >
                                    ✕
                                </button>
                            )}
                        </div>
                        {/* user phone number */}
                        <div className='relative'>
                            <label className="block mb-2">Phone:</label>
                            <input
                                type="tel"
                                name='phone'
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-[100%] p-2 mb-4"
                                placeholder='Enter Your Mobile Number'
                                required
                                style={{
                                    border: "none",
                                    borderBottom: "2px solid #000", // Adds bottom border
                                    outline: "none", // Removes outline
                                }}
                            />
                            {phone && (
                                <button
                                    type="button"
                                    onClick={() => setPhone("")}
                                    className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-gray-500 hover:bg-gray-700 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs"
                                >
                                    ✕
                                </button>
                            )}
                        </div>
                        <div className='flex flex-col md:flex-row justify-between md:gap-4'>
                            {/* No of Passengers */}
                            <div className='relative flex-1'>
                                <label className="block mb-2">No of Passengers:</label>
                                <input
                                    type="number"
                                    name='noOfPeople'
                                    value={noOfPeople}
                                    onChange={(e) => setNoOfPeople(e.target.value)}
                                    className="w-full p-2 mb-4"
                                    placeholder='Enter the No of Passengers'
                                    required
                                    style={{
                                        border: "none",
                                        borderBottom: "2px solid #000",
                                        outline: "none",
                                    }}
                                />
                                {noOfPeople && (
                                    <button
                                        type="button"
                                        onClick={() => setNoOfPeople("")}
                                        className="absolute right-1 top-1/4 transform -translate-y-1/2 bg-gray-500 hover:bg-gray-700 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs"
                                    >
                                        ✕
                                    </button>
                                )}
                            </div>
                            {/* >No of Large Luggages */}
                            <div className='flex-1 relative'>
                                <label className="block mb-2">No of Large Luggages:</label>
                                <input
                                    type="number"
                                    name='noOfLuggages'
                                    value={noOfLuggages}
                                    onChange={(e) => setNoOfLuggages(e.target.value)}
                                    className="w-full p-2 mb-4"
                                    placeholder='Enter the No of Large (more than 10kg) Luggages'
                                    style={{
                                        border: "none",
                                        borderBottom: "2px solid #000",
                                        outline: "none",
                                    }}
                                />
                                {noOfLuggages && (
                                    <button
                                        type="button"
                                        onClick={() => setNoOfLuggages("")}
                                        className="absolute right-1 top-1/4 transform -translate-y-1/2 bg-gray-500 hover:bg-gray-700 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs"
                                    >
                                        ✕
                                    </button>
                                )}
                            </div>
                        </div>

                        <p className='text-2xl text-amber-700 my-3'>Booking Details</p>
                        <div className="flex flex-col justify-between">
                            {/* Start City */}
                            <div className="flex-1 relative">
                                <label className="block mb-2">Travel From:</label>
                                <AddressAutocomplete
                                    value={startCity}
                                    name='startCity'
                                    onChange={setStartCity}
                                    onSelect={handleStartCitySelect}
                                    required
                                />
                                {startCity && (
                                    <button
                                        type="button"
                                        onClick={() => setStartCity("")}
                                        className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-gray-500 hover:bg-gray-700 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs"
                                    >
                                        ✕
                                    </button>
                                )}
                            </div>

                            <div className='py-2'></div>
                            {/* Destination City */}
                            <div className="flex-1 relative">
                                <label className="block mb-2">Travel To:</label>
                                <AddressAutocomplete
                                    value={endCity}
                                    name='endCity'
                                    onChange={setEndCity}
                                    onSelect={handleEndCitySelect}
                                    required
                                />
                                {endCity && (
                                    <button
                                        type="button"
                                        onClick={() => setEndCity("")}
                                        className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-gray-500 hover:bg-gray-700 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs"
                                    >
                                        ✕
                                    </button>
                                )}
                            </div>
                            <div className='py-2'></div>
                        </div>

                        {/* Pickup Date */}
                        <div className=''>
                            <label className="block mb-2">Pick-Up Date:</label>
                            <DatePicker
                                selected={pickupDate}
                                name='pickupDate'
                                onChange={setPickupDate}
                                className="w-full p-2 border-b-2 border-black focus:outline-none mb-4"
                                minDate={new Date()}
                                placeholderText="Select Pick-Up Date"
                                required
                            />
                            {/* {pickupDate && (
                                <button
                                    type="button"
                                    onClick={() => setPickupDate("")}
                                    className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-gray-500 hover:bg-gray-700 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs"
                                >
                                    ✕
                                </button>
                            )} */}
                        </div>
                        {/* Pickup Time */}
                        <div className=''>
                            <label className="block mb-2">Pick-Up Time:</label>
                            <DatePicker
                                selected={pickupTime}
                                name='pickupTime'
                                onChange={setPickupTime}
                                className="w-full p-2 mb-4 border-b-2 border-black focus:outline-none"
                                showTimeSelect
                                showTimeSelectOnly
                                timeIntervals={10}
                                dateFormat="hh:mm aa" // Formats as date and time
                                placeholderText="Select Pick-Up Time"
                                required
                            />
                            {/* {pickupTime && (
                                <button
                                    type="button"
                                    onClick={() => setPickupTime("")}
                                    className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-gray-500 hover:bg-gray-700 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs"
                                >
                                    ✕
                                </button>
                            )} */}
                        </div>


                        {/* <div className='flex flex-col md:flex-row justify-between md:gap-4 mt-4'>
                            <div className="mb-4 flex-1">
                                <label className="block mb-2">Pick-Up Date:</label>
                                <DatePicker
                                    selected={pickupDate}
                                    name='pickupDate'
                                    onChange={setPickupDate}
                                    className="w-full p-2 border-b-2 border-black focus:outline-none"
                                    minDate={new Date()}
                                    placeholderText="Select Pick-Up Date"
                                    required
                                />
                            </div>
                            <div className="mb-4 flex-1">
                                <label className="block mb-2">Pick-Up Time:</label>
                                <DatePicker
                                    selected={pickupTime}
                                    name='pickupTime'
                                    onChange={setPickupTime}
                                    className="w-full p-2 border-b-2 border-black focus:outline-none"
                                    showTimeSelect
                                    showTimeSelectOnly
                                    timeIntervals={10}
                                    dateFormat="hh mm aa" // Formats as date and time
                                    placeholderText="Select Pick-Up Time"
                                    required
                                />
                            </div>
                        </div> */}

                        {/* Additional Note */}
                        <div className='relative'>
                            <label className="block mb-2">Additional Note:</label>
                            <textarea
                                value={note}
                                name='note'
                                onChange={(e) => setNote(e.target.value)}
                                className="w-[100%] p-2 mb-4"
                                placeholder='Enter any additional message or information...'
                                rows="3"
                                style={{
                                    border: "none",
                                    borderBottom: "2px solid #000", // Adds bottom border
                                    outline: "none", // Removes outline
                                }}
                            />
                            {note && (
                                <button
                                    type="button"
                                    onClick={() => setNote("")}
                                    className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-gray-500 hover:bg-gray-700 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs"
                                >
                                    ✕
                                </button>
                            )}
                        </div>
                        <div className='flex justify-center'>
                            <button type="submit" className="cursor-pointer w-[40%] bg-amber-300 text-black px-2 sm:px-4 py-2 rounded sm:rounded-full hover:bg-amber-400 hover:scale-105 transition-all duration-300 justify-center">{isLoading ? "BOOKING..." : "BOOK NOW"}</button>
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