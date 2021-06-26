import React from 'react'
import styles from './styles.module.css'

import PieChart from './components/Charts/PieChart';
import DonutChart from './components/Charts/DonutChart';

export const ExampleComponent = ({options }) => {
  
  return <div className={styles.test}>
    <h1>Charts</h1>
    <PieChart></PieChart>
    <DonutChart options={options}></DonutChart>
  </div>
}
