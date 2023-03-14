export const encryptionsChartOptions = {
    chart: {
        offsetY: 10,
        type: "line"
    },
    stroke: {
        width: [2, 3],
    },
    colors: ['#4a81d4'],
    xaxis: {
        type: "datetime",
        labels: {
            style: {
                fontSize: '0.8rem'
            }
        }
    },
    legend: {
        offsetY: 7,
    },
    grid: {
        padding: {
            bottom: 20,
        },
    },
    yaxis: [
        {
            labels: {
                style: {
                    fontSize: '0.8rem'
                }
            },
            title: {
                style: {
                    fontSize: '0.8rem'
                },
                text: "Encryptions per Second",
            },
        },
    ],
}

export default encryptionsChartOptions;