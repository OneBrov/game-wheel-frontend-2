import React from 'react'
import { Icon } from '../Icon';

import styles from './CheckBox.module.scss'

interface CheckBoxProps {
  label: string;
  value: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CheckBox:React.FC<CheckBoxProps> = React.memo(({
  label,
  value,
  onChange
}) => {
  return (
    <label className={styles.container}>
      <input type={'checkbox'} onChange={onChange} checked={value} hidden/>
        <span className={styles.button}>
          {value === false ? 
            <Icon name='unchecked' size='32px' />  :
            <Icon name='checked' size='32px' />
          }
        </span>
      <p className={styles.label}>{label}</p>
    </label>
  )
})
