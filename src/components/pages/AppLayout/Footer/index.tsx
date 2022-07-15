import React from 'react'
import { Link } from 'react-router-dom'
import { ThemeLink } from '../../../ui/ThemeLink'

import styles from './Footer.module.scss'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
        <p><span className={styles.author}>Автор:</span> Данил Евдокимов</p>

        <ThemeLink 
          to='https://github.com/OneBrov/game-wheel-frontend-2'
          isExternal={true}
        >
          Источник кода
        </ThemeLink>

      
    </footer>
  )
}
