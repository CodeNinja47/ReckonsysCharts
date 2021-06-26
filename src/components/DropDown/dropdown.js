import React from 'react';


const ChartType = ({
  value,
  onChange,
  list
}) => {
  return (
    <div className="styles.extras">
      <label>
        Select the chart type:
        <br />
        <select value={value.chartType} onChange={event => onChange('chartType', event.target.value)}>
          {list.map((item, index) => <option key={index} value={item.value}>{item.label}</option>)}
        </select>
      </label>
      <br />
      <label>
        <input
          name="inLineLegend"
          type="checkbox"
          checked={value.inLineLegend}
          onChange={() => onChange('inLineLegend', !value.inLineLegend)} />
        In Line Legend:
      </label>
      <br />
      <label>
        <input
          name="showLegendSeperately"
          type="checkbox"
          checked={value.showLegendSeperately}
          onChange={() => onChange('showLegendSeperately', !value.showLegendSeperately)} />
        Show Legend Seperately
      </label>
    </div>
  );
}

export default ChartType;