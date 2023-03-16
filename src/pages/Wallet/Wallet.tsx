import React, {useContext, useEffect, useState} from "react";
import {useFieldArray, useForm} from "react-hook-form";
import {useNavigate, useParams} from "react-router-dom";
import Modal from "react-modal";


import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight, faTimes} from "@fortawesome/free-solid-svg-icons";
import {yupResolver} from "@hookform/resolvers/yup";
import {useImmer} from "use-immer";
import * as Yup from "yup";

import {Card} from "../../components";
import {ThemeContext} from "../../helpers";
import {Address, Transaction} from "../../types";

export const Wallet = () => {

    const MIN_PKT_TRANSACTION_AMOUNT = 1;

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

    const {control, register: registerAddress, handleSubmit: handleSubmitAddress, reset} = useForm<{"addresses": Address[]}>();
    const { fields: addressesFieldArray } = useFieldArray({
        control,
        name: "addresses"
    });

    useEffect(() => {
        if(addresses && addresses.length > 0){
            reset({"addresses": addresses});
        }
    }, [addresses])

    const submitAddressNames = handleSubmitAddress((formData) => {
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
    const [ isTransactionModalOpen, setIsTransactionModalOpen ] = useState<boolean>(false);

    function getTransactionValidationSchema(currentState: Address[]){
        return Yup.object().shape({
            from: Yup.string().required("Address from is required"),
            to: Yup.string().required("Address to is required"),
            amount: Yup.number().required("Amount is required").min(MIN_PKT_TRANSACTION_AMOUNT).test({
                name: 'max_is_balance_of_from',
                exclusive: false,
                params: {},
                message: "Amount larger than available balance",
                test: function (value) {
                    let fromAddress = currentState.find(a => a.address === this.parent.from);

                    if(fromAddress === undefined){
                        throw new TypeError(`Address Object could not be found for address ${this.parent.from}`)
                    }

                    return value <= fromAddress.balance;
                }
            })
        })
    }

    const {register: registerTransaction, handleSubmit: handleSubmitTransaction, reset: resetTransaction, formState: {errors: transactionErrors}} = useForm<{
        from: string,
        to: string,
        amount: number
    }>({
        defaultValues: {
            from: "",
            to: "",
            amount: undefined
        },
        resolver: yupResolver(getTransactionValidationSchema(addresses))
    })

    useEffect(() => {
        if(Object.keys(transactionErrors).length > 0){
            console.debug({transactionErrors});
        }
    }, [transactionErrors])

    function resetTransactionForm() {
        resetTransaction({
            from: "",
            to: "",
            amount: undefined
        })
    }

    const submitTransaction = handleSubmitTransaction((formData) => {
        console.debug({"transaction":formData});
        setIsTransactionModalOpen(false);
        resetTransactionForm();
    });

    return (
        <>
            {theme?.current && (
                <div className="content">

                    <Modal
                        isOpen={isTransactionModalOpen}
                        onRequestClose={() => {
                            setIsTransactionModalOpen(false);
                            resetTransactionForm();
                        }}
                        className="modal"
                        overlayClassName="modal-overlay"
                        contentLabel={"Transaction Modal"}
                        appElement={document.getElementById('root') as HTMLElement}
                    >
                        <div className="flex justify-end">
                            <button className="btn-modal-close px-3" onClick={() => setIsTransactionModalOpen(false)}>
                                <FontAwesomeIcon icon={faTimes}/>
                            </button>
                        </div>

                        <div className="flex">
                            <form
                                className="w-full form"
                                onSubmit={submitTransaction}
                            >

                                <div className="flex flex-row gap-x-2 mb-6">
                                    <div className="flex flex-col flex-grow">
                                        <label htmlFor="from">From</label>
                                        <select
                                            {...registerTransaction("from")}
                                        >
                                            {addresses?.map((address, index) => (
                                                <option
                                                    value={address.address}
                                                    key={`transaction_address_${index}`}
                                                >
                                                    {/** use address name if exists **/}
                                                    {(address.name && address.name != "") ? address.name : address.address}
                                                </option>
                                            ))}
                                        </select>
                                        {transactionErrors.from && (
                                            <p className="text-red">{transactionErrors.from.message}</p>
                                        )}
                                    </div>

                                    <div className="flex flex-col flex-grow">
                                        <label htmlFor="to">To</label>
                                        <input
                                            {...registerTransaction("to")}
                                            type="text"
                                        />
                                        {transactionErrors.to && (
                                            <p className="text-red">{transactionErrors.to.message}</p>
                                        )}
                                    </div>

                                    <div className="flex flex-col flex-grow">
                                        <label htmlFor="amount">Amount</label>
                                        <input
                                            {...registerTransaction("amount")}
                                            type="number"
                                            step={0.00001}
                                            min={MIN_PKT_TRANSACTION_AMOUNT}
                                            placeholder={"0"}
                                        />
                                        {transactionErrors.amount && (
                                            <p className="text-red">{transactionErrors.amount.message}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="flex justify-end">
                                    <button className="button-blue">Execute</button>
                                    <button
                                        className="button-red ml-2"
                                        type="button"
                                        onClick={() => {
                                            setIsTransactionModalOpen(false);
                                            resetTransactionForm();
                                        }}
                                    >
                                        CANCEL
                                    </button>
                                </div>
                            </form>
                        </div>
                    </Modal>

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
                                <tbody className="tbody-wallet">
                                    {addressesFieldArray?.map((field, index) => (
                                        <tr key={`address_table_row_${index}`}>
                                            <td>
                                                <input
                                                    type="text"
                                                    {...registerAddress(`addresses.${index}.name`)}
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
                            <div className="flex justify-between mt-4">
                                <div className="flex gap-x-2">
                                    <button
                                        className="px-4 button-blue"
                                        onClick={() => setIsTransactionModalOpen(true)}
                                    >
                                        Transaction
                                    </button>

                                    <button
                                        className="button-green px-4"
                                        onClick={() => getNewAddressFromBackend()}
                                    >
                                        [MOCK] --- New Address
                                    </button>
                                </div>

                                <button
                                    className="button-green px-4"
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