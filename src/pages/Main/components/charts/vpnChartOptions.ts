import {DateTime} from "luxon";
import getOrdinal from "../../../../helpers/getOrdinal";

export const vpnChartOptions = {
    chart: {
        toolbar: {
            show: false,
        },
        offsetX: -6
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: [2, 3],
    },
    colors: ['#4a81d4', '#49d48f'],
    legend: {
        show: false,
    },
    xaxis: {
        type: "datetime",
        labels: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        }
    },
    yaxis: [
        {
            labels: {
                show: false,
            }
        },
    ],
    tooltip: {
        x: {
            formatter: function(value:number, {}){
                let dt = DateTime.fromMillis(value)
                let time = dt.toFormat("HH:mm:ss")

                let day:number = parseInt(dt.toFormat("d"));
                let dayString:string = getOrdinal(day);

                let month = dt.toFormat("MMM");

                return `${time} ${dayString} ${month}`;
            }
        },
        y: {
            formatter: function(value: number | string, {}){
                return value + " Mbps";
            }
        }
    }
}

export default vpnChartOptions;