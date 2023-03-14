export interface Pool {
    name: string,
    goodrate: number,
    connected: boolean
}

export interface VpnChartDataType {
    up: number[][],
    down: number[][]
}

export interface VpnDetailType {
    connected: boolean,
    server: {
        ip: string,
        location: string
    }
}

export interface Address {
    name: string,
    balance: number,
    coins: number,
    address: string
}

export interface Transaction {
    to: string,
    from: string,
    amount: number
}