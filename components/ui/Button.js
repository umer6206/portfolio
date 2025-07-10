'use client'

import Link from 'next/link'
import { clsx } from 'clsx'

const Button = ({
    children,
    href,
    onClick,
    variant = 'primary',
    size = 'md',
    icon,
    className,
    disabled = false,
    ...props
}) => {
    const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2'

    const variants = {
        primary: 'gradient-bg text-white hover:shadow-lg focus:ring-primary-500',
        outline: 'border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:ring-gray-500',
        ghost: 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:ring-gray-500',
    }

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    }

    const classes = clsx(
        baseClasses,
        variants[variant],
        sizes[size],
        disabled && 'opacity-50 cursor-not-allowed',
        className
    )

    const content = (
        <>
            {icon && <span className="mr-2">{icon}</span>}
            {children}
        </>
    )

    if (href) {
        return (
            <Link href={href} className={classes} {...props}>
                {content}
            </Link>
        )
    }

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={classes}
            {...props}
        >
            {content}
        </button>
    )
}

export default Button
