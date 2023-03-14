import React, {useEffect} from "react";
import {useForm} from "react-hook-form";

import * as Yup from "yup";

import {yupResolver} from "@hookform/resolvers/yup";

import {Card} from "../../../components";

function WiFiSettingsWidget(){

    const validationSchema = Yup.object().shape({
        ssid: Yup.string().min(4, "SSID Must be 4 characters minimum").max(32, "SSID Must be 32 characters maximum").required("SSID is required"),
        bandwidth_committed_mbps: Yup.number().min(0, "Cannot be negative").required("Bandwidth Committed is required"),
        free_tier_bandwidth_limit_mbps: Yup.number().min(0, "Cannot be negative").required("Free Tier Bandwidth Limit is required")
    })

    const {handleSubmit, register, formState: {errors}} = useForm<{
        ssid: string,
        bandwidth_committed_mbps: number,
        free_tier_bandwidth_limit_mbps: number
    }>({
        defaultValues: {
            ssid:"",
            bandwidth_committed_mbps:0,
            free_tier_bandwidth_limit_mbps: 0
        },
        resolver: yupResolver(validationSchema)
    })

    useEffect(() => {
        console.debug({errors});
    },[errors])

    const submitWiFiSettings = handleSubmit((data) => {
        console.debug({data})
    });

    return (
        <Card className="col-span-3">
            <span className="text-2xl">
                Wi-Fi Settings
            </span>
            <div className="flex gap-y-3 mt-4">
                <form
                    className="form flex gap-x-4"
                    onSubmit={submitWiFiSettings}
                >
                    <div>
                        <p className="text-sm">SSID</p>
                        <input
                            type="text"
                            {...register("ssid")}
                        />
                    </div>

                    <div>
                        <p className="text-sm">Bandwidth Committed</p>
                        <input
                            type="number"
                            min={0}
                            {...register("bandwidth_committed_mbps")}
                        />
                        <p className="text-sm text-right">
                            Mbps
                        </p>
                    </div>

                    <div>
                        <p className="text-sm">Free Tier Bandwidth Limit</p>
                        <input
                            type="number"
                            min={0}
                            {...register("free_tier_bandwidth_limit_mbps")}
                        />
                        <p className="text-sm text-right">
                            Mbps
                        </p>
                    </div>

                    <button
                        className="form-submit-bottom-right"
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </Card>
    )
}

export default WiFiSettingsWidget;