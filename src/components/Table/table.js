import React from 'react';


function Table(props) {
  console.log(props);
  return <div>
    <table className="center">
      <thead>
        <tr className="Headers">
          <th>Property</th>
          <th>Value</th>
          <th>Color</th>
        </tr>
      </thead>
      <tbody>
        {
          props && props.data.length ?
          props.data.map(obj =>
              <tr className="Rows" key={obj.val}>
                <td>{obj.label}</td>
                <td>{obj.val}</td>
                <td>{obj.color}</td>
              </tr>
            )
            : 'Loading...'
        }
      </tbody>
    </table>
  </div>

}

export default Table;