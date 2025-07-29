import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.setItem("isLoggedIn", JSON.stringify(false));
        toast.success("Logged Out Successfully");
        navigate("/login");
    };

    const navLink = (to, label) => (
        <Link
            to={to}
            onClick={() => setIsMenuOpen(false)}
            className={`block md:inline ${pathname === to || (to === "/employees" && (pathname.includes("/employees") || pathname === "/add-employee" || pathname.includes("/edit-employee")))
                ? "text-teal-700"
                : "text-gray-700 hover:text-teal-600"
                }`}
        >
            {label}
        </Link>
    );

    return (
        <header className="bg-white shadow-sm border-b sticky top-0 z-50">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
             
                <Link to="/" className="flex items-center space-x-2">
                    <img src="/img/brand-icon-top.svg" className="h-8" alt="Logo" />
                </Link>

                <button
                    className="md:hidden text-gray-700 focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    
                </button>

                <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold">
                    {navLink("/", "Home")}
                    {navLink("/services", "Services")}
                    {navLink("/contact", "Contact")}
                    {isLoggedIn && navLink("/employees", "Employees")}
                </nav>

                <div className="hidden md:flex">
                    {isLoggedIn ? (
                        <button
                            onClick={handleLogout}
                            className="bg-teal-700 text-white px-5 py-2 rounded-full font-medium hover:bg-teal-800 transition-all duration-300 text-sm"
                        >
                            Logout
                        </button>
                    ) : (
                        <button
                            onClick={() => navigate("/login")}
                            className="bg-teal-700 text-white px-5 py-2 rounded-full font-medium hover:bg-teal-800 transition-all duration-300 text-sm"
                        >
                            Login
                        </button>
                    )}
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden px-4 pb-4 space-y-2 text-sm font-semibold">
                    {navLink("/", "Home")}
                    {navLink("/services", "Services")}
                    {navLink("/contact", "Contact")}
                    {isLoggedIn && navLink("/employees", "Employees")}
                    <div>
                        {isLoggedIn ? (
                            <button
                                onClick={() => { handleLogout(); setIsMenuOpen(false); }}
                                className="w-full bg-teal-700 text-white px-5 py-2 rounded-full font-medium hover:bg-teal-800 transition-all duration-300 text-sm"
                            >
                                Logout
                            </button>
                        ) : (
                            <button
                                onClick={() => { navigate("/login"); setIsMenuOpen(false); }}
                                className="w-full bg-teal-700 text-white px-5 py-2 rounded-full font-medium hover:bg-teal-800 transition-all duration-300 text-sm"
                            >
                                Login
                            </button>
                        )}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
