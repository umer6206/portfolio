'use client'

import { FiHeart } from 'react-icons/fi'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
            <div className="container-max py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-bold gradient-text mb-4">
                            Muhammad Umer
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Full Stack Developer passionate about creating innovative web solutions
                            and bringing ideas to life through code.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors"
                            >
                                <FaLinkedin className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors"
                            >
                                <FaGithub className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#experience" className="text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors">
                                    Experience
                                </a>
                            </li>
                            <li>
                                <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors">
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                        <div className="space-y-2">
                            <p className="text-gray-600 dark:text-gray-300">
                                <span className="font-medium">Email:</span> umerm6206@gmail.com
                            </p>
                            <p className="text-gray-600 dark:text-gray-300">
                                <span className="font-medium">Phone:</span> +92 343 0567799
                            </p>
                            <p className="text-gray-600 dark:text-gray-300">
                                <span className="font-medium">Location:</span> Rawalpindi/Islamabad, Pakistan
                            </p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center">
                    <p className="text-gray-600 dark:text-gray-300 flex items-center justify-center">
                        Made with <FiHeart className="text-red-500 mx-1" /> by Muhammad Umer
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                        © {new Date().getFullYear()} Muhammad Umer. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer