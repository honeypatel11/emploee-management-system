import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Editemployee = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [input, setInput] = useState({
        name: "", salary: "", department: "",
    });

    useEffect(() => {
        const employees = JSON.parse(localStorage.getItem("employees")) || [];
        const editEmp = employees.find((emp) => emp.id == id);

        if (editEmp) {
            setInput(editEmp);
        } else {
            toast.error("User Not Found !");
            navigate("/employee");
        }
    }, [id]);

    const handleChange = (e) => {
        setInput({ ...input, [e.target.id]: e.target.value });
    };

    const handleUpdate = (e) => {
        e.preventDefault();

        const employees = JSON.parse(localStorage.getItem("employees")) || [];
        const updatedEmp = employees.map((emp) =>
            emp.id == id ? { ...emp, ...input } : emp
        );

        localStorage.setItem("employees", JSON.stringify(updatedEmp));
        toast.success("Data Updated Successfully !");
        setInput({ name: "", salary: "", department: "" });
        navigate("/employees");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-600 to-teal-600 px-4 sm:px-6 lg:px-8 py-8">
            <div className="bg-white/80 backdrop-blur-md shadow-xl rounded-2xl w-full max-w-3xl p-6 sm:p-8">
                <h2 className="text-2xl sm:text-4xl font-bold text-center text-teal-800 mb-6 sm:mb-8">
                    Edit Employee
                </h2>

                <form onSubmit={handleUpdate}>
                    <div className="grid gap-6 sm:grid-cols-2">
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-semibold text-gray-700">
                                Employee Name
                            </label>
                            <input
                                onChange={handleChange}
                                value={input.name}
                                type="text"
                                id="name"
                                placeholder="John"
                                required
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-sm"
                            />
                        </div>

                        <div>
                            <label htmlFor="salary" className="block mb-2 text-sm font-semibold text-gray-700">
                                Salary
                            </label>
                            <input
                                onChange={handleChange}
                                value={input.salary}
                                type="number"
                                id="salary"
                                placeholder="₹5000"
                                required
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-600 shadow-sm"
                            />
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="department" className="block mb-2 text-sm font-semibold text-gray-700">
                                Department
                            </label>
                            <select
                                onChange={handleChange}
                                value={input.department}
                                id="department"
                                required
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-sm"
                            >
                                <option value="">Choose a Department</option>
                                <option value="Designing">Designing</option>
                                <option value="Development">Development</option>
                                <option value="Finance">Finance</option>
                                <option value="Sales And Marketing">Sales And Marketing</option>
                            </select>
                        </div>

                        <div className="sm:col-span-2 flex justify-center">
                            <button
                                type="submit"
                                className="relative overflow-hidden group text-white font-semibold py-2.5 px-8 rounded-full bg-teal-600 shadow-md transition-all duration-300 hover:shadow-lg"
                            >
                                <span className="absolute inset-0 bg-gradient-to-l from-teal-800 to-teal-600 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0 rounded-full"></span>
                                <span className="relative z-10">Update</span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Editemployee;
