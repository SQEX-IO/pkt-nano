import React, {useContext, useEffect, useState} from "react";
import {useFieldArray, useForm} from "react-hook-form";
import {useNavigate, useParams} from "react-router-dom";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {useImmer} from "use-immer";

import {Card} from "../../components";
import {ThemeContext} from "../../helpers";
import {Address, Transaction} from "../../types";

export const Wallet = () => {
    const theme = useContext(ThemeContext);
    const navigate = useNavigate();

    const {id} = useParams();

    const [addresses, setAddresses] = useImmer<Address[]>([]);
    useEffect(() => {
        setAddresses([
            {
                name: "Addr_1",
                balance: 123.45,
                coins: 10,
                address: "pkt123456789"
            },
            {
                name: "",
                balance: 234.56,
                coins: 20,
                address: "pkt123456789"
            },
            {
                name: "Addr_3",
                balance: 345.67,
                coins: 30,
                address: "pkt123456789"
            },
            {
                name: "Addr_4",
                balance: 456.78,
                coins: 40,
                address: "pkt123456789"
            },
            {
                name: "Addr_5",
                balance: 567.89,
                coins: 50,
                address: "pkt123456789"
            }
        ]);
    }, []);

    const [transactions, setTransactions] = useState<Transaction[]>();
    useEffect(() => {
        setTransactions([
            {
              to: "pkt123456789",
              from: "pkt987654321",
              amount: 123.45
            },
            {
                to: "pkt123456789",
                from: "pkt987654321",
                amount: 123.45
            },
            {
                to: "pkt123456789",
                from: "pkt987654321",
                amount: 123.45
            },
            {
                to: "pkt123456789",
                from: "pkt987654321",
                amount: 123.45
            },
            {
                to: "pkt123456789",
                from: "pkt987654321",
                amount: 123.45
            },
            {
                to: "pkt123456789",
                from: "pkt987654321",
                amount: 123.45
            },
            {
                to: "pkt123456789",
                from: "pkt987654321",
                amount: 123.45
            },
            {
                to: "pkt123456789",
                from: "pkt987654321",
                amount: 123.45
            },
            {
                to: "pkt123456789",
                from: "pkt987654321",
                amount: 123.45
            },
            {
                to: "pkt123456789",
                from: "pkt987654321",
                amount: 123.45
            },
            {
                to: "pkt123456789",
                from: "pkt987654321",
                amount: 123.45
            },
            {
                to: "pkt123456789",
                from: "pkt987654321",
                amount: 123.45
            },
            {
                to: "pkt123456789",
                from: "pkt987654321",
                amount: 123.45
            },
            {
                to: "pkt123456789",
                from: "pkt987654321",
                amount: 123.45
            },
            {
                to: "pkt123456789",
                from: "pkt987654321",
                amount: 123.45
            },
            {
                to: "pkt123456789",
                from: "pkt987654321",
                amount: 123.45
            },
            {
                to: "pkt123456789",
                from: "pkt987654321",
                amount: 123.45
            },
            {
                to: "pkt123456789",
                from: "pkt987654321",
                amount: 123.45
            },
            {
                to: "pkt123456789",
                from: "pkt987654321",
                amount: 123.45
            },
            {
                to: "pkt123456789",
                from: "pkt987654321",
                amount: 123.45
            },
            {
                to: "pkt123456789",
                from: "pkt987654321",
                amount: 123.45
            },
            {
                to: "pkt123456789",
                from: "pkt987654321",
                amount: 123.45
            },
            {
                to: "pkt123456789",
                from: "pkt987654321",
                amount: 123.45
            },
            {
                to: "pkt123456789",
                from: "pkt987654321",
                amount: 123.45
            },
            {
                to: "pkt123456789",
                from: "pkt987654321",
                amount: 123.45
            },
            {
                to: "pkt123456789",
                from: "pkt987654321",
                amount: 123.45
            },
            {
                to: "pkt123456789",
                from: "pkt987654321",
                amount: 123.45
            },
            {
                to: "pkt123456789",
                from: "pkt987654321",
                amount: 123.45
            },
            {
                to: "pkt123456789",
                from: "pkt987654321",
                amount: 123.45
            },
            {
                to: "pkt123456789",
                from: "pkt987654321",
                amount: 123.45
            },
            {
                to: "pkt123456789",
                from: "pkt987654321",
                amount: 123.45
            },
            {
                to: "pkt123456789",
                from: "pkt987654321",
                amount: 123.45
            },
            {
                to: "pkt123456789",
                from: "pkt987654321",
                amount: 123.45
            },
            {
                to: "pkt123456789",
                from: "pkt987654321",
                amount: 123.45
            },
            {
                to: "pkt123456789",
                from: "pkt987654321",
                amount: 123.45
            },
            {
                to: "pkt123456789",
                from: "pkt987654321",
                amount: 123.45
            },
            {
                to: "pkt123456789",
                from: "pkt987654321",
                amount: 123.45
            },
            {
                to: "pkt123456789",
                from: "pkt987654321",
                amount: 123.45
            },
            {
                to: "pkt123456789",
                from: "pkt987654321",
                amount: 123.45
            },
            {
                to: "pkt123456789",
                from: "pkt987654321",
                amount: 123.45
            },
            {
                to: "pkt123456789",
                from: "pkt987654321",
                amount: 123.45
            },
            {
                to: "pkt123456789",
                from: "pkt987654321",
                amount: 123.45
            },
            {
                to: "pkt123456789",
                from: "pkt987654321",
                amount: 123.45
            },
            {
                to: "pkt123456789",
                from: "pkt987654321",
                amount: 123.45
            },
            {
                to: "pkt123456789",
                from: "pkt987654321",
                amount: 123.45
            },{
                to: "pkt123456789",
                from: "pkt987654321",
                amount: 123.45
            },
            {
                to: "pkt123456789",
                from: "pkt987654321",
                amount: 123.45
            },
            {
                to: "pkt123456789",
                from: "pkt987654321",
                amount: 123.45
            },
            {
                to: "pkt123456789",
                from: "pkt987654321",
                amount: 123.45
            },
            {
                to: "pkt123456789",
                from: "pkt987654321",
                amount: 123.45
            },
            {
                to: "pkt123456789",
                from: "pkt987654321",
                amount: 123.45
            },

            {
                to: "pkt123456789",
                from: "pkt987654321",
                amount: 123.45
            }
        ]);
    }, []);

    const {control, register, handleSubmit, reset} = useForm<{"addresses": Address[]}>();
    const { fields: addressesFieldArray } = useFieldArray({
        control,
        name: "addresses"
    });

    useEffect(() => {
        if(addresses && addresses.length > 0){
            reset({"addresses": addresses});
        }
    }, [addresses])

    const submitAddressNames = handleSubmit((formData) => {
        console.debug({formData});
        setAddresses(formData.addresses);
    });

    function getNewAddressFromBackend() {
        // todo - fake for the time being
        setAddresses((draft) => {
            draft.push({
                name: `Addr_${draft.length + 1}`,
                balance: 0,
                coins: 0,
                address: "pkt123456789"
            })
        })
    }

    return (
        <>
            {theme?.current && (
                <div className="content">
                    <div className="flex justify-between mb-2">
                        <h1 className="text-3xl">
                            {id}
                        </h1>

                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                navigate("/")
                            }}
                        >
                            <FontAwesomeIcon
                                icon={faArrowLeft}
                                className="mr-2"
                            />
                            Return
                        </button>
                    </div>
                    <div className="grid grid-cols-3 gap-x-4">

                        {addresses && (
                            <form
                                onSubmit={submitAddressNames}
                                id="addressesForm"
                                style={{display:"none"}}
                            />
                        )}

                        <Card className="wallet-scrollable col-span-2">
                            <table className="wallet-address-table">
                                <thead>
                                    <tr>
                                        <th>
                                            Name
                                        </th>
                                        <th>
                                            Balance
                                        </th>
                                        <th>
                                            Coins
                                        </th>
                                        <th>
                                            Address
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="mt-2">
                                    {addressesFieldArray?.map((field, index) => (
                                        <tr key={`address_table_row_${index}`}>
                                            <td>
                                                <input
                                                    type="text"
                                                    {...register(`addresses.${index}.name`)}
                                                    form="addressesForm"
                                                />
                                            </td>
                                            <td>
                                                {field.balance}
                                            </td>
                                            <td>
                                                {field.coins}
                                            </td>
                                            <td>
                                                {field.address}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="flex justify-between mt-2">
                                <button
                                    className="px-4 bg-green-700"
                                    onClick={() => getNewAddressFromBackend()}
                                >
                                    New Address
                                </button>

                                <button
                                    className="px-4"
                                    form="addressesForm"
                                >
                                    Save
                                </button>
                            </div>
                        </Card>

                        <Card className="wallet-scrollable">
                            <h1 className="text-lg underline mt-0.5 mb-4">Transactions</h1>
                            {transactions && transactions.map((transaction, id) => (
                                <div className="flex justify-between mb-0.5" key={`transaction_${id}`}>
                                    {transaction.from}
                                    <div>
                                        <span className="text-sm">
                                            {transaction.amount}
                                        </span>
                                        <FontAwesomeIcon
                                            icon={faArrowRight}
                                            className="mx-2"
                                        />
                                    </div>
                                    {transaction.to}
                                </div>
                            ))}
                        </Card>
                    </div>
                </div>
            )}
        </>
    )
}

export default Wallet;