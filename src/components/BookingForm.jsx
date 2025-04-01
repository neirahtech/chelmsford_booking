import React, { useRef, useState } from 'react';
import CreatableSelect from 'react-select/creatable';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import emailjs from '@emailjs/browser';
import AddressAutocomplete from "../AddressAutocomplete";

// const ukCities = [
//     { value: 'Aberdeen', label: 'Aberdeen' },
//     { value: 'Ashford', label: 'Ashford' },
//     { value: 'Basildon', label: 'Basildon' },
//     { value: 'Basingstoke', label: 'Basingstoke' },
//     { value: 'Belfast', label: 'Belfast' },
//     { value: 'Blackpool', label: 'Blackpool' },
//     { value: 'Bradford', label: 'Bradford' },
//     { value: 'Bristol', label: 'Bristol' },
//     { value: 'Cambridge', label: 'Cambridge' },
//     { value: 'Cardiff', label: 'Cardiff' },
//     { value: 'Cheltenham', label: 'Cheltenham' },
//     { value: 'Chester', label: 'Chester' },
//     { value: 'Colchester', label: 'Colchester' },
//     { value: 'Coventry', label: 'Coventry' },
//     { value: 'Crawley', label: 'Crawley' },
//     { value: 'Derby', label: 'Derby' },
//     { value: 'Dundee', label: 'Dundee' },
//     { value: 'Edinburgh', label: 'Edinburgh' },
//     { value: 'Enfield', label: 'Enfield' },
//     { value: 'Eastbourne', label: 'Eastbourne' },
//     { value: 'Glasgow', label: 'Glasgow' },
//     { value: 'Harrow', label: 'Harrow' },
//     { value: 'Hounslow', label: 'Hounslow' },
//     { value: 'Hove', label: 'Hove' },
//     { value: 'Inverness', label: 'Inverness' },
//     { value: 'Kingston upon Hull', label: 'Kingston upon Hull' },
//     { value: 'Leeds', label: 'Leeds' },
//     { value: 'Leicester', label: 'Leicester' },
//     { value: 'Lichfield', label: 'Lichfield' },
//     { value: 'London', label: 'London' },
//     { value: 'Luton', label: 'Luton' },
//     { value: 'Manchester', label: 'Manchester' },
//     { value: 'Maidstone', label: 'Maidstone' },
//     { value: 'Milton Keynes', label: 'Milton Keynes' },
//     { value: 'Newcastle', label: 'Newcastle upon Tyne' },
//     { value: 'Norwich', label: 'Norwich' },
//     { value: 'Nottingham', label: 'Nottingham' },
//     { value: 'Oxford', label: 'Oxford' },
//     { value: 'Peterborough', label: 'Peterborough' },
//     { value: 'Plymouth', label: 'Plymouth' },
//     { value: 'Reading', label: 'Reading' },
//     { value: 'Redditch', label: 'Redditch' },
//     { value: 'Rushden', label: 'Rushden' },
//     { value: 'Sheffield', label: 'Sheffield' },
//     { value: 'Slough', label: 'Slough' },
//     { value: 'Southampton', label: 'Southampton' },
//     { value: 'St Albans', label: 'St Albans' },
//     { value: 'Stoke-on-Trent', label: 'Stoke-on-Trent' },
//     { value: 'Sunderland', label: 'Sunderland' },
//     { value: 'Swindon', label: 'Swindon' },
//     { value: 'Warrington', label: 'Warrington' },
//     { value: 'Woking', label: 'Woking' },
//     { value: 'Wokingham', label: 'Wokingham' },
//     { value: 'York', label: 'York' }
// ];

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
            <div className="flex flex-col items-center justify-center min-h-screen relative bg-white">
                <form ref={form} onSubmit={sendEmail} className="sm:font-semibold p-6 my-20 text-black rounded-lg shadow-md w-[60%] flex flex-col sm:flex-row md:gap-6 items-center justify-center">
                    <div className='w-[80vw] p-3 sm:p-10 rounded'>
                        <p className='text-2xl text-amber-700 mb-3'>Personal Details</p>
                        <div className='flex flex-col md:flex-row justify-between md:gap-4'>
                            {/* User first name */}
                            <div className='flex-1'>
                                <label className="block mb-2">First Name:</label>
                                <input
                                    type="text"
                                    name='firstName'
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    className="w-full p-2 mb-4"
                                    placeholder='Enter Your First Name'
                                    required
                                    style={{
                                        border: "none",
                                        borderBottom: "2px solid #000", // Adds bottom border
                                        outline: "none", // Removes outline
                                    }}
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
                                    className="w-full p-2 mb-4"
                                    placeholder='Enter Your Last Name'
                                    required
                                    style={{
                                        border: "none",
                                        borderBottom: "2px solid #000", // Adds bottom border
                                        outline: "none", // Removes outline
                                    }}
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
                                className="w-[100%] p-2 mb-4"
                                placeholder='Enter Your Email Address'
                                required
                                style={{
                                    border: "none",
                                    borderBottom: "2px solid #000", // Adds bottom border
                                    outline: "none", // Removes outline
                                }}
                            />
                        </div>
                        {/* user phone number */}
                        <div>
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
                        </div>
                        <div className='flex flex-col md:flex-row justify-between md:gap-4'>
                            {/* No of Passengers */}
                            <div className='flex-1'>
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
                                        borderBottom: "2px solid #000", // Adds bottom border
                                        outline: "none", // Removes outline
                                    }}
                                />
                            </div>
                            {/* >No of Large Luggages */}
                            <div className='flex-1'>
                                <label className="block mb-2">No of Large (more than 10kg) Luggages:</label>
                                <input
                                    type="number"
                                    name='noOfLuggages'
                                    value={noOfLuggages}
                                    onChange={(e) => setNoOfLuggages(e.target.value)}
                                    className="w-full p-2 mb-4"
                                    placeholder='Enter the No of Large Luggages'
                                    style={{
                                        border: "none",
                                        borderBottom: "2px solid #000", // Adds bottom border
                                        outline: "none", // Removes outline
                                    }}
                                />
                            </div>
                        </div>

                        <p className='text-2xl text-amber-700 my-3'>Booking Details</p>
                        <div className="flex flex-col justify-between">
                            {/* Start City */}
                            <div className="flex-1">
                                <label className="block mb-2">Travel From:</label>
                                <AddressAutocomplete
                                    value={startCity}
                                    onChange={setStartCity}
                                    onSelect={handleStartCitySelect}
                                />
                            </div>
                            <div className='p-2'></div>
                            {/* Destination City */}
                            <div className="flex-1">
                                <label className="block mb-2">Travel To:</label>
                                <AddressAutocomplete
                                    value={endCity}
                                    onChange={setEndCity}
                                    onSelect={handleEndCitySelect}
                                />
                            </div>
                        </div>

                        <div className='flex flex-col md:flex-row justify-between md:gap-4 mt-4'>
                             {/* Pickup Date & Time */}
                             <div className="mb-4 flex-1">
                                <label className="block mb-2">Pick-Up Date & Time:</label>
                                <DatePicker
                                    selected={pickupDate}
                                    name='pickupDate'
                                    onChange={setPickupDate}
                                    className="w-full p-2 border-b-2 border-black focus:outline-none"
                                    minDate={new Date()}
                                    showTimeSelect
                                    timeIntervals={10}
                                    dateFormat="Pp" // Formats as date and time
                                    placeholderText="Select Pick-Up Date & Time"
                                    required
                                />
                            </div>
                            {/* Drop-off Date & Time */}
                            <div className="mb-4 flex-1">
                                <label className="block mb-2">Drop-off Date & Time:</label>
                                <DatePicker
                                    selected={dropOffDate}
                                    name='dropOffDate'
                                    onChange={setDropOffDate}
                                    className="w-full p-2 border-b-2 border-black focus:outline-none"
                                    minDate={pickupDate}
                                    showTimeSelect
                                    timeIntervals={10}
                                    dateFormat="Pp" // Formats as date and time
                                    placeholderText="Select Drop-off Date & Time"
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
                                className="w-[100%] p-2 mb-4"
                                placeholder='Enter any additional message or information...'
                                rows="3"
                                style={{
                                    border: "none",
                                    borderBottom: "2px solid #000", // Adds bottom border
                                    outline: "none", // Removes outline
                                }}
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