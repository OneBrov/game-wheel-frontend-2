import React, { ReactElement } from 'react'

import styles from './HeaderIndicator.module.scss'

interface HeaderIndicatorProps {
    selectedTab: number;
    countTabs: number;
}

export const HeaderIndicator:React.FC<HeaderIndicatorProps> = ({
    selectedTab,
    countTabs,
}) => {

  const [leftOffset, setLeftOffset] = React.useState(0);

  React.useEffect(() => {
    const offset = 100/countTabs * selectedTab;
    setLeftOffset(offset)
  }, [countTabs, selectedTab])

  return (
    <span  
        className={styles.indicator} 
        style={{
            width: 100 / countTabs + '%',
            left: leftOffset + '%'
        }}
    />
  )
}
