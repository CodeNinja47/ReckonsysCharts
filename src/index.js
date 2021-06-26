import React from 'react'
import styles from './styles.module.css'

import PieChart from './components/Charts/PieChart';
import DonutChart from './components/Charts/DonutChart';
import HalfDonutChart from './components/HalfDonutChart/HalfDonutChart';

export const ReckonsysCharts = ({ options }) => {

  return <div className={styles.test}>
    <PieChart></PieChart>
    <HalfDonutChart
      options={options}
    />
    <DonutChart
      options={options}
    />
  </div>
}
