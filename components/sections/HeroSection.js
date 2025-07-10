'use client'

import { useEffect, useState } from 'react'
import { FiMail, FiDownload, FiArrowDown } from 'react-icons/fi'
import { FaLinkedin, FaGithub, FaCode } from 'react-icons/fa'
import Button from '@/components/ui/Button'

const HeroSection = () => {
    const [currentText, setCurrentText] = useState('')
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)

    const texts = [
        'Full Stack Developer',
        'React.js Expert',
        'Node.js Developer',
        'Web3.0 Developer',
        'Next.js Specialist'
    ]

    useEffect(() => {
        const typeSpeed = isDeleting ? 50 : 150
        const text = texts[currentIndex]

        const timeout = setTimeout(() => {
            if (!isDeleting && currentText === text) {
                setTimeout(() => setIsDeleting(true), 2000)
            } else if (isDeleting && currentText === '') {
                setIsDeleting(false)
                setCurrentIndex((prev) => (prev + 1) % texts.length)
            } else {
                setCurrentText(prev =>
                    isDeleting
                        ? prev.slice(0, -1)
                        : text.slice(0, prev.length + 1)
                )
            }
        }, typeSpeed)

        return () => clearTimeout(timeout)
    }, [currentText, currentIndex, isDeleting])

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Hero Content */}
            <div className="container-max section-padding text-center relative z-10">
                <div className="animate-fade-in">
                    {/* Profile Avatar */}
                    <div className="w-32 h-32 mx-auto mb-8 rounded-full gradient-bg p-1 animate-float">
                        <div className="w-full h-full bg-white dark:bg-gray-900 rounded-full flex items-center justify-center">
                            <FaCode className="text-4xl gradient-text" />
                        </div>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
                        <span className="gradient-text">Muhammad Umer</span>
                    </h1>

                    {/* Typing Effect */}
                    <div className="text-xl md:text-2xl mb-8 h-8 animate-slide-up">
                        <span className="border-r-2 border-primary-500 pr-1">
                            {currentText}
                        </span>
                    </div>

                    {/* Description */}
                    <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-gray-600 dark:text-gray-300 animate-fade-in">
                        Proficient Full Stack Developer with 2 years of experience in Node.js, React.js, Next.js, Express.js, MongoDB, SQL, and Web3.0 integration.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up">
                        <Button
                            href="#contact"
                            variant="primary"
                            icon={<FiMail />}
                            className="transform hover:scale-105 transition-all duration-300"
                        >
                            Get In Touch
                        </Button>
                        <Button
                            href="#projects"
                            variant="outline"
                            icon={<FiDownload />}
                            className="transform hover:scale-105 transition-all duration-300"
                        >
                            View Projects
                        </Button>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-6 animate-fade-in">
                        <a
                            href="mailto:umerm6206@gmail.com"
                            className="text-2xl text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transform hover:scale-110 transition-all duration-300"
                        >
                            <FiMail />
                        </a>
                        <a
                            href="#"
                            className="text-2xl text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transform hover:scale-110 transition-all duration-300"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="#"
                            className="text-2xl text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transform hover:scale-110 transition-all duration-300"
                        >
                            <FaGithub />
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <FiArrowDown className="text-2xl gradient-text" />
            </div>
        </section>
    )
}

export default HeroSection