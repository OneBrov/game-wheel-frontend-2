import React from 'react'
import { Input } from '../Input';
import { Dropdown } from './Dropdown';
import { SelectedItem } from './SelectedItem';

import styles from './SelectInput.module.scss'

interface Select {
  id: number;
  value: string;
} 

interface SelectInputProps {
  label: string;
  variants: Select[];
  selected: number[];
  setSelected: (selectedList: number[]) => void;
}

export const SelectInput:React.FC<SelectInputProps> = React.memo(({
  label,
  variants,
  selected,
  setSelected,
}) => {

  const [searchValue, setSearchValue] = React.useState('');
  const [isOptionsOpen, setIsOptionsOpen] = React.useState(false);
  const [options, setOptions] = React.useState<Select[]>([]);

  React.useEffect(()=> {  
    const regex = new RegExp(`(${searchValue})`, 'gi')
    const suitableOptions = variants.filter(variant => variant.value.match(regex));
    setOptions(suitableOptions);
  },[searchValue, variants])
  
  const hideOptions = () => {
    setIsOptionsOpen(false);
  }

  const showOptions = () => {
    setIsOptionsOpen(true);
  }

  const toggleOptions = (e:React.MouseEvent<HTMLInputElement>) => {
    if (!e.ctrlKey) {
      setIsOptionsOpen(!isOptionsOpen);
    }
  };

  function handleChangeSearchValue(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value);
  }

  // function handleChangeSelect(e: React.ChangeEvent<HTMLSelectElement>) {
  //   let selectedList = Array.from(e.target.selectedOptions, option => Number(option.value));
  //   setSelected(selectedList);
  // }

  return (
    <div className={styles.container}>
        <Input 
          value={searchValue} 
          label={label}
          onChange={handleChangeSearchValue}
          aria-expanded={isOptionsOpen}
          onClick={toggleOptions}
          inInputComponents={selected.map(option => <SelectedItem>{option}</SelectedItem>)}
        />
     <Dropdown optionsList={options} isOptionsOpen={isOptionsOpen} selectedOptions={selected} setSelectedOptions={setSelected}/>
    </div>
  )
})
