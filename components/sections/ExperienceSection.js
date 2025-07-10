'use client'

import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi'

const ExperienceSection = () => {
    const experiences = [
        {
            title: 'Full Stack Developer',
            company: 'The Right Software',
            location: 'Rawalpindi, Pakistan',
            period: '05/2025 – Present',
            description: [
                'Built a role-based CMS using Next.js (App Router) and TypeScript',
                'Integrated Prisma ORM with PostgreSQL for efficient data handling',
                'Implemented RBAC for secure user and admin access control',
                'Designed modular APIs and optimized server-side performance'
            ],
            current: true
        },
        {
            title: 'Full Stack Developer',
            company: 'Octaloop Technologies',
            location: 'Islamabad, Pakistan',
            period: '12/2023 – 04/2025',
            description: [
                'Developed and maintained web applications using React.js and Next.js',
                'Built server-side logic, database interactions, and APIs using Node.js and Express',
                'Designed and implemented database schemas using SQL and NoSQL databases',
                'Implemented server-side logic for AI model requests and responses',
                'Developed Web3 functionalities for decentralized applications (dApps)',
                'Utilized Git for version control and team collaboration'
            ],
            current: false
        },
        {
            title: 'Full Stack Developer',
            company: 'K2 Technologies',
            location: 'Islamabad, Pakistan',
            period: '06/2023 – 08/2023',
            description: [
                'Built server-side logic and APIs using Node.js and Express',
                'Designed database schemas and managed data storage solutions',
                'Developed web applications using HTML, CSS, Tailwind CSS, JavaScript, and React.js',
                'Gained experience in full-stack development best practices'
            ],
            current: false
        }
    ]

    return (
        <section id="experience" className="section-padding">
            <div className="container-max">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text animate-fade-in">
                    Professional Experience
                </h2>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500"></div>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    } animate-fade-in`}
                                style={{ animationDelay: `${index * 0.2}s` }}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full gradient-bg border-4 border-white dark:border-gray-900 shadow-lg z-10"></div>

                                {/* Experience Card */}
                                <div className={`glass-morphism p-6 rounded-2xl shadow-lg card-hover ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                                    } md:w-5/12`}>
                                    {exp.current && (
                                        <div className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium mb-4">
                                            Current Position
                                        </div>
                                    )}

                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold gradient-text mb-2">
                                                {exp.title}
                                            </h3>
                                            <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                                                <FiBriefcase className="mr-2" />
                                                <span className="font-medium">{exp.company}</span>
                                            </div>
                                            <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-2">
                                                <FiMapPin className="mr-2" />
                                                <span>{exp.location}</span>
                                            </div>
                                            <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                                                <FiCalendar className="mr-2" />
                                                <span>{exp.period}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <ul className="space-y-2">
                                        {exp.description.map((item, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <span className="text-primary-500 mr-2 mt-1">•</span>
                                                <span className="text-gray-600 dark:text-gray-300 text-sm">
                                                    {item}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ExperienceSection