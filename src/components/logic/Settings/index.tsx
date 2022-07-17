import React from 'react'
import { CheckBox } from '../../ui/CheckBox';
import { Input } from '../../ui/Input'
import { TwoEndSlider } from '../../ui/TwoEndSlider';

import styles from './Settings.module.scss'

export const Settings = () => {
 
  const [name, setName] = React.useState<string>('');
  const [isFree, setIsFree] = React.useState<boolean>(false);

  const [priceRange, setPriceRange] = React.useState<[number, number]>([0, 100]);

  React.useEffect(()=>{console.log(priceRange)},[priceRange])

  const changeName = React.useCallback(function (e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }, [])

  const changeIsFree = React.useCallback(function(e: React.ChangeEvent<HTMLInputElement>) {
    setIsFree(prev => !prev)
  }, [])
  
  return (
    <form className={styles.settings}>
        <h2>Настройки</h2>
        <Input label='Название игры' placeholder='Fallout: New Vegas'  value={name} onChange={changeName}/>
        <CheckBox label='Искать бесплатные игры' onChange={changeIsFree} value={isFree}/>
        <TwoEndSlider label='Metascore' range={priceRange} min={0} max={100} setRange={setPriceRange} minDistance={10}/>
    </form>
  )
}
