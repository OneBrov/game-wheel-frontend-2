import React from 'react'
import { Select } from '..';

import styles from './Dropdown.module.scss'

interface DropdownProps {
    optionsList: {id: number, value: string}[];
    isOptionsOpen: boolean;
    selectedOptions: Select[];
    onItemClick: (items: Select[]) => void;
    className?: string;
}

export const Dropdown:React.FC<DropdownProps> = ({
    optionsList,
    isOptionsOpen,
    selectedOptions,
    onItemClick,
    className
}) => {

  const handleOptionClick = (optionId: number, optionValue: string) => {
    if (selectedOptions.find(val => val.id === optionId)) {
        onItemClick(selectedOptions.filter(val => val.id !== optionId));
    } else {
        onItemClick([...selectedOptions, {id: optionId, value: optionValue}]);
    }
  }

  return (
    <ul
        className={`${styles.options__container} ${className ? className : ''}`}
        role="listbox"
        aria-multiselectable={true}
        tabIndex={-1}
        hidden={!isOptionsOpen}
    >
        {optionsList.length === 0 && 
           <span id={'no options'} className={styles.option_default}>
               Нет доступных вариантов
           </span>
        }
        {optionsList.map((option) => (
            <li
                key={option.id}
                id={option.value}
                className={selectedOptions.find(val => val.id === option.id) ? styles.option_selected : styles.option_default}
    	        role="option"
    	        aria-selected={selectedOptions.find(val => val.id === option.id) !== undefined}
    	        tabIndex={0}
    	        onClick={() => handleOptionClick(option.id, option.value)}
    	>
    	    {option.value}
    	</li>
        ))}
    </ul>

  )
}
