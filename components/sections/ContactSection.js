'use client'

import { useState } from 'react'
import { FiMail, FiPhone, FiMapPin, FiSend, FiLinkedin, FiGithub } from 'react-icons/fi'
import Button from '@/components/ui/Button'

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission here
        console.log('Form submitted:', formData)
        // Reset form
        setFormData({ name: '', email: '', subject: '', message: '' })
    }

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <section id="contact" className="section-padding">
            <div className="container-max">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text animate-fade-in">
                    Get In Touch
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="animate-slide-up">
                        <h3 className="text-2xl font-bold mb-6 gradient-text">
                            Let's Work Together
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                            I'm always interested in hearing about new opportunities and exciting projects.
                            Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
                                    <FiMail className="text-primary-600 dark:text-primary-400" />
                                </div>
                                <div>
                                    <p className="font-medium">Email</p>
                                    <a
                                        href="mailto:umerm6206@gmail.com"
                                        className="text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors"
                                    >
                                        umerm6206@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
                                    <FiPhone className="text-primary-600 dark:text-primary-400" />
                                </div>
                                <div>
                                    <p className="font-medium">Phone</p>
                                    <a
                                        href="tel:+923430567799"
                                        className="text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors"
                                    >
                                        +92 343 0567799
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
                                    <FiMapPin className="text-primary-600 dark:text-primary-400" />
                                </div>
                                <div>
                                    <p className="font-medium">Location</p>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Rawalpindi/Islamabad, Pakistan
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="mt-8">
                            <h4 className="font-semibold mb-4">Connect with me</h4>
                            <div className="flex space-x-4">
                                <a
                                    href="#"
                                    className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all duration-300"
                                >
                                    <FiLinkedin />
                                </a>
                                <a
                                    href="#"
                                    className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all duration-300"
                                >
                                    <FiGithub />
                                </a>
                                <a
                                    href="mailto:umerm6206@gmail.com"
                                    className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all duration-300"
                                >
                                    <FiMail />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="animate-slide-up">
                        <form onSubmit={handleSubmit} className="glass-morphism p-8 rounded-2xl">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:ring-opacity-20 transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:ring-opacity-20 transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="mb-6">
                                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:ring-opacity-20 transition-all"
                                    placeholder="Project Discussion"
                                />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="message" className="block text-sm font-medium mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:ring-opacity-20 transition-all resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <Button
                                type="submit"
                                variant="primary"
                                size="lg"
                                icon={<FiSend />}
                                className="w-full"
                            >
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection