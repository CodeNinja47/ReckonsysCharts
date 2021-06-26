import React , {useState, useEffect} from 'react';

import "./table.css";

import data from "./data.json";

function Table() {
  const [userList, setUserList] = useState([]);
    
  useEffect(() => {
      fetch("http://www.json-generator.com/api/json/get/bVQLAIVtGq?indent=2")
          .then(response => response.json())
          .then(result => setUserList(result))
          .catch(error => console.log(error));
        }, [])

  return <div>
      <table className="center">
        <tr className="Headers">
          <th>property</th>
          <th>value</th>
          <th>color</th>
        </tr>
        {
          userList && userList.length> 0 ?
          userList.map(usr =>
          <tr className="Rows">
              <td>{usr.property}</td>
              <td>{usr.value}</td>
              <td>{usr.color}</td>
          </tr>
          )
          :'Loading'
        }
      </table>
  </div>

}

export default Table;