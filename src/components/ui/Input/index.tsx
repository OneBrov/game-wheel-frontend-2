import React, { ReactElement, ReactNode } from 'react'

import styles from './Input.module.scss'

interface InputProps {
  label?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder?: string;
  className?: string;
  inInputComponents?: ReactElement[];
  isInFocus?: boolean;
  [key: string]: any;
}

export const Input:React.FC<InputProps> = React.memo(({
  label,
  onChange,
  value,
  placeholder,
  className,
  inInputComponents = [],
  isInFocus = false,
  ...rest
}) => {

  const [isFocused, setIsFocused] = React.useState(false);

  const onInputFocus = React.useCallback(function (e: React.FocusEvent) {
    setIsFocused(true)
  }, [])

  const onInputBlur = React.useCallback(function (e: React.FocusEvent) {
    if (!isInFocus) {
      setIsFocused(value?.length > 0 ? true : false);
    } 
  }, [isInFocus, value?.length])

  const preventDefaultEnter = (e: React.KeyboardEvent) => {
    if (e.code === 'Enter') {
      e.preventDefault();
    }
  }

  return (
    <label htmlFor={label} className={`${styles.container} ${className ? className : ''}`}>
      <div className={`${styles.input__container} ${isFocused ? styles.input__container_focused : styles.input__container_default}`}>
        <span className={styles.inInput__components}>
          {inInputComponents.length > 0 && 
            inInputComponents
          }
        </span>
        <input 
          id={label}
          type={'text'}
          className={`${styles.input}`} 
          onChange={onChange} 
          onFocus={onInputFocus}
          onBlur={onInputBlur}
          onKeyDown={preventDefaultEnter}
          value={value} 
          placeholder={placeholder}
          {...rest}
        />
      </div>
      <span 
        className={`${styles.label} ${isFocused || inInputComponents?.length  ? styles.label_focused : styles.label_default}`}
      >
        {label}
      </span>
    </label>
  )
})
