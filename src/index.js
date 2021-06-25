import React from 'react'
import styles from './styles.module.css'

import PieChart from './components/Charts/PieChart';

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>
    <h1>Example1</h1>
    Example Component: {text}
    <PieChart></PieChart>
  </div>
}
