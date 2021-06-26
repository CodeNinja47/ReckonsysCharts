import React from 'react'

const ChartType = ({ value, onChange, list }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <label style={{ marginBottom: '0.5rem' }}>Select the chart type:</label>
      <select
        value={value.chartType}
        onChange={(event) => onChange('chartType', event.target.value)}
        style={{ width: '25%', marginBottom: '2rem', height: '2rem' }}
      >
        {list.map((item, index) => (
          <option key={index} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      <label style={{ marginBottom: '2rem' }}>
        <input
          name='inLineLegend'
          type='checkbox'
          checked={value.inLineLegend}
          onChange={() => onChange('inLineLegend', !value.inLineLegend)}
        />
        In Line Legend
      </label>
      <label>
        <input
          name='showLegendSeperately'
          type='checkbox'
          checked={value.showLegendSeperately}
          onChange={() =>
            onChange('showLegendSeperately', !value.showLegendSeperately)
          }
        />
        Show Legend Seperately
      </label>
    </div>
  )
}

export default ChartType
