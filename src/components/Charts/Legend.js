import React from 'react';
import styles from './legend.module.css'


const Legend = (props) => {
    const data = props.data;
    const visibility = props.visibility;
    return (
        <div style={{visibility: visibility ? 'visible' : 'hidden' }}>
            {
                data && data.length && (data.map(obj => (
                    <li className={styles.legend_container} key={obj.val}>
                        <span className={styles.legend_container_color} style={{ background: `${obj.color}` }}></span>
                        {obj.label} ({obj.val})
                    </li>


                )))
            }
        </div>

    );
}

export default Legend;