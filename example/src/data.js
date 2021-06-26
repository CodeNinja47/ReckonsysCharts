// type donut or half-donut
const options = {
    legend: "separate",
    chart: {
        title: "donut chart",
        type: "donut",
    },
    width: 350,
    height: 350,
    data: [
        {
            label: "water",
            val: 5,
            color: "#57d9ff"
        },
        {
            label: "mobile",
            val: 3,
            color: "#f16e23"
        },
        {
            label: "bulb",
            val: 1,
            color: "#ff00bf"
        },
        {
            label: "wire",
            val: 2,
            color: "#937e88"
        }
    ]
}

export default options