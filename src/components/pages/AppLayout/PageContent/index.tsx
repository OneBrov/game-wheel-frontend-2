import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from '../Footer'

import styles from './PageContent.module.scss'

export const PageContent = () => {
  return (
    <div className={styles.main}>
        <main className={styles.page}>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}
