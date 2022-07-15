import React from 'react'
import { Button } from '../Button';
import { HeaderIndicator } from './HeaderIndicator';
import styles from './Tabs.module.scss'

interface TabsProps {
  children: React.ReactElement[];
}

export const Tabs:React.FC<TabsProps> = ({
  children
}) => {

  const [selectedTab, setSelectedTab] = React.useState(0);

  const headers = React.useMemo(()=>{
    return children.map(c => c.props.name);
  }, [children]);

  function onHeaderClick(index: number) {
    setSelectedTab(index);
  }

  return (
    <article className={styles.tabs}>
      <section className={styles.tabs__headers}>
        {headers.map((header, index) => 
          <Button 
            key={header} 
            className={`
              ${styles.header__button} 
              ${index === selectedTab && styles.button_selected}
            `}
            onClick={() => onHeaderClick(index)}
          >
            {header}
          </Button>  
        )}
        <HeaderIndicator 
          selectedTab={selectedTab} 
          countTabs={children.length} 
        />
      </section>
      {children.map((tab, index) => 
        <section 
          key={tab.props.name}
          className={styles.tabs__body} 
          hidden={index !== selectedTab}
        >
          {tab}
        </section>
      )}
      
    </article>
  )
}
