import React from 'react';


class ChartType extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: 'Pie Chart',
        inLineLegend: false,
        showLegendSeperately: false,
    };
  
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]:value
        });
    }
  
    handleSubmit(event) {
      alert('Chart Type ' + this.state.value);
    //   event.preventDefault();
    }
  
    render() {
      return (
          <div className="styles.extras">
            <form onSubmit={this.handleSubmit}>
                <label>
                Select the chart type:
                <br />
                <select value={this.state.value} onChange={this.handleChange}>
                <option value="Pie Chart">Pie Chart</option>
                <option value="Donut Chart">Donut Chart</option>
                <option value="Half Donut Chart">Half Donut Chart</option>
                </select>
                </label>
                <input type="submit" value="Submit" />
                <br />
                <label>
                <input
                name="inLineLegend"
                type="checkbox"
                checked={this.state.inLineLegend}
                onChange={this.handleInputChange} />
                In Line Legend:
                </label>
                <br />
                <label>
                <input
                name="showLegendSeperately"
                type="checkbox"
                checked={this.state.showLegendSeperately}
                onChange={this.handleInputChange} />
                Show Legend Seperately
                </label>
            </form>
          </div>
      );
    }
  }
  
export default ChartType;