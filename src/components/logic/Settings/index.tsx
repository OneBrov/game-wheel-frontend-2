import React from 'react'
import { CheckBox } from '../../ui/CheckBox';
import { Input } from '../../ui/Input'
import { Select, SelectInput } from '../../ui/SelectInput';
import { Tooltip } from '../../ui/Tooltip';
import { TwoEndSlider } from '../../ui/TwoEndSlider';

import styles from './Settings.module.scss'

const mockGenres = [
  {id: 1, value: 'Action'}, 
  {id:2, value: 'RPG'}, 
  {id: 3, value: 'Casual'},
  {id: 4, value: '4'},
  {id: 5, value: '5'},
  {id: 6, value: '6'},
  {id: 7, value: '7'},
]

export const Settings = () => {
 
  const [name, setName] = React.useState<string>('');
  const [isFree, setIsFree] = React.useState<boolean>(false);

  const [priceRange, setPriceRange] = React.useState<[number, number]>([0, 100]);
  const [genres, setGenres] = React.useState<Select[]>([]);

  React.useEffect(()=>{console.log(priceRange)},[priceRange]);
  React.useEffect(()=>{console.log(genres)},[genres])

  const changeName = React.useCallback(function (e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }, []);

  const changeIsFree = React.useCallback(function(e: React.ChangeEvent<HTMLInputElement>) {
    setIsFree(prev => !prev)
  }, []);
  
  return (
    <form className={styles.settings}>
        <h2>Настройки</h2>
        <Input label='Название игры' placeholder='Fallout: New Vegas'  value={name} onChange={changeName}/>
        <CheckBox label='Искать бесплатные игры' onChange={changeIsFree} value={isFree}/>
        <TwoEndSlider label='Metascore' range={priceRange} min={0} max={100} setRange={setPriceRange} minDistance={10}/>

        <SelectInput selected={genres} setSelected={setGenres} label='Жанры' variants={mockGenres}/>

        <Tooltip tip='tip HEre'>
          <div>aboba</div>
        </Tooltip>
    </form>
  )
}
