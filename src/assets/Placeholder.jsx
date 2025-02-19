import { useState } from "react"

export  function Placeholder({selectedOption, setSelectedOption}) {
    
    const handleSelect = (e) => {
        setSelectedOption(e.target.value)
    }
    return (
        <div>
        <label htmlFor="Select Your Crypto" className="block text-2xl font-medium text-white-500 p-10">
        Select Your Crypto
        </label>
        <div className="mt-2">
            <div className="flex items-center rounded-md bg-white ">
            <div className="focus-within:relative w-full">
                <select
                id="currency"
                value={selectedOption}
                onChange={handleSelect}
                name="currency"
                aria-label="Currency"
                className=" w-full appearance-none rounded-md py-2 p-20 pl-3 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                >
                <option value="">Select Options</option>        
                <option value="Bitcoin">Bitcoin</option>
                <option value="Ethereum">Ethereum</option>
                <option value="Matic-Network">Matic-Network</option>
                </select>
                
            </div>
            </div>
        </div>
        </div>
    )
}
