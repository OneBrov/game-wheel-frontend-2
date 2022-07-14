import React, { useMemo } from 'react'
import styles from './Button.module.scss'

interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    type?: 'filled' | 'default';
    onClick?: (e: React.MouseEvent)=>void
}

export const Button:React.FC<ButtonProps> = React.memo(({
    type = 'default',
    children,
    className, 
    onClick
}) => {
  return (
    <button 
        className={`${styles.button} ${className}  ${type === 'default' ? styles.button_default : styles.button_filled}`}
        onClick={onClick}
    >
        {children}
    </button>
  )
})

