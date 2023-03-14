import React, {useEffect, useState} from "react";
import {Card} from "../../../components";
import Chart from "react-apexcharts";
import {encryptionsChartOptions} from "./charts";
import {DateTime} from "luxon";

function EncryptionsWidget() {

    const [encryptionsChartData, setEncryptionsChartData] = useState<number[][]>([]);

    useEffect(() => {
        /** temporary data generation for charts **/
        /** ------------------------------------------------------------------ **/

        let startTime_ms:number = DateTime.now().toMillis();
        let reportRate_ms:number = 1000; // frequency of encryption data in ms

        let encryptionsChartData_TEMP:number[][] = [];
        let currentTimeEncryptions_ms:number = startTime_ms;
        let encryptionsChartDataStartTime_ms:number = currentTimeEncryptions_ms - 1800000; // half an hour ago

        for(let i = encryptionsChartDataStartTime_ms; i < currentTimeEncryptions_ms; i += reportRate_ms){
            encryptionsChartData_TEMP.push(
                [
                    i,
                    Math.floor(Math.random() * 1000)
                ]
            )
        }
        setEncryptionsChartData(encryptionsChartData_TEMP);

        /** ------------------------------------------------------------------ **/
    }, [])

    return(
        <>
            {encryptionsChartData && encryptionsChartData.length > 0 && (
                <Card className="encryptions-charts-container col-span-3">
                                <span className="text-2xl">
                                    Encryptions
                                </span>
                    <Chart
                        // @ts-ignore
                        options={encryptionsChartOptions}
                        series={[
                            {
                                name: 'Encryptions/s',
                                data: encryptionsChartData,
                            }
                        ]}
                        height={"100%"}
                        className="apex-charts w-full"
                    />
                </Card>
            )}
        </>
    )
}

export default EncryptionsWidget;