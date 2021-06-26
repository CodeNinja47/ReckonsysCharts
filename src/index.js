import React, { useState } from 'react'
import styles from './styles.module.css'

import PieChart from './components/Charts/PieChart';
import DonutChart from './components/Charts/DonutChart';
import HalfDonutChart from './components/HalfDonutChart/HalfDonutChart';

const options = {
  title: "donut chart",
  legend: "inline",
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
};

export const ExampleComponent = ({ text }) => {

  const [option, setOption] = useState(options);

  const onClick = () => {
    const temp = JSON.parse(JSON.stringify(options));
    temp.data[0].val = 30;
    setOption(temp);
  }

  return <div className={styles.test}>
    <button onClick={onClick}>click to change data</button>
    <PieChart></PieChart>
    <HalfDonutChart
      options={option}
    />
    <DonutChart options={option}></DonutChart>
  </div>
}
