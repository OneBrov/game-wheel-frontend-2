import React from 'react'

import styles from './Dropdown.module.scss'

interface DropdownProps {
    optionsList: {id: number, value: string}[];
    isOptionsOpen: boolean;
    selectedOptions: number[];
    setSelectedOptions: (options: number[])=>void;
}

export const Dropdown:React.FC<DropdownProps> = ({
    optionsList,
    isOptionsOpen,
    selectedOptions,
    setSelectedOptions,
}) => {


  const handleOptionClick = (optionId: number) => {
    if (selectedOptions.includes(optionId)) {
        setSelectedOptions(selectedOptions.filter(val => val !== optionId));
    } else {
        setSelectedOptions([...selectedOptions, optionId]);
    }
  }

  return (
    <ul
        className={`${styles.options__container}`}
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
                className={selectedOptions.includes(option.id) ? styles.option_selected : styles.option_default}
    	        role="option"
    	        aria-selected={selectedOptions.includes(option.id)}
    	        tabIndex={0}
    	        // Upon clicking, set as selected option then close the dropdown
    	        onClick={() => handleOptionClick(option.id)}
    	>
    	    {option.value}
    	</li>
        ))}
    </ul>

  )
}
