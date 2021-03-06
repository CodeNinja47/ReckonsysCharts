import React, { useRef, useEffect, useState, useMemo } from 'react';

import Legend from "./Legend";
import styles from './chart.module.css'

export default function HalfDonutChart({
    options,
    inLineLegend,
    showLegendSeperately
}) {

    const {
        colors,
        data,
        width,
        height
    } = useMemo(() => {
        const tempData = {};
        const tempColors = [];
        options.data.forEach(item => {
            tempData[item.label] = item.val;
            tempColors.push(item.color);
        });
        return {
            data: tempData,
            colors: tempColors,
            width: options && options.width && options.width > 0 ? options.width : 300,
            height: options && options.height && options.height > 0 ? options.height : 200,
        }
    }, [options]);



    const canvasRef = useRef();
    const legendRef = useRef();
    const [canvasContext, setCanvasContext] = useState();

    function drawPieSlice(ctx, centerX, centerY, radius, startAngle, endAngle, color) {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.closePath();
        ctx.fill();
    }

    function drawPieChart() {
        let total_value = 0;
        let color_index = 0;
        for (let categ in data) {
            let val = data[categ];
            total_value += val;
        }

        let start_angle = Math.PI;
        for (let categ in data) {
            let val = data[categ];
            let slice_angle = 2 * (Math.PI / 2) * val / total_value;

            drawPieSlice(
                canvasContext,
                canvasRef.current.width / 2,
                canvasRef.current.height / 2,
                window.Math.min(canvasRef.current.width / 2, canvasRef.current.height / 2),
                start_angle,
                start_angle + slice_angle,
                colors[color_index % colors.length]
            );

            start_angle += slice_angle;
            color_index++;
        }

        const isDonutChart = true;
        const donutSize = 0.4;

        //drawing a white circle over the chart
        //to create the doughnut chart
        if (isDonutChart) {
            drawPieSlice(
                canvasContext,
                canvasRef.current.width / 2,
                canvasRef.current.height / 2,
                donutSize * window.Math.min(canvasRef.current.width / 2, canvasRef.current.height/ 2),
                0,
                2 * window.Math.PI,
                "#ffffff"
            );
        }

        if (inLineLegend) {

            start_angle = 3.141592653589793;
            for (let categ in data) {
                let val = data[categ];
                let slice_angle = 2 * (window.Math.PI / 2) * val / total_value;
                var pieRadius = Math.min(canvasRef.current.width / 2, canvasRef.current.height / 2);
                var labelX = canvasRef.current.width / 2 + (pieRadius / 2) * Math.cos(start_angle + slice_angle / 2);
                var labelY = canvasRef.current.height / 2 + (pieRadius / 2) * Math.sin(start_angle + slice_angle / 2);

                var offset = (pieRadius * 0.5) / 2;
                labelX = canvasRef.current.width / 2 + (offset + pieRadius / 2) * Math.cos(start_angle + slice_angle / 2);
                labelY = canvasRef.current.height / 2 + (offset + pieRadius / 2) * Math.sin(start_angle + slice_angle / 2);


                var labelText = Math.round(100 * val / total_value);
                canvasContext.fillStyle = "white";
                canvasContext.font = "17px Arial";
                canvasContext.fillText(labelText + "%", labelX, labelY);
                start_angle += slice_angle;
            }
        }

        // const legend = true;

        // if (legend) {
        //     let color_index = 0;
        //     let legendHTML = "";
        //     for (let categ in data) {
        //         legendHTML += "<div><span style='display:inline-block;width:20px;background-color:" + colors[color_index++] + ";'>&nbsp;</span> " + categ + "</div>";
        //     }
        //     legendRef.current.innerHTML = legendHTML;
        // }
    }

    useEffect(() => {
        if (options && canvasContext) {
            drawPieChart();
        }
    }, [options, canvasContext, inLineLegend]);

    useEffect(() => {
        if (canvasRef.current) {
            canvasRef.current.width = width;
            canvasRef.current.height = height;
            setCanvasContext(canvasRef.current.getContext("2d"));
        }
    }, []);

    const onDownload = () => {
        const link = document.createElement('a');
        link.download = 'filename.png';
        link.href = canvasRef.current.toDataURL();
        link.click();
    };

    return <div className={styles.chart_container}>
        <div>
            <button onClick={() => onDownload()}>?????? Download</button>
        </div>
        <canvas ref={canvasRef}></canvas>
        <Legend data={options.data} visibility={showLegendSeperately} />
    </div>;
}