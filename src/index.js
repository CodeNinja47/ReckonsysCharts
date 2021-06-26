import React from 'react'
import styles from './styles.module.css'

import PieChart from './components/Charts/PieChart';

import Table from './components/Table/table';
import ChartType from './components/DropDown/dropdown';

import DonutChart from './components/Charts/DonutChart';
import HalfDonutChart from './components/HalfDonutChart/HalfDonutChart';

export const ExampleComponent = ({ options }) => {

  const [chartOption, setchartOption] = useState(options);

  const onClick = () => {
    const temp = JSON.parse(JSON.stringify(options));
    temp.data[0].val = 0;
    console.log(temp)
    setchartOption(temp);
  }

    return <div className={styles.test}>
    <div className={styles.flex}>
      <div className={styles.float1}>
        <Table />
      </div>
      <div className={styles.float2}>
        <ChartType />
      </div>
    </div>
    <PieChart></PieChart>
    <button onClick={onClick}>click to change data</button>

    <HalfDonutChart
      options={options}
    />
    <DonutChart
      options={options}
    />
  </div>
}
