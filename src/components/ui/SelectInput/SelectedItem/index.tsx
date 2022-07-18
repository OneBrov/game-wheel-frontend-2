import React, { ReactNode } from 'react'

import styles from './SelectedItem.module.scss'

interface ItemProps {
  children: ReactNode
}

export const SelectedItem:React.FC<ItemProps> = ({
  children
}) => {
  return (
    <span className={styles.item}>
      {children}
    </span>
  )
}
