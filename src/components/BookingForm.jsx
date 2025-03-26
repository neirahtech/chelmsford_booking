import React, { useRef, useState } from 'react';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import emailjs from '@emailjs/browser';
import car_image from '../assets/banner_car.png'

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
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <form ref={form} onSubmit={sendEmail} className="text-black sm:font-semibold border-[2px] border-teal-600 p-6 my-20 rounded-lg shadow-md w-[80%] flex flex-col sm:flex-row md:gap-6 items-center justify-center">
                <div className='w-[20vw]'>
                    <h1 className="text-4xl font-bold mb-4 text-white">Book Your Car</h1>
                    <img className='hover:scale-105 transition-all duration-300' src={car_image} alt="" />
                </div>
                <div className='w-[50vw] bg-teal-400 p-3 sm:p-10 rounded'>
                    <div className='flex flex-col md:flex-row justify-between gap-4'>
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
                    <div className='flex flex-col md:flex-row justify-between gap-4'>
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
                    <div className='flex flex-col md:flex-row justify-between gap-4'>
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
                                        border: "1px solid black", // Match regular input border
                                        padding: "2px", // Match input padding
                                        borderRadius: "4px", // Match input border radius
                                    }),
                                    placeholder: (base) => ({
                                        ...base,
                                        color: "#4B5563"
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
                                        color: "black", // Match regular input text color
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
                                        border: "1px solid black", // Match regular input border
                                        padding: "2px", // Match input padding
                                        borderRadius: "4px", // Match input border radius
                                    }),
                                    placeholder: (base) => ({
                                        ...base,
                                        color: "#4B5563"
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
                                        color: "black", // Match regular input text color
                                    }),
                                }}
                            />
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row justify-between gap-4'>
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
                        <button type="submit" className="w-[40%] bg-black text-white p-2 rounded-full hover:bg-blue-700 hover:text-white hover:scale-105 transition-all duration-300 justify-center">{isLoading ? "Submitting..." : "Submit"}</button>
                    </div>
                </div>

            </form>
        </div>
    );
};

export default BookingForm;
