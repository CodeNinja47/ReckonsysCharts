import React from 'react'
import styles from './styles.module.css'

import PieChart from './components/Charts/PieChart';
import Table from './components/Table/table';
import ChartType from './components/DropDown/dropdown';


export const ExampleComponent = ({ text }) => {
  return <div className={styles.float}>
    <div className={styles.float1}>
      <Table />
    </div>
    <div className={styles.float2}>
      <ChartType />
    </div>
  </div>
}
