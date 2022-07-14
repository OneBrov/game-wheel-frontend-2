import React from 'react'
import { Button } from '../../../ui/Button'
import { Icon } from '../../../ui/Icon'
import { ThemeLink } from '../../../ui/ThemeLink'
import styles from './Navbar.module.scss'

interface Link {
  text: string;
  to: string;
  icon: string;
}

const links: Link[] = [
  { to: '/wheel', text: 'Колесо', icon: 'wheel' },
  { to: '/history', text: 'История', icon: 'history' },
  { to: '/library', text: 'Библиотека игр', icon: 'library' },
  { to: '/auth', text: 'Авторизация', icon: 'person' },
]

export const Navbar = () => {
  return (
    <aside className={styles.nav__background}>
      <nav className={styles.nav__list}>
      {links.map(l => 
        <Button key={l.to}>
          <ThemeLink className={styles.nav__item} to={l.to}>
            <Icon name={l.icon} />
            {l.text}
          </ThemeLink>
        </Button>
      )}
      </nav>
    </aside>
  )
}
