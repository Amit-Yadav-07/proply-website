import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu, X, ArrowRight, Users, Building, Briefcase, Phone, Shield, Zap, Mail, MailOpen } from "lucide-react";
import { menuItems, socialLinks } from "./data";
import Logo from '../assets/proplyy-logo.png'
import whiteLogo from '../assets/proplyy-white-logo.png'
import { Link } from 'react-router-dom'

// Enhanced delay utility with better state management
function useDelayedState(timeoutMs = 150) {
    const [state, setState] = useState(false);
    const timerRef = useRef();
    const show = () => {
        clearTimeout(timerRef.current);
        setState(true);
    };
    const hide = () => {
        clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => setState(false), timeoutMs);
    };
    const instantHide = () => {
        clearTimeout(timerRef.current);
        setState(false);
    };
    return [state, show, hide, instantHide];
}

export default function EnhancedTwoSectionNavbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openIndex, showDropdown, hideDropdown] = useDelayedState(180);
    const [submenuParent, setSubmenuParent] = useState(null);
    const [openSubmenu, setOpenSubmenu] = useState(null);
    const [isAnimating, setIsAnimating] = useState(false);

    // Handle menu transitions
    const handleMenuEnter = (idx) => {
        if (submenuParent !== idx) {
            setIsAnimating(true);
            setTimeout(() => setIsAnimating(false), 50);
        }
        showDropdown();
        setOpenSubmenu(null);
        setSubmenuParent(idx);
    };

    // Close mobile menu function
    const closeMobileMenu = () => {
        setMobileOpen(false);
    };

    // Close mobile menu on escape
    useEffect(() => {
        if (!mobileOpen) return;
        const handler = (e) => {
            if (e.key === "Escape") setMobileOpen(false);
        };
        document.addEventListener("keydown", handler);
        return () => document.removeEventListener("keydown", handler);
    }, [mobileOpen]);

    // Prevent scroll when mobile menu is open
    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileOpen]);

    return (
        <>
            {/* Top Section - Contact Info, Logo, and Social Icons */}
            <div className=" bg-white/50 text-black p-2">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="flex items-center justify-between h-12">
                        {/* Left - Contact Info */}
                        <div className="flex items-center space-x-6 text-sm">
                            <div className="flex items-center space-x-2 text-black hover:text-black transition-colors duration-200">
                                <MailOpen className="w-5 h-5" />
                                {/* <span className="hidden sm:inline">hello@securepro.com</span> */}
                            </div>
                            <div className="flex items-center space-x-2 text-black hover:text-black transition-colors duration-200">
                                <Phone className="w-5 h-5" />
                                {/* <span className="hidden sm:inline">+1 (555) 123-4567</span> */}
                            </div>
                        </div>

                        {/* Center - Logo */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-3">
                            {/* <div className="w-8 h-8 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg">
                                <Shield className="w-5 h-5 text-white" />
                            </div>
                            <div className="font-bold text-xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                {Logo}
                            </div> */}
                            <Link><img src={Logo} className="h-[1.8rem] object-fit-contain" alt="" /></Link>
                        </div>

                        {/* Right - Social Icons */}
                        <div className="flex items-center space-x-1">
                            {socialLinks.map((social) => {
                                const IconComponent = social.icon;
                                return (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        aria-label={social.name}
                                        className={`w-8 h-10 flex items-center justify-center rounded-lg bg-white/5 backdrop-blur-sm text-black transition-all duration-300 hover:bg-white/10 hover:scale-110 ${social.color}`}
                                    >
                                        <IconComponent className="w-4 h-4" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation Section */}
            <nav className="bg-white/95 backdrop-blur-md shadow-xl sticky top-0 z-50 border-b border-gray-200/50">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    {/* Main navbar */}
                    <div className="flex h-16 items-center justify-between">
                        {/* Mobile Brand & Menu Button */}
                        <div className="flex items-center justify-between lg:hidden w-[100%]">

                            <div className="flex items-center space-x-2">
                                {/* <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                                    <Shield className="w-5 h-5 text-white" />
                                </div> */}
                                {/* <div className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    Proplyy
                                </div> */}
                                <Link to="/" onClick={closeMobileMenu}>
                                    <img src={Logo} className="h-[1.4rem] object-fit-contain" alt="" />
                                </Link>
                            </div>

                            <button
                                className="p-2 rounded-xl hover:bg-gray-100 text-black transition-color duration-200 mr-2"
                                onClick={() => setMobileOpen(!mobileOpen)}
                                aria-label="Toggle menu"
                            >
                                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>

                        </div>

                        {/* Desktop navigation - Centered */}
                        <div className="hidden lg:flex items-center justify-center flex-1">
                            <div className="flex items-center space-x-1">
                                {menuItems.map((item, idx) => {
                                    console.log(item.link)
                                    const IconComponent = item.icon;
                                    return (
                                        <div key={item.title} className="relative">
                                            <Link to={item?.link}
                                                className="flex items-center  space-x-2 px-5 py-3 rounded-xl text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 font-medium group"
                                                onMouseEnter={() => item.subMenu && handleMenuEnter(idx)}
                                                onMouseLeave={() => item.subMenu && hideDropdown()}
                                                onFocus={() => item.subMenu && handleMenuEnter(idx)}
                                                aria-haspopup={!!item.subMenu}
                                                aria-expanded={openIndex && submenuParent === idx}
                                            >
                                                <IconComponent className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                                                <span>{item.title}</span>
                                                {item.subMenu && (
                                                    <ChevronDown className={`w-4 h-4 transition-all duration-300 ${openIndex && submenuParent === idx ? 'rotate-180 text-blue-600' : 'group-hover:text-blue-600'
                                                        }`} />
                                                )}
                                            </Link>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* CTA Button */}
                        {/* <div className="hidden lg:block">
                            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-xl hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 hover:scale-105">
                                Get Started Free
                            </button>
                        </div> */}
                    </div>
                </div>

                {/* Mega Menu Dropdown - Enhanced */}
                {openIndex && submenuParent !== null && menuItems[submenuParent]?.subMenu && (
                    <div
                        className="absolute left-0 right-0 top-full bg-white/98 backdrop-blur-md shadow-2xl border-t border-gray-200/50 z-40"
                        onMouseEnter={showDropdown}
                        onMouseLeave={hideDropdown}
                        style={{ height: '52vh', minHeight: '420px' }}
                    >
                        <div className={`h-full transition-all duration-500 ease-out ${isAnimating ? 'opacity-0 translate-y-6' : 'opacity-100 translate-y-0'
                            }`}>
                            <div className="max-w-7xl mx-auto px-4 lg:px-8 h-full">
                                <div className="grid grid-cols-12 gap-10 h-full py-10">
                                    {/* Main content - 8 columns */}
                                    <div className="col-span-8 grid grid-cols-2 gap-10">
                                        {menuItems[submenuParent].subMenu.map((section, sectionIdx) => (
                                            <div
                                                key={section.heading}
                                                className={`space-y-5 transition-all duration-500 delay-${sectionIdx * 100}`}
                                                style={{
                                                    animation: `slideInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${sectionIdx * 0.15}s both`
                                                }}
                                            >
                                                <div className="border-b border-gray-200 pb-4">
                                                    <h3 className="font-bold text-gray-900 text-xl">{section.heading}</h3>
                                                    <p className="text-sm text-gray-600 mt-2">{section.description}</p>
                                                </div>

                                                <div className="space-y-3">
                                                    {section.items.map((item, itemIdx) => {
                                                        const ItemIcon = item.icon;
                                                        return (
                                                            <div
                                                                key={item.title}
                                                                className="relative group"
                                                                onMouseEnter={() => setOpenSubmenu(item.title)}
                                                                onMouseLeave={() => setOpenSubmenu(null)}
                                                            >
                                                                <button className="w-full text-left p-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 group border border-transparent hover:border-blue-200 hover:shadow-lg">
                                                                    <div className="flex items-start space-x-4">
                                                                        <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300 group-hover:scale-110">
                                                                            <ItemIcon className="w-5 h-5 text-blue-600" />
                                                                        </div>
                                                                        <div className="flex-1 ">
                                                                            <div className="flex items-center justify-between">
                                                                                <span className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                                                                                    {item.title}
                                                                                </span>
                                                                                {item.subMenu && (
                                                                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-all duration-300 group-hover:translate-x-1" />
                                                                                )}
                                                                            </div>
                                                                            <p className="text-sm text-gray-600 mt-2 group-hover:text-gray-700 transition-colors duration-300">{item.description}</p>
                                                                        </div>
                                                                    </div>
                                                                </button>

                                                                {/* Third level submenu - Enhanced */}
                                                                {/* {item.subMenu && openSubmenu === item.title && (
                                                                    <div className="absolute left-full top-0 ml-6 w-72 rounded-2xl shadow-2xl border border-gray-200 p-6 z-[100]"
                                                                        style={{ animation: 'slideInRight 0.3s ease-out' }}>
                                                                        <div className="space-y-2">
                                                                            <h5 className="font-semibold text-gray-900 mb-4">{item.title}</h5>
                                                                            {item.subMenu.map((subItem) => (
                                                                                <button
                                                                                    key={subItem}
                                                                                    className="w-full text-left px-4 py-3 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 text-gray-700 hover:text-blue-600 transition-all duration-300 text-sm font-medium hover:shadow-md"
                                                                                >
                                                                                    {subItem}
                                                                                </button>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                )} */}
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Featured content - 4 columns - Enhanced */}
                                    <div className="col-span-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-2xl p-8 border border-blue-200/30"
                                        style={{ animation: 'slideInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both' }}>
                                        <div className="h-full flex flex-col">
                                            <div className="text-5xl mb-6">{menuItems[submenuParent].featured?.image}</div>
                                            <h4 className="font-bold text-gray-900 text-xl mb-3">
                                                {menuItems[submenuParent].featured?.title}
                                            </h4>
                                            <p className="text-gray-700 text-sm mb-8 flex-1 leading-relaxed">
                                                {menuItems[submenuParent].featured?.description}
                                            </p>
                                            <button className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-4 px-6 rounded-xl hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                                Learn More
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </nav>

            {/* Mobile Menu Overlay */}
            {mobileOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-60 z-40 lg:hidden backdrop-blur-sm"
                    style={{ animation: 'fadeIn 0.4s ease-out' }}
                    onClick={() => setMobileOpen(false)} />
            )}

            {/* Mobile Menu Drawer - Enhanced */}
            <div className={`fixed top-0 left-0 right-0 bottom-0 bg-white z-50 lg:hidden transform transition-transform duration-500 ease-out ${mobileOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                {/* Mobile Header - Enhanced */}
                <div className="bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 text-white p-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            {/* <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                                <Shield className="w-6 h-6 text-white" />
                            </div> */}
                            <div>
                                <Link to="/" onClick={closeMobileMenu}>
                                    <img src={whiteLogo} className="h-[1.4rem] object-fit-contain" alt="" />
                                </Link>
                                {/* <div className="font-bold text-xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                    Proplyy
                                </div> */}
                                {/* <div className="text-xs text-gray-400">Professional Security Solutions</div> */}
                            </div>
                        </div>
                        <button
                            onClick={() => setMobileOpen(false)}
                            className="p-2 rounded-xl hover:bg-white/10 transition-colors duration-300"
                            aria-label="Close menu"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Contact Info & Social Icons in Mobile */}
                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-700">
                        <div className="flex flex-col space-y-2 text-sm text-gray-300">
                            <div className="flex items-center space-x-2">
                                <Mail className="w-4 h-4" />
                                <span>hello@securepro.com</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Phone className="w-4 h-4" />
                                <span>+1 (555) 123-4567</span>
                            </div>
                        </div>

                        <div className="flex items-center space-x-2">
                            {socialLinks.slice(0, 3).map((social) => {
                                const IconComponent = social.icon;
                                return (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        aria-label={social.name}
                                        className={`w-8 h-8 flex items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm text-gray-300 transition-all duration-300 hover:bg-white/20 hover:scale-110 ${social.color}`}
                                    >
                                        <IconComponent className="w-4 h-4" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className="h-full overflow-y-auto p-6 bg-white">
                    <div className="space-y-4">
                        {menuItems.map((item, idx) => {
                            console.log(item.link)
                            const IconComponent = item.icon;
                            return (
                                <details key={item.title} className="group">
                                    <summary className="flex items-center space-x-3 p-4 cursor-pointer hover:bg-gray-50 rounded-xl transition-all duration-300 list-none border border-gray-200 hover:border-blue-300 hover:shadow-md">
                                        <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                                            <IconComponent className="w-4 h-4 text-blue-600" />
                                        </div>
                                        <Link
                                            to={item.link}
                                            className="font-semibold text-gray-900 flex-1"
                                            onClick={closeMobileMenu}
                                        >
                                            {item.title}
                                        </Link>
                                        {item.subMenu && <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform duration-300" />}
                                    </summary>
                                    {item.subMenu && (
                                        <div className="mt-3 ml-11 space-y-4">
                                            {item.subMenu.map((section) => (
                                                <div key={section.heading} className="space-y-3">
                                                    <div className="text-sm font-bold text-blue-600 uppercase tracking-wide">
                                                        {section.heading}
                                                    </div>
                                                    {section.items.map((subItem) => (
                                                        <details key={subItem.title} className="ml-2">
                                                            <summary className="flex items-center justify-between p-3 cursor-pointer hover:bg-gray-50 rounded-lg text-gray-700 list-none transition-all duration-300">
                                                                <span className="font-medium">{subItem.title}</span>
                                                                {subItem.subMenu && <ArrowRight className="w-4 h-4 transition-transform group-open:rotate-90" />}
                                                            </summary>
                                                            {subItem.subMenu && (
                                                                <div className="ml-4 mt-2 space-y-2">
                                                                    {subItem.subMenu.map((childItem) => (
                                                                        <Link
                                                                            key={childItem}
                                                                            to={childItem.link || '#'}
                                                                            className="block w-full text-left p-3 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-300"
                                                                            onClick={closeMobileMenu}
                                                                        >
                                                                            {childItem}
                                                                        </Link>
                                                                    ))}
                                                                </div>
                                                            )}
                                                        </details>
                                                    ))}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </details>
                            );
                        })}
                    </div>

                    {/* Mobile CTA */}
                    <div className="mt-8 pt-6 border-t border-gray-200">
                        <button className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-4 px-6 rounded-xl font-semibold mb-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            Get Started Free
                        </button>

                        {/* Additional Mobile Social Links */}
                        <div className="flex justify-center space-x-3">
                            {socialLinks.slice(3).map((social) => {
                                const IconComponent = social.icon;
                                return (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        aria-label={social.name}
                                        className={`w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 text-gray-600 transition-all duration-300 hover:bg-gray-200 hover:scale-110 ${social.color}`}
                                    >
                                        <IconComponent className="w-5 h-5" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* Enhanced Custom CSS for animations */}
            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                
                @keyframes slideInUp {
                    from { 
                        opacity: 0; 
                        transform: translateY(30px); 
                    }
                    to { 
                        opacity: 1; 
                        transform: translateY(0); 
                    }
                }
                
                @keyframes slideInRight {
                    from { 
                        opacity: 0; 
                        transform: translateX(-20px); 
                    }
                    to { 
                        opacity: 1; 
                        transform: translateX(0); 
                    }
                }
                
                .delay-0 { animation-delay: 0ms; }
                .delay-100 { animation-delay: 100ms; }
                .delay-200 { animation-delay: 200ms; }
                
                /* Enhanced hover effects */
                .group:hover .w-8 {
                    transform: scale(1.1);
                }
                
                /* Smooth gradient animations */
                .bg-gradient-to-r {
                    background-size: 200% 200%;
                    animation: gradientShift 3s ease infinite;
                }
                
                @keyframes gradientShift {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
            `}</style>
        </>
    );
}