'use client'

import React from "react";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";

// Header Component
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/#services' },
        { name: 'Products', href: '/#products' },
        { name: 'About Us', href: '/#about' },
        { name: 'Contact', href: '#contact' }
    ];

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    return (
        <header className="bg-emerald-900 text-white shadow-lg sticky top-0 z-50">
            <nav className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <Logo />

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex space-x-8 text-sm lg:text-base">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <a
                                    href={item.href}
                                    className="hover:text-green-300 transition-colors duration-300 font-medium"
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white p-2 hover:bg-emerald-800 rounded-lg transition-colors z-50 relative"
                        onClick={toggleMenu}
                        type="button"
                        aria-label="Toggle menu"
                        aria-expanded={isMenuOpen}
                    >
                        {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                    <ul className="flex flex-col space-y-2 pb-4">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <a
                                    href={item.href}
                                    className="block py-3 px-4 hover:bg-emerald-800 rounded-lg transition-colors duration-300 font-medium"
                                    onClick={toggleMenu}
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
};




export default Navbar;