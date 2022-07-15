import React from 'react'

import styles from './Input.module.scss'

interface InputProps {
  label?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder?: string;
  className?: string;
}

export const Input:React.FC<InputProps> = ({
  label,
  onChange,
  value,
  placeholder,
  className
}) => {

  const [isFocused, setIsFocused] = React.useState(false);

  function onInputFocus(e: React.FocusEvent) {
    setIsFocused(true)
  }

  function onInputBlur(e: React.FocusEvent) {
    setIsFocused(value?.length > 0 ? true : false);
  }

  return (
    <label className={`${styles.container} ${className ? className : ''}`}>
      <input 
        type={'text'}
        className={`${styles.input}`} 
        onChange={onChange} 
        onFocus={onInputFocus}
        onBlur={onInputBlur}
        value={value} 
        placeholder={placeholder}
      />
      
      <span 
        className={`
          ${styles.label} 
          ${isFocused ? styles.label_focused : styles.label_default}
        `}
      >
        {label}
      </span>
    </label>
  )
}
