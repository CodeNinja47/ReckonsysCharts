import React, { useState } from 'react'
import styles from './styles.module.css'

import PieChart from './components/Charts/PieChart'

import Table from './components/Table/table'
import ChartType from './components/DropDown/dropdown'

import DonutChart from './components/Charts/DonutChart'
import HalfDonutChart from './components/HalfDonutChart/HalfDonutChart'
import "./main.css"

const chartTypes = [
  { label: 'Pie Chart', value: 1 },
  { label: 'Donut Chart', value: 2 },
  { label: 'Half Donut Chart', value: 3 }
]

export const ReckonsysCharts = ({ options }) => {
  const [form, setForm] = useState({
    chartType: 3,
    inLineLegend: false,
    showLegendSeperately: false
  })

  const onChange = (field, value) => {
    setForm((prevState) => ({
      ...prevState,
      [field]: value
    }))
  }

  return (
    <div className={styles.test}>
      <div className={styles.flex}>
        <div className={styles.float1}>
          <Table data={options.data}/>
        </div>
        <div className={styles.float2}>
          <ChartType value={form} onChange={onChange} list={chartTypes} />
        </div>
      </div>
      {form.chartType == 1 && <PieChart></PieChart>}
      {form.chartType == 2 && <DonutChart options={options} />}
      {form.chartType == 3 && (
        <HalfDonutChart
          showLegendSeperately={form.showLegendSeperately}
          inLineLegend={form.inLineLegend}
          options={options}
        />
      )}
    </div>
  )
}
