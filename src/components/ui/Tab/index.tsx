import React from 'react'
import styles from './Tab.module.scss'

interface TabProps {
    name: string;
    children: React.ReactNode
}

export const Tab:React.FC<TabProps> = ({
    name,
    children
}) => {
  return (
    <section className={styles.tab}>
        {children}
    </section>
  )
}
