import React, {useState} from "react";
import {Card} from "../../../components";
import {useNavigate} from "react-router-dom";

function WalletWidget(){

    const navigate = useNavigate();

    const [walletId, setWalletId] = useState<string>("asdf1234");

    return (
        <Card
            className="cursor-pointer hoverable relative"
            onClick={() => navigate(`/wallet/${walletId}`)}
        >
                            <span className="text-2xl">
                                Wallet
                            </span>

            <div className="flex flex-col mt-3">
                <div className="text-md text-center text-2xl">
                    1234.56 PKT
                </div>
                <div className="wallet-grid mt-6">
                    <div className="wallet-item">
                        <span>Mined 24h</span>
                        <span>123.45 PKT</span>
                    </div>

                    <div className="wallet-item">
                        <span>Mined 24h</span>
                        <span>123.45 PKT</span>
                    </div>

                    <div className="wallet-item">
                        <span>Mined 24h</span>
                        <span>123.45 PKT</span>
                    </div>
                </div>
            </div>

            <span className="absolute top-2.5 right-6 text-3xl">
                ›
            </span>
        </Card>
    )
}

export default WalletWidget;