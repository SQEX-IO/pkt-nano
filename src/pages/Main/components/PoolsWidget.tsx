import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircle} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import {CONNECTION_STATUS_CLASSNAMES} from "../../../enum";
import {Card} from "../../../components";
import {Pool} from "../../../types";

function PoolsWidget(){

    const [pools, setPools] = useState<Pool[]>([
        {
            "name": "PKTPool",
            "goodrate": 100,
            "connected": true
        },
        {
            "name": "PKT World",
            "goodrate": 75,
            "connected": true
        },
        {
            "name": "Zetahash",
            "goodrate": 50,
            "connected": false
        }
    ])

    return (
        <Card>
            <span className="text-2xl">
                Pools
            </span>
            <div className="pool-grid mt-3">
                {pools && pools.length > 0 && pools.map((pool, index) => (
                    <div className="pill" key={`pool_${index}`}>
                        <FontAwesomeIcon
                            icon={faCircle}
                            className={classNames(
                                "my-auto mr-2",
                                pool.connected == null ? "text-neutral-500" :
                                    pool.connected ? "text-green-600" :
                                        `text-${CONNECTION_STATUS_CLASSNAMES.DISCONNECTED}`
                            )}
                        />
                        <span>
                            {pool.name} - {pool.goodrate}%
                        </span>
                    </div>
                ))}
            </div>
        </Card>
    )
}

export default PoolsWidget;