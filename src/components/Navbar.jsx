import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md w-full">
            <div className="flex justify-between items-center px-4 h-16">
                {/* Logo */}
                <Link to="/" className="text-xl font-bold text-indigo-600">
                    MySite
                </Link>

                {/* Desktop menu */}
                <div className="hidden md:flex space-x-6">
                    <Link to="/" className="hover:text-indigo-600">Home</Link>
                    <Link to="/about" className="hover:text-indigo-600">About</Link>
                    <Link to="/features" className="hover:text-indigo-600">Features</Link>
                    <Link to="/contact" className="hover:text-indigo-600">Contact</Link>
                </div>

                {/* Mobile button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden p-2 rounded hover:bg-gray-100"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={
                                open
                                    ? "M6 18L18 6M6 6l12 12"
                                    : "M4 6h16M4 12h16M4 18h16"
                            }
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile menu */}
            {open && (
                <div className="md:hidden bg-white border-t">
                    <Link to="/" onClick={() => setOpen(false)} className="block px-4 py-2 hover:bg-gray-50">Home</Link>
                    <Link to="/about" onClick={() => setOpen(false)} className="block px-4 py-2 hover:bg-gray-50">About</Link>
                    <Link to="/features" onClick={() => setOpen(false)} className="block px-4 py-2 hover:bg-gray-50">Features</Link>
                    <Link to="/contact" onClick={() => setOpen(false)} className="block px-4 py-2 hover:bg-gray-50">Contact</Link>
                </div>
            )}
        </nav>
    );
}
