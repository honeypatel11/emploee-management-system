import React from 'react';
import { FaHome, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    return (
        <section className="contact-section min-h-screen flex items-center justify-center bg-gradient-to-r from-cyan-100 via-blue-100 to-blue-200 px-4 py-10">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row bg-white/80 backdrop-blur-md shadow-2xl rounded-xl overflow-hidden">
                    
                
                    <div className="md:w-5/12 w-full bg-gradient-to-b from-teal-700 to-teal-900 text-white p-8 sm:p-10 flex flex-col justify-center space-y-6">
                        <h4 className="text-sm uppercase tracking-wider text-white/80">Let's Talk</h4>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">Speak With Expert Engineers.</h1>
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="bg-white text-teal-700 p-2 rounded-full shadow-md">
                                    <FaHome />
                                </div>
                                <div>
                                    <p className="font-bold">Email:</p>
                                    <p>(+088) 589-8745</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="bg-white text-teal-700 p-2 rounded-full shadow-md">
                                    <FaPhoneAlt />
                                </div>
                                <div>
                                    <p className="font-bold">Phone:</p>
                                    <p>support@rstheme.com</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="bg-white text-teal-700 p-2 rounded-full shadow-md">
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <p className="font-bold">Address:</p>
                                    <p>New Jersey, 1201, USA</p>
                                </div>
                            </div>
                        </div>
                    </div>

                 
                    <div className="md:w-7/12 w-full p-8 sm:p-10 bg-white/90 backdrop-blur-lg">
                        <p className="text-teal-700 font-semibold uppercase mb-2 tracking-wider">Get In Touch</p>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-800">Fill The Form Below</h2>
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Name"
                                className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400 shadow-sm"
                            />
                            <input
                                type="email"
                                placeholder="E-Mail"
                                className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400 shadow-sm"
                            />
                            <input
                                type="text"
                                placeholder="Phone Number"
                                className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400 shadow-sm"
                            />
                            <input
                                type="text"
                                placeholder="Your Website"
                                className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400 shadow-sm"
                            />
                            <textarea
                                placeholder="Your Message Here"
                                className="md:col-span-2 p-3 rounded-md border border-gray-300 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-teal-400 shadow-sm"
                            ></textarea>

                            <button
                                type="submit"
                                className="md:col-span-2 w-full sm:w-48 py-3 px-6 rounded-full relative overflow-hidden group transition-all duration-300 bg-teal-700 hover:bg-teal-800 text-white shadow-md"
                            >
                                <span className="absolute inset-0 bg-gradient-to-l from-teal-900 to-teal-600 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0 rounded-full"></span>
                                <span className="relative z-10 group-hover:text-white">Submit Now</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
