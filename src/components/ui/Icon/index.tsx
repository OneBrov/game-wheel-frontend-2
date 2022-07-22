import React from 'react'
import Icons from '../../../assets/sprites/sprite.svg'
import styles from './Icon.module.scss'

interface IconProps {
    name: string;
    color?: string;
    size?: string;
    className?: string;
}

export const Icon: React.FC<IconProps> = ({
    name, 
    color, 
    size = '48px',
    className
}) => {
  return (
    <svg className={className || styles.icon} fill={color} width={size} height={size} >
       <use href={`${Icons}#${name}`} />
   </svg>
  )
}
