import React, { useState } from 'react'

import { ReckonsysCharts } from 'reckonsys-charts'
import 'reckonsys-charts/dist/index.css'
import options from "./data"

const App = () => {

  const [option, setOption] = useState(options);

  const onClick = () => {
    const temp = JSON.parse(JSON.stringify(options));
    temp.data[0].val = 30;
    setOption(temp);
  }

  return <>
    <button onClick={onClick}>click to change data</button>
    <ReckonsysCharts options={option} />
  </>
}

export default App
