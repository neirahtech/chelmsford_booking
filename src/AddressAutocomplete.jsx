import React, { useState } from "react";

const AddressAutocomplete = ({ value, onChange, onSelect, name }) => {
    const [suggestions, setSuggestions] = useState([]);

    const handleSearch = async (input) => {
        onChange(input); // Update input state in parent

        if (input.length > 2) {
            const response = await fetch(
                `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(input)}&format=json&countrycodes=gb&addressdetails=1&dedupe=1&limit=50&extratags=1`
            );
            const data = await response.json();

            console.log("API Response:", data); 

            setSuggestions(data); // Show all results without filtering
        } else {
            setSuggestions([]);
        }
    };

    return (
        <div className="relative w-full">
            <input
                type="text"
                name={name}
                value={value}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Enter city, address, or postcode"
                className="w-full p-2 border-b-2 border-black focus:outline-none"
            />
            {suggestions.length > 0 && (
                <ul className="absolute bg-white border border-gray-300 w-full mt-1 rounded shadow-md z-10 max-h-60 overflow-y-auto">
                    {suggestions.slice(0, 10).map((place) => (
                        <li
                            key={place.place_id}
                            onClick={() => {
                                onChange(place.display_name);
                                onSelect(place);
                                setSuggestions([]);
                            }}
                            className="p-2 cursor-pointer hover:bg-gray-200"
                        >
                            {place.display_name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default AddressAutocomplete;