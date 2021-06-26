import React from "react";
import Legend from "./Legend";

class SkeletonDonutChart {

    constructor(options, ctx, canvas) {
        this.options = options;
        this.canvas = canvas;
        this.ctx = ctx;
    }

    drawPieSlice(ctx, centerX, centerY, radius, startAngle, endAngle, color) {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.closePath();
        ctx.fill();
    }

    draw() {
        var total_value = 0;
        total_value = this.options.data.reduce((n, { val }) => n + val, 0)

        if (this.options && this.options.chart.type === "donut") {
            var start_angle = 0;
            var circle = Math.PI;
        } else {
            var start_angle = Math.PI;
            var circle = Math.PI / 2;
        }
        this.options.data.forEach(obj => {
            var slice_angle = 2 * circle * obj.val / total_value;

            this.drawPieSlice(
                this.ctx,
                this.canvas.width / 2,
                this.canvas.height / 2,
                Math.min(this.canvas.width / 2, this.canvas.height / 2),
                start_angle,
                start_angle + slice_angle,
                obj.color
            );

            if (this.options.legend !== "separate") {
                var pieRadius = Math.min(this.canvas.width / 2, this.canvas.height / 2);
                var labelX = this.canvas.width / 2 + (pieRadius / 2) * Math.cos(start_angle + slice_angle / 2);
                var labelY = this.canvas.height / 2 + (pieRadius / 2) * Math.sin(start_angle + slice_angle / 2);

                var offset = (pieRadius * 0.5) / 2;
                labelX = this.canvas.width / 2 + (offset + pieRadius / 2) * Math.cos(start_angle + slice_angle / 2);
                labelY = this.canvas.height / 2 + (offset + pieRadius / 2) * Math.sin(start_angle + slice_angle / 2);


                var labelText = Math.round(100 * obj.val / total_value);
                this.ctx.fillStyle = "white";
                this.ctx.font = "17px Arial";
                this.ctx.fillText(labelText + "%", labelX, labelY);
            }

            start_angle += slice_angle;

        });

        this.drawPieSlice(
            this.ctx,
            this.canvas.width / 2,
            this.canvas.height / 2,
            0.4 * Math.min(this.canvas.width / 2, this.canvas.height / 2),
            0,
            2 * Math.PI,
            "#fff"
        );


    }

}

class DonutChart extends React.Component {
    constructor(props) {
        super(props);
        this.canvas = React.createRef()

    }

    componentDidMount(){
        this.build();
    }
    componentDidUpdate(){
        this.build();
    }

    build() {
        const ctx = this.canvas.current.getContext('2d')
        this.canvas.current.width = this.props.options.width;
        this.canvas.current.height = this.props.options.height;
        const skeletonDonutChart = new SkeletonDonutChart(this.props.options, ctx, this.canvas.current);
        skeletonDonutChart.draw();
    }


    render() {
        return (
            <div>
                <canvas ref={this.canvas} />
                {this.props && this.props.options.data.length && this.props.options.legend == "separate" && (<Legend data={this.props.options.data}> </Legend>)}
            </div>
        );
    }
}

export default DonutChart;