import React from 'react'
import { Link } from 'react-router-dom';

import styles from './ThemeLink.module.scss'

interface ThemeLinkProps {
    className?: string;
    children: React.ReactNode;
    to: string;
    isExternal?: boolean;
}

export const ThemeLink: React.FC<ThemeLinkProps> = ({
    className,
    children,
    to,
    isExternal = false
}) => {

  
  
  if (isExternal) {
    return (
      <a 
        className={`${styles.link} ${className}`} 
        href={to}
      >
        {children}
      </a>
    )
  }
  return (
    <Link 
      className={`${styles.link} ${className}`} 
      to={to}
    >
        {children}
    </Link>
  )
}
