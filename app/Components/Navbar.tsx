'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa';
import Image from 'next/image';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="absolute top-0 left-0 w-full z-50 text-white">
            <div className="bg-black/50">
                <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                    <Link href="/" className="text-2xl font-bold text-white">
                        <Image
                            src="https://i.imgur.com/nLJLBRX.png"
                            alt="logo"
                            width={150}
                            height={50}
                            className="object-contain"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        {[
                            { href: '#services', label: 'Hem' },
                            { href: '#gallery', label: 'Galleri' },
                            { href: '#team', label: 'Vårat Team' },
                            { href: '#testimonials', label: 'Sponsorer' },
                            { href: '#contact', label: 'Boka' },
                        ].map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                className="relative group text-gray-300 font-semibold"
                            >
                                <span className="pb-1 inline-block after:content-[''] after:block after:h-[2px] after:bg-blue-500 after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">
                                    {label}
                                </span>
                            </Link>
                        ))}
                    </nav>

                    {/* Phone info - Desktop only */}
                    <div className="hidden md:flex items-center space-x-2">
                        <FaPhone className="text-blue-500" />
                        <span className="font-semibold">0761239587</span>
                    </div>

                    {/* Mobile Menu Toggle Button */}
                    <button
                        className="md:hidden text-2xl text-gray-700"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-black/90 py-4 px-4 space-y-4">
                    <nav className="flex flex-col space-y-4">
                        <Link href="#services" onClick={() => setIsOpen(false)}>Hem</Link>
                        <Link href="#gallery" onClick={() => setIsOpen(false)}>Galleri</Link>
                        <Link href="#team" onClick={() => setIsOpen(false)}>Vårat Team</Link>
                        <Link href="#testimonials" onClick={() => setIsOpen(false)}>Sponsorer</Link>
                        <Link href="#contact" onClick={() => setIsOpen(false)}>Boka</Link>
                    </nav>
                    <div className="flex items-center mt-4 space-x-2 text-white">
                        <FaPhone className="text-blue-500" />
                        <span className="font-semibold">0761239587</span>
                    </div>
                </div>
            )}
        </header>
    );
}
