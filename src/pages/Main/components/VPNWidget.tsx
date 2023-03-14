import React, {useEffect, useMemo, useState} from "react";
import Chart from "react-apexcharts";
import classNames from "classnames";
import getUnicodeFlagIcon from "country-flag-icons/unicode";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowDown, faArrowRight, faArrowUp, faClock, faPowerOff, faUndo} from "@fortawesome/free-solid-svg-icons";

import {vpnChartOptions} from "./charts";

import {Card, Toggle} from "../../../components";
import {CONNECTION_STATUS_CLASSNAMES} from "../../../enum";
import {VpnChartDataType, VpnDetailType} from "../../../types";
import {useForm} from "react-hook-form";

function VPNWidget(){

    const [vpnConnectionPending, setVpnConnectionPending] = useState<boolean>(false);
    const [vpnConnected, setVpnConnected] = useState<boolean>(false);
    const [vpnDetail, setVpnDetail] = useState<VpnDetailType>();

    const vpnStatusColour:string = useMemo(() => {
        return getVpnStatusColour();
    }, [vpnConnectionPending, vpnConnected])

    const [vpnChartData, setVpnChartData] = useState<VpnChartDataType>({
        up: [
            [1677170566000, 10],
            [1677170567000, 12],
            [1677170568000, 8],
            [1677170569000, 10],
            [1677170570000, 14],
        ],
        down: [
            [1677170566000, 50],
            [1677170567000, 60],
            [1677170568000, 40],
            [1677170569000, 50],
            [1677170570000, 70],
        ]
    });

    const {register, watch} = useForm<{
        vpn_wallet_autofill: any
    }>({
        defaultValues: {
            vpn_wallet_autofill: undefined
        }
    })
    const vpn_wallet_autofill = watch("vpn_wallet_autofill");
    useEffect(() => {
        console.debug({vpn_wallet_autofill});
    }, [vpn_wallet_autofill])

    function getVpnStatus():string {
        if(vpnConnectionPending){
            return "Connecting...";
        } else if(vpnConnected){
            return "Connected";
        }

        return "Disconnected";
    }

    function getVpnStatusColour():string{
        if(vpnConnectionPending){
            return CONNECTION_STATUS_CLASSNAMES.CONNECTION_PENDING;
        } else if(vpnConnected){
            return CONNECTION_STATUS_CLASSNAMES.CONNECTED;
        }

        return CONNECTION_STATUS_CLASSNAMES.DISCONNECTED;
    }

    function toggleVpnConnection(){
        if(vpnConnected){
            setVpnConnected(false)
        } else {
            setVpnConnectionPending(true);

            setTimeout(() => {
                setVpnConnected(true);
                setVpnConnectionPending(false);
            }, 2000)
        }
    }

    function reconnect(){
        setVpnConnected(false);
        setVpnConnectionPending(true);

        setTimeout(() => {
            setVpnConnected(true);
            setVpnConnectionPending(false);
        }, 2000)
    }

    return (
        <Card className="row-span-3">

            <div className="flex mt-1">
                <div className="grow text-xl text-center align-children-middle">
                    <span className={classNames(
                        `text-${getVpnStatusColour()}`
                    )}>
                        {getVpnStatus()}
                    </span>

                    {vpnDetail && (
                        <span> - {vpnDetail.server?.location}</span>
                    )}
                </div>

                <button
                    className={classNames(
                        "vpn-power-button w-10",
                        `bg-${vpnStatusColour}`
                    )}
                    onClick={() => toggleVpnConnection()}
                >
                    <FontAwesomeIcon icon={faPowerOff}/>
                </button>
            </div>

            <div className="mt-4">
                <form onSubmit={(e) => {e.preventDefault()}}>
                    <div className="flex gap-x-2">
                        <select className="vpn-server-select grow">
                            <option value={`us-chicaco`}>
                                {getUnicodeFlagIcon("US")} - Chicago
                            </option>

                            <option value={`us-los_angeles`}>
                                {getUnicodeFlagIcon("US")} - Los Angeles
                            </option>

                            <option value={`gb-london`}>
                                {getUnicodeFlagIcon("GB")} - London
                            </option>

                            <option value={`gb-manchester`}>
                                {getUnicodeFlagIcon("GB")} - Manchester
                            </option>

                            <option value={`fr-paris`}>
                                {getUnicodeFlagIcon("FR")} - Paris
                            </option>
                        </select>

                        <button
                            className="vpn-reconnect-button w-10"
                            type={undefined}
                            onClick={() => reconnect()}
                        >
                            <FontAwesomeIcon icon={faUndo}/>
                        </button>
                    </div>
                </form>
            </div>

            <div className="flex justify-between mt-4">
                <div className="flex flex-col">
                    <span>Local IP</span>
                    <span>255.255.255.255</span>
                </div>
                <div className="flex items-center">
                    <FontAwesomeIcon icon={faArrowRight}/>
                </div>
                <div className="flex flex-col">
                    <span className="text-right">VPN IP</span>
                    <span>255.255.255.255</span>
                </div>
            </div>

            <div>
                {vpnChartData && (
                    <Chart
                        // @ts-ignore
                        options={vpnChartOptions}
                        series={[
                            {
                                name: 'Inbound',
                                data: vpnChartData.down
                            },
                            {
                                name: 'Outbound',
                                data: vpnChartData.up
                            }
                        ]}
                        type={"area"}
                        height={"100%"}
                        width={"100%"}
                    />
                )}
            </div>

            <div className="flex justify-between text-sm">
                <div>
                    <FontAwesomeIcon icon={faArrowDown}/>
                    <span className="ml-1">123 Mbps</span>
                </div>
                <div>
                    <FontAwesomeIcon icon={faArrowUp}/>
                    <span className="ml-1">12.3 Mbps</span>
                </div>
                <div>
                    <FontAwesomeIcon icon={faClock}/>
                    <span className="ml-1">4h 22m</span>
                </div>
            </div>

            <div className="mt-8 text-sm">
                <div className="flex justify-between mb-1">
                    <span>Used: 123.45 GB</span>
                    <span>Remaining: 124.45 GB</span>
                </div>
                <div className="vpn-usage-outer">
                    <div
                        className="vpn-usage-inner"
                        style={{width: "50%"}}
                    />
                </div>
            </div>

            <div className="vpn-wallet-wrapper mt-10">
                <div className="flex justify-between">
                    <span className="text-xl">
                        VPN Wallet
                    </span>

                    <form>
                        <Toggle
                            formRegister={register}
                            fieldName="vpn_wallet_autofill"
                        />
                    </form>
                </div>

                <div className="flex justify-between">
                    <span>
                        100 PKT = $1.00
                    </span>
                    <span>
                        $0.100 / GB
                    </span>
                </div>

                <div className="flex justify-between">
                    <span>
                        Used - 1.2 GB
                    </span>
                    <span>
                        70 Mb / min
                    </span>
                </div>

                <div className="flex justify-between">
                    <span className="text-center w-full">
                        Spent - $0.120
                    </span>
                </div>
            </div>
        </Card>
    )
}

export default VPNWidget;