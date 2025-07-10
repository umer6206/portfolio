'use client'

import { FaTrophy, FaGraduationCap, FaAws } from 'react-icons/fa'
import {
    SiTypescript,
    SiJavascript,
    SiPython,
    SiCplusplus,
    SiReact,
    SiNodedotjs,
    SiNextdotjs,
    SiMongodb,
    SiPostgresql,
} from 'react-icons/si'

const AboutSection = () => {
    const skills = {
        languages: [
            { name: 'TypeScript', icon: <SiTypescript />, color: 'text-blue-600' },
            { name: 'JavaScript', icon: <SiJavascript />, color: 'text-yellow-500' },
            { name: 'Python', icon: <SiPython />, color: 'text-green-600' },
            { name: 'C++', icon: <SiCplusplus />, color: 'text-purple-600' },
        ],
        technologies: [
            { name: 'React.js', icon: <SiReact />, color: 'text-blue-500' },
            { name: 'Node.js', icon: <SiNodedotjs />, color: 'text-green-500' },
            { name: 'Next.js', icon: <SiNextdotjs />, color: 'text-black dark:text-white' },
            { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-600' },
            { name: 'PostgreSQL', icon: <SiPostgresql />, color: 'text-blue-600' },
            { name: 'AWS', icon: <FaAws />, color: 'text-orange-500' },
        ]
    }

    return (
        <section id="about" className="section-padding bg-gray-50 dark:bg-gray-800">
            <div className="container-max">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text animate-fade-in">
                    About Me
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Education & Awards */}
                    <div className="animate-slide-up">
                        <div className="glass-morphism p-8 rounded-2xl">
                            <div className="flex items-center mb-6">
                                <FaGraduationCap className="text-3xl gradient-text mr-4" />
                                <h3 className="text-2xl font-bold gradient-text">Education</h3>
                            </div>

                            <div className="space-y-6">
                                <div className="border-l-4 border-primary-500 pl-6">
                                    <h4 className="text-xl font-semibold mb-2">BS Computer Science</h4>
                                    <p className="text-primary-600 dark:text-primary-400 font-medium">
                                        PMAS Arid University
                                    </p>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        2020 - 2024 | Rawalpindi, Pakistan
                                    </p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                                        Gained strong foundation in algorithms, data structures, web development, and software engineering.
                                    </p>
                                </div>

                                <div className="mt-8">
                                    <div className="flex items-center mb-4">
                                        <FaTrophy className="text-2xl text-yellow-500 mr-3" />
                                        <h4 className="text-xl font-semibold">Awards</h4>
                                    </div>
                                    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                                        <p className="text-yellow-800 dark:text-yellow-200">
                                            <strong>3rd Position</strong> - Speed Programming Competition
                                        </p>
                                        <p className="text-sm text-yellow-600 dark:text-yellow-300 mt-1">
                                            Recognized for exceptional problem-solving and algorithmic efficiency under time constraints.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Skills */}
                    <div className="animate-slide-up">
                        <h3 className="text-2xl font-bold mb-6 gradient-text">Technical Skills</h3>

                        <div className="space-y-8">
                            {/* Languages */}
                            <div>
                                <h4 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-300">Languages</h4>
                                <div className="grid grid-cols-2 gap-4">
                                    {skills.languages.map((skill, index) => (
                                        <div
                                            key={skill.name}
                                            className="flex items-center space-x-3 p-3 rounded-lg bg-white dark:bg-gray-700 shadow-sm hover:shadow-md transition-all duration-300 card-hover"
                                        >
                                            <span className={`text-2xl ${skill.color}`}>{skill.icon}</span>
                                            <span className="font-medium">{skill.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Technologies */}
                            <div>
                                <h4 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-300">Technologies</h4>
                                <div className="grid grid-cols-2 gap-4">
                                    {skills.technologies.map((skill, index) => (
                                        <div
                                            key={skill.name}
                                            className="flex items-center space-x-3 p-3 rounded-lg bg-white dark:bg-gray-700 shadow-sm hover:shadow-md transition-all duration-300 card-hover"
                                        >
                                            <span className={`text-2xl ${skill.color}`}>{skill.icon}</span>
                                            <span className="font-medium">{skill.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection