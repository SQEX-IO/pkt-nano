import React, {useState} from "react";
import Chart from "react-apexcharts";
import classNames from "classnames";

import {cpuUsagePieChartOptions} from "./charts";

import {Card} from "../../../components";
import {CelsiusToFahrenheit} from "../../../helpers";

function CPUWidget() {

    const [cpuUsage, setCpuUsage] = useState<number[]>([40, 60]);
    const [cpuTemp, setCpuTemp] = useState<number>(30);

    return(
        <Card>
            <span className="text-2xl">
                CPU
            </span>
            <div className="flex gap-x-3">
                <div className="cpu-donut">
                    <Chart
                        // @ts-ignore
                        options={cpuUsagePieChartOptions}
                        series={cpuUsage}
                        type={"donut"}
                        height={"100%"}
                    />
                </div>
                <div className="flex flex-col gap-y-3 mt-3">
                    <div className="text-md">
                        <b>Model:</b> AMD EPYC 9654P @ 2.4GHz
                    </div>

                    <div className="text-md">
                        <b>Max Usage:</b> 27%
                    </div>

                    <div className="text-md">
                        <b>Temperature:</b>
                        {cpuTemp && (
                            <span className={classNames(
                                cpuTemp < 45 && "text-green",
                                cpuTemp >= 45 && cpuTemp < 85 && "text-orange",
                                cpuTemp >= 85 && "text-red",
                            )}> {cpuTemp}°C / {CelsiusToFahrenheit(cpuTemp)}°F</span>
                        )}
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default CPUWidget;