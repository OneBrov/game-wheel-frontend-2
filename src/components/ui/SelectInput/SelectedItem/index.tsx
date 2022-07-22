import React, { ReactNode } from 'react'
import { Select } from '..';
import { Button } from '../../Button'
import { Icon } from '../../Icon';

import styles from './SelectedItem.module.scss'

interface ItemProps {
  item: Select;
  onDeleteClick: (item: Select) => void;
}

export const SelectedItem:React.FC<ItemProps> = React.memo(({
  item, 
  onDeleteClick
}) => {

  const handleDelete = React.useCallback(function (e: React.MouseEvent) {
    onDeleteClick(item);
  }, [item, onDeleteClick])

  return (
    <span className={styles.item}>
      {item.value}
      <Button className={styles.button_delete} onClick={handleDelete}>
        <Icon className={styles.button__icon} name={'x'} size={'16px'} color='#ab0ba1'/>
      </Button>
    </span>
  )
})
