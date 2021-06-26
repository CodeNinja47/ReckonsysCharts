import React from 'react';
import './App.css';


const Legend = (props) => {
    const data = props.data;
    return (
        <div id="legend">
            {
                data && data.length && (data.map(obj => (
                    <div id="legend">
                        <li key={obj.val} >
                            <span style={{ background: `${obj.color}` }}></span>
                            {obj.label} ({obj.val})
                        </li>

                    </div>

                )))
            }
        </div>

    );
}

export default Legend;