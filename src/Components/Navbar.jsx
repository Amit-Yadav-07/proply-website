import React, { useState } from 'react';
import { FaPhoneAlt, FaBars, FaTimes, FaChevronDown, FaSearch, FaRegNewspaper } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const menuItems = [
    { name: 'Services', submenu: ['Property Valuation', 'Buying & Selling', 'Rental Management', 'Investment Advisory'] },
    { name: 'Properties', submenu: ['Residential', 'Commercial', 'Land', 'Luxury Homes', 'New Developments'] },
    { name: 'Insights', submenu: ['Market Trends', 'Guides & Articles', 'Client Stories'] },
    { name: 'About Us', submenu: ['Our Story', 'Our Team', 'Careers', 'Contact Us'] },
    { name: 'Media' },
];


// For demo purposes, using an anchor tag. In a real app, you'd use react-router-dom Link
const Link = ({ to, children, className, ...props }) => (
    <a href={to} className={className} {...props}>{children}</a>
);
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa6";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeMegaMenu, setActiveMegaMenu] = useState(null);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    const toggleMegaMenu = (menu) => {
        setActiveMegaMenu((prev) => (prev === menu ? null : menu));
    };


    return (
        <nav className="w-full shadow-lg bg-red-400 sticky top-0 z-50 border-b border-blue-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 bg-white lg:px-8 flex items-center justify-between h-20">

                <div className="flex gap-6 items-center">
                    <Link to="/media" className="flex items-center gap-2 text-black hover:text-blue-800 transition-colors duration-300 font-medium text-sm">
                        <FaRegNewspaper className="text-lg" />
                        <span className="hidden sm:inline">Media</span>
                    </Link>
                    <Link to="/contact" className="flex items-center gap-2 text-black hover:text-blue-800 transition-colors duration-300 font-medium text-sm">
                        <FaPhoneAlt className="text-lg" />
                        <span className="hidden sm:inline">Contact Us</span>
                    </Link>
                </div>

                {/* Center Logo */}
                <Link to="/" className="text-center group">
                    <div className="text-3xl font-extrabold text-gray-900">
                        <span className="text-black group-hover:text-blue-800 transition-colors duration-300">P</span>ropertyPro
                    </div>
                    <div className="text-xs font-semibold tracking-[0.1em] text-gray-500 uppercase">
                        Your Trusted Real Estate Partner
                    </div>
                </Link>

                {/* Right Search and Social */}
                <div className="hidden md:flex items-center gap-4">
                    <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 shadow-sm">
                        <input
                            type="text"
                            placeholder="Find your dream property..."
                            className="bg-transparent outline-none text-sm w-48 focus:w-56 transition-all duration-300 placeholder-gray-400 text-gray-700"
                        />
                        <FaSearch className="text-black cursor-pointer hover:text-blue-700 transition-colors" />
                    </div>
                    <div className="flex items-center gap-3 ml-2">
                        <Link to="#" className="text-black hover:text-blue-800 cursor-pointer transition-colors duration-300 text-lg"><FaInstagram /></Link>
                        <Link to="#" className="text-black hover:text-blue-800 cursor-pointer transition-colors duration-300 text-lg"><FaTwitter /></Link>
                        <Link to="#" className="text-black hover:text-blue-800 cursor-pointer transition-colors duration-300 text-lg"><FaLinkedin /></Link>
                    </div>
                </div>

                {/* Hamburger Menu */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMobileMenu}
                        className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                    >
                        {isMobileMenuOpen ? <FaTimes size={20} className="text-blue-600" /> : <FaBars size={20} className="text-blue-600" />}
                    </button>
                </div>
            </div>

            {/* Desktop Mega Menu */}
            <div className="hidden md:flex justify-center border-t border-blue-100">
                {menuItems.map((item, index) => (
                    <div key={index} className="relative group px-8 py-4 cursor-pointer">
                        <div
                            onClick={() => item.submenu ? toggleMegaMenu(item.name) : setActiveMegaMenu(null)}
                            className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
                        >
                            <Link to={item.submenu ? "#" : `/${item.name.toLowerCase().replace(/\s/g, '-')}`} className="outline-none focus:outline-none">{item.name}</Link>
                            {item.submenu && (
                                <FaChevronDown
                                    size={10}
                                    className={`transition-transform duration-300 ${activeMegaMenu === item.name ? 'rotate-180' : ''}`}
                                />
                            )}
                        </div>

                        {/* Hover indicator */}
                        {/* <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div> */}

                        <AnimatePresence>
                            {activeMegaMenu === item.name && item.submenu && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="absolute left-0 top-full bg-white shadow-xl mt-2 p-6 grid grid-cols-1 gap-3 min-w-[240px] rounded-lg border border-blue-100"
                                >
                                    {item.submenu.map((sub, i) => (
                                        <Link
                                            key={i}
                                            to={`/${sub.toLowerCase().replace(/\s/g, '-')}`}
                                            className="text-gray-700 hover:text-blue-600 transition-colors duration-300 py-2 px-3 rounded-md hover:bg-blue-50 font-medium"
                                        >
                                            {sub}
                                        </Link>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="md:hidden px-6 pb-6 overflow-hidden border-t border-blue-100 shadow-inner"
                    >
                        {/* Mobile Search */}
                        <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-4 py-3 mb-4 mt-4 shadow-sm">
                            <FaSearch className="text-blue-500" />
                            <input
                                type="text"
                                placeholder="Search properties..."
                                className="bg-transparent outline-none text-sm flex-1 placeholder-gray-400 text-gray-700"
                            />
                        </div>

                        {/* Mobile Menu Items */}
                        {menuItems.map((item, index) => (
                            <div key={index} className="py-3 border-b border-gray-200 last:border-b-0">
                                <div className="flex justify-between items-center">
                                    <Link
                                        to={item.submenu ? "#" : `/${item.name.toLowerCase().replace(/\s/g, '-')}`}
                                        className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium text-lg"
                                        onClick={() => {
                                            if (!item.submenu) setIsMobileMenuOpen(false);
                                        }}
                                    >
                                        {item.name}
                                    </Link>
                                    {item.submenu && (
                                        <FaChevronDown
                                            onClick={() => toggleMegaMenu(item.name)}
                                            className={`cursor-pointer text-blue-600 transition-transform duration-300 ${activeMegaMenu === item.name ? 'rotate-180' : ''}`}
                                        />
                                    )}
                                </div>
                                <AnimatePresence>
                                    {activeMegaMenu === item.name && item.submenu && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="pl-6 mt-3 space-y-2 overflow-hidden"
                                        >
                                            {item.submenu.map((sub, i) => (
                                                <Link
                                                    key={i}
                                                    to={`/${sub.toLowerCase().replace(/\s/g, '-')}`}
                                                    className="block py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium"
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    {sub}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}

                        {/* Mobile Social Icons */}
                        <div className="flex justify-center gap-6 mt-6 pt-4 border-t border-gray-200">
                            <Link to="#" className="text-blue-600 hover:text-blue-800 cursor-pointer transition-colors duration-300 text-xl"><FaInstagram /></Link>
                            <Link to="#" className="text-blue-600 hover:text-blue-800 cursor-pointer transition-colors duration-300 text-xl"><FaTwitter /></Link>
                            <Link to="#" className="text-blue-600 hover:text-blue-800 cursor-pointer transition-colors duration-300 text-xl"><FaLinkedin /></Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;