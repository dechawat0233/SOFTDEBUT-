import React from 'react'

function Navbar() {
    return (
        <div className="flex items-center justify-between ">
            {/* โลโก้ทางซ้าย */}
            <div>
                <img src="../assets/images/SOne_index_logo.png" alt="Logo" className="" />
            </div>

            {/* ฟอร์มทางขวา */}
            <div className="flex flex-col items-end">
                <div className="flex space-x-2 mb-2">
                    <img src="../assets/images/SOne_index_iconthai.jpg" alt="Thai Icon" className="h-5 cursor-pointer" />
                    <img src="../assets/images/SOne_index_iconeng.jpg" alt="English Icon" className="h-5 cursor-pointer" />
                </div>
                <form className="flex items-center ">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
                    />
                    <button
                        type="submit"
                        className=""
                    >
                        <img src="../assets/images/SOne_index_btsearch.jpg" alt="Search" className="h-5" />
                    </button>
                </form>
                <div className="flex space-x-2 text-sm">
                    <a href="#" className="text-black-500 hover:text-green-500 cursor-pointer">About S-ONE</a>
                    <span>|</span>
                    <a href="#" className="text-black-500 hover:text-green-500 cursor-pointer">Job Opportunity</a>
                    <span>|</span>
                    <a href="#" className="text-black-500 hover:text-green-500 cursor-pointer">Contact Us</a>
                    <span>|</span>
                    <a href="#" className="text-black-500 hover:text-green-500 cursor-pointer">Site Map</a>
                </div>
            </div>
        </div>
    );
}

export default Navbar