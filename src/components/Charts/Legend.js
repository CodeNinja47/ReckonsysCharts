import React from 'react';
import styles from './legend.module.css'


const Legend = (props) => {
    const data = props.data;
    return (
        <div id="legend">
            {
                data && data.length && (data.map(obj => (
                    <div id="legend">
                        <li className={styles.legend_container} key={obj.val} >
                            <span className={styles.legend_container_color} style={{ background: `${obj.color}` }}></span>
                            {obj.label} ({obj.val})
                        </li>

                    </div>

                )))
            }
        </div>

    );
}

export default Legend;