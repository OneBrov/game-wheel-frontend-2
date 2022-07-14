import React from 'react'
import { Link } from 'react-router-dom';

import styles from './ThemeLink.module.scss'

interface ThemeLinkProps {
    className?: string;
    children: React.ReactNode;
    to: string;
}

export const ThemeLink: React.FC<ThemeLinkProps> = ({
    className,
    children,
    to
}) => {
  return (
    <Link className={`${styles.link} ${className}`} to={to}>
        {children}
    </Link>
  )
}
