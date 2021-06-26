import React from 'react'
import styles from './styles.module.css'

import PieChart from './components/Charts/PieChart';
import DonutChart from './components/Charts/DonutChart';

export const ExampleComponent = ({ text }) => {
  const options = {
    title: "donut chart",
    legend:"inline",
    width: 350,
    height: 350,
    data: [
      {
        label: "water",
        val: 5,
        color: "#57d9ff"
      },
      {
        label: "mobile",
        val: 3,
        color: "#f16e23"
      },
      {
        label: "bulb",
        val: 1,
        color: "#ff00bf"
      },
      {
        label: "wire",
        val: 2,
        color: "#937e88"
      }
    ]
  }
  return <div className={styles.test}>
    <h1>Example1</h1>
    Example Component: {text}
    <PieChart></PieChart>
    <DonutChart options={options}></DonutChart>
  </div>
}
