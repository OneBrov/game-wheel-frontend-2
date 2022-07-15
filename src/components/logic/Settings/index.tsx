import React from 'react'
import { Input } from '../../ui/Input'

import styles from './Settings.module.scss'

export const Settings = () => {
 
  const [name, setName] = React.useState<string>('');

  function changeName(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  } 
  

  return (
    <form className={styles.settings}>
        <h2>Настройки</h2>
        <Input label='Название игры' placeholder='Fallout: New Vegas'  value={name} onChange={changeName}/>
    </form>
  )
}
