export const cpuUsagePieChartOptions = {
    chart: {
        offsetY: 12,
        type: "donut"
    },
    legend: { show: false },
    dataLabels: { enabled: false },
    tooltip: { enabled: false },
    fill: { colors: ["#4a81d4", "#222222"]},
    states: {
        hover: {
            filter: {
                type: "none",
            }
        },
        active: {
            filter: {
                type: "none",
            }
        }
    },
    stroke: { width: 0 },
    plotOptions: {
        pie: {
            expandOnClick: false,
            donut: {
                size: "80%",
                labels: {
                    show: true,
                    name: { show: false },
                    total: {
                        show: true,
                        showAlways: true,
                        formatter: function (w:any) {
                            let totals = w.globals.seriesTotals;
                            return (totals[0] + "%");
                        }
                    }
                }
            }
        }
    }
}

export default cpuUsagePieChartOptions;