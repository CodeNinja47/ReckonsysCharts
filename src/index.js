import React from 'react'
import styles from './styles.module.css'

import PieChart from './components/Charts/PieChart'

export const ExampleComponent = ({ text }) => {
  var options = {
    data: [
      { label: 'Food', value: 90 },
      { label: 'Party', value: 150 },
      { label: 'Rent', value: 80 },
      { label: 'Chocolates', value: 120 }
    ],
    colors: ['#39CCCC', '#3D9970', '#001F3F', '#85144B'],
    legend: 'inline'
  }
  return (
    <div className={styles.test}>
      <PieChart options={options}></PieChart>
    </div>
  )
}
