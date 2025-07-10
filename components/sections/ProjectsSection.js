'use client'

import { FiGithub, FiExternalLink, FiCode, FiDatabase, FiShield } from 'react-icons/fi'
import { SiNextdotjs, SiReact, SiNodedotjs, SiMongodb, SiPostgresql, SiStripe } from 'react-icons/si'
import Button from '@/components/ui/Button'

const ProjectsSection = () => {
    const projects = [
        {
            title: 'CMS-NEXT',
            description: 'Full-stack CMS built with Next.js, TypeScript, Prisma, and PostgreSQL. Features invoice generation, project management, and content handling with Role-Based Access Control.',
            technologies: [
                { name: 'Next.js', icon: <SiNextdotjs /> },
                { name: 'TypeScript', icon: <FiCode /> },
                { name: 'Prisma', icon: <FiDatabase /> },
                { name: 'PostgreSQL', icon: <SiPostgresql /> }
            ],
            features: [
                'Role-Based Access Control (RBAC)',
                'Invoice Generation',
                'Project Management',
                'Server-side Rendering',
                'Secure APIs'
            ],
            category: 'Web Application',
            status: 'Completed'
        },
        {
            title: 'Evisa Village',
            description: 'Online visa application platform with comprehensive user and admin dashboards for streamlined visa management and processing.',
            technologies: [
                { name: 'React.js', icon: <SiReact /> },
                { name: 'Node.js', icon: <SiNodedotjs /> },
                { name: 'Stripe', icon: <SiStripe /> },
                { name: 'AWS S3', icon: <FiShield /> }
            ],
            features: [
                'User & Admin Dashboards',
                'Visa Tracking System',
                'Stripe Payment Integration',
                'AWS S3 Document Storage',
                'Global User Support'
            ],
            category: 'E-Government',
            status: 'Completed'
        },
        {
            title: 'AID Ignite (AI Course Generator)',
            description: 'AI-powered Course Management System with multiple user roles including Super Admin, University Admin, Teacher, and Student functionalities.',
            technologies: [
                { name: 'React.js', icon: <SiReact /> },
                { name: 'Node.js', icon: <SiNodedotjs /> },
                { name: 'MongoDB', icon: <SiMongodb /> },
                { name: 'AI Integration', icon: <FiCode /> }
            ],
            features: [
                'AI-Generated Courses',
                'Multi-language Support',
                'Interactive Quizzes',
                'AI Chatbot Integration',
                'Gamified Learning'
            ],
            category: 'EdTech',
            status: 'Completed'
        },
        {
            title: 'Admin Dashboard (E-commerce)',
            description: 'Responsive admin dashboard built with Next.js featuring secure authentication, analytics, and comprehensive system monitoring.',
            technologies: [
                { name: 'Next.js', icon: <SiNextdotjs /> },
                { name: 'NextAuth', icon: <FiShield /> },
                { name: 'Analytics', icon: <FiDatabase /> },
                { name: 'UI/UX', icon: <FiCode /> }
            ],
            features: [
                'NextAuth Authentication',
                'Real-time Analytics',
                'Data Visualization',
                'System Monitoring',
                'Responsive Design'
            ],
            category: 'Dashboard',
            status: 'Completed'
        }
    ]

    return (
        <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-800">
            <div className="container-max">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text animate-fade-in">
                    Featured Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="glass-morphism rounded-2xl p-6 card-hover animate-fade-in"
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            {/* Project Header */}
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <div className="flex items-center space-x-2 mb-2">
                                        <span className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-xs font-medium">
                                            {project.category}
                                        </span>
                                        <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-xs font-medium">
                                            {project.status}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold gradient-text mb-2">
                                        {project.title}
                                    </h3>
                                </div>
                                <div className="flex space-x-2">
                                    <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                        <FiGithub className="w-5 h-5" />
                                    </button>
                                    <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                        <FiExternalLink className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>

                            {/* Project Description */}
                            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                                {project.description}
                            </p>

                            {/* Technologies */}
                            <div className="mb-4">
                                <h4 className="text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                                    Technologies
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-center space-x-1 px-2 py-1 bg-white dark:bg-gray-700 rounded-md text-xs"
                                        >
                                            <span className="text-primary-500">{tech.icon}</span>
                                            <span>{tech.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Features */}
                            <div className="mb-6">
                                <h4 className="text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                                    Key Features
                                </h4>
                                <ul className="space-y-1">
                                    {project.features.slice(0, 3).map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-xs text-gray-600 dark:text-gray-300">
                                            <span className="text-primary-500 mr-2">•</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex space-x-2">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    icon={<FiGithub />}
                                    className="flex-1"
                                >
                                    Code
                                </Button>
                                <Button
                                    variant="primary"
                                    size="sm"
                                    icon={<FiExternalLink />}
                                    className="flex-1"
                                >
                                    Live Demo
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View More Button */}
                <div className="text-center mt-12">
                    <Button
                        href="#"
                        variant="outline"
                        size="lg"
                        className="animate-pulse-slow"
                    >
                        View All Projects
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection