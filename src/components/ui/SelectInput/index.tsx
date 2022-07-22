import React from 'react'
import { Input } from '../Input';
import { Dropdown } from './Dropdown';
import { SelectedItem } from './SelectedItem';

import styles from './SelectInput.module.scss'

export interface Select {
  id: number;
  value: string;
} 

interface SelectInputProps {
  label: string;
  variants: Select[];
  selected: Select[];
  setSelected: (selectedList: Select[]) => void;
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

  const selectInputRef = React.useRef<HTMLDivElement>(null);

  //handle hide dropdown effect
  React.useEffect(() => {
    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOptionsOpen]);

  //handle filter values in dropdown when change search word
  React.useEffect(()=> {  
    const regex = new RegExp(`(${searchValue})`, 'gi')
    const suitableOptions = variants.filter(variant => variant.value.match(regex));
    setOptions(suitableOptions);
  },[searchValue, variants]);

  const handleClickOutside = (e: MouseEvent) => {
    if(
      selectInputRef.current && 
      e.target instanceof Element && 
      selectInputRef.current.contains(e.target)
    ) {
      return;
    } 
      setIsOptionsOpen(false)
  }

  const toggleOptions = (e:React.MouseEvent<HTMLInputElement>) => {
    setIsOptionsOpen(true);
  };

  function handleChangeSearchValue(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value);
  }

  function handleDeleteItem(item: Select) {
    setSelected(selected.filter(val => val.id !== item.id));
  }


  function handleDropdownItemClick (items: Select[]) {
    setSearchValue('');
    setSelected(items);
  }

  return (
    <div className={styles.container} ref={selectInputRef}>
      <Input 
        value={searchValue} 
        label={label}
        onChange={handleChangeSearchValue}
        onClick={toggleOptions}
        inInputComponents={selected.map(option => <SelectedItem key={option.id} onDeleteClick={handleDeleteItem} item={option}></SelectedItem>)}
        isInFocus={isOptionsOpen}
      />

      <Dropdown 
        className={styles.dropdown} 
        optionsList={options} 
        isOptionsOpen={isOptionsOpen} 
        selectedOptions={selected} 
        onItemClick={handleDropdownItemClick}
      />
    </div>
  )
})
