import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = ({ setIsLoggedIn }) => {
    const [input, setInput] = useState({
        email: "",
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setInput({ ...input, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (input.email === "admin123@gmail.com" && input.password === "admin@123") {
            setIsLoggedIn(true);
            localStorage.setItem("isLoggedIn", JSON.stringify(true));
            toast.success("Admin Logged In Successfully!");
            navigate("/employees");
        } else {
            toast.error("Invalid Email Id or Password!");
            setIsLoggedIn(false);
        }
    };

    useEffect(() => {
        const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
        if (isLoggedIn) {
            navigate("/employees");
        }
    }, []);

    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-50 to-teal-100 px-4">
            <div className="w-full max-w-md bg-white border border-teal-200 rounded-xl shadow-lg p-8 sm:p-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-teal-700 mb-6 text-center">
                    Let’s Get You Logged In
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                 
                    <div>
                        <label htmlFor="email" className="block mb-1 text-sm font-medium text-teal-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={input.email}
                            onChange={handleChange}
                            placeholder="name@mail.com"
                            autoComplete="email"
                            required
                            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-800"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block mb-1 text-sm font-medium text-teal-700">
                            Password
                        </label>
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            value={input.password}
                            onChange={handleChange}
                            placeholder="••••••••"
                            autoComplete="current-password"
                            required
                            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-800"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="text-sm text-teal-600 mt-1 hover:underline"
                        >
                            {showPassword ? "Hide" : "Show"} Password
                        </button>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-md transition duration-300"
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Login;
