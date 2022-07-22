import React from 'react'

import styles from './Tooltip.module.scss'


interface TooltipProps {
  tip: string;
  children: any;
  delay?: number;
  position?: 'top' | 'right' | 'left' | 'bottom'
}

export const Tooltip:React.FC<TooltipProps> = React.memo(({
  children,
  tip,
  delay,
  position
}) => {
  let timeout: ReturnType<typeof setTimeout> ;
  const [active, setActive] = React.useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, delay || 100);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
      <div
      className={styles.tooltip__wrapper}
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {children}
      {active && (
        <div className={`${styles.tooltip__tip} ${position || styles[position || 'top']}`}>
          {tip}
        </div>
      )}
    </div>
  )
})
