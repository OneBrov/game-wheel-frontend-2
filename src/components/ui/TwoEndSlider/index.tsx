import React from 'react'

import styles from './TwoEndSlider.module.scss'

interface TwoEndSliderProps {
  label: string;
  range: [number, number];
  setRange: (newValue: [number, number]) => void;
  min: number;
  max: number;
  minDistance?: number;
  marks?: number[];
  step?: number;
}

export const TwoEndSlider:React.FC<TwoEndSliderProps> = React.memo(({
  minDistance = 10,
  label,
  min,
  max,
  marks = [0, 50, 100],
  range,
  step = 1,
  setRange,
}) => {

  const leftThumb = React.useRef<HTMLInputElement>(null);
  const rightThumb = React.useRef<HTMLInputElement>(null);

  const [leftMax, setLeftMax] = React.useState<number>(max - minDistance);
  const [rightMin, setRightMin] = React.useState<number>(min + minDistance);
  const [isShowTips, setIsShowTips] = React.useState<boolean>(false);

  
  const calculateOffset = React.useCallback(function(value: number) {
    const range = Math.abs(max - min) - min;
    const offset = (value - min) / range * 100;
    return offset;
  }, [max, min])

  const moveThumb = React.useCallback(function(thumbValue: number, ref: React.RefObject<HTMLInputElement>) {
    if (ref.current) {
      ref.current.style.left =  calculateOffset(thumbValue) + '%';
    }
  }, [calculateOffset])

  const handleChangeLeftValue = React.useCallback(function handleChangeLeftValue(e: React.ChangeEvent<HTMLInputElement>) {
    const value = Number(e.target.value)
    if (value > leftMax) {
      setRange([leftMax, range[1]]);
      moveThumb(leftMax, leftThumb);
      return;
    }

    moveThumb(value, leftThumb);
    setRange([value, range[1]]);
    setRightMin(value + minDistance);

  }, [leftMax, minDistance, moveThumb, range, setRange])

  const handleChangeRightValue = React.useCallback(function handleChangeLeftValue(e: React.ChangeEvent<HTMLInputElement>) {
    const value = Number(e.target.value);
    if ( value <  rightMin) {
      setRange([range[0], rightMin]);
      moveThumb(rightMin, rightThumb);
      return;
    }

    moveThumb(value, rightThumb);
    setRange([range[0], value]);
    setLeftMax(value - minDistance);

  }, [minDistance, moveThumb, range, rightMin, setRange])


  const handleMouseOver = React.useCallback(function(e: React.MouseEvent) {
    setIsShowTips(true);
  }, [])

  const handleMouseOut = React.useCallback(function(e: React.MouseEvent) {
    setIsShowTips(false);
  }, [])

  return (
    <label className={styles.twoEndSlider}>
      <p>{label}</p>

      <div className={styles.range__container}>
        <input 
          aria-label='Minimum value'
          className={`${styles.slider} ${styles.slider_hidden}`} 
          onChange={handleChangeLeftValue} 
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          value={range[0]} 
          type='range'
          min={min} 
          max={max} 
          step={step}

        />
        <input 
          aria-label='Maximum value'
          className={styles.slider} 
          onChange={handleChangeRightValue}  
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          value={range[1]} 
          type='range'
          min={min} 
          max={max}     
          step={step}
        />


        <div className={styles.marks__container}>
          {marks?.map(mark => 
            <React.Fragment key={mark}>
              <span 
                className={styles.mark}
                style={{
                  left: calculateOffset(mark) + '%'
                }}
              />  
              <span  
                className={styles.mark_label}
                style={{
                  left: calculateOffset(mark) + '%'
                }}>
                  {mark}
              </span>
            </React.Fragment>
          )}
        </div>

        <div className={styles.thumb__container}>
          <span ref={leftThumb} className={styles.thumb}>
            <div className={`${styles.tooltip} ${isShowTips ? styles.tooltip_visible : styles.tooltip_hidden}`}> {range[0]} </div>
          </span>
          <span 
            ref={rightThumb} 
            className={styles.thumb}  
            style={{
              left: calculateOffset(100) + '%'
            }} 
          >
            <div className={`${styles.tooltip} ${isShowTips ? styles.tooltip_visible : styles.tooltip_hidden}`}> {range[1]} </div>
          </span>
        </div>
      </div>
    </label>

  )
})
