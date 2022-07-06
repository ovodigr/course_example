export interface ICource {
    base_ccy: string;
    buy: string;
    ccy: string;
    bassalee_ccy: string;
}

export interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export interface IRes {
    usd: string;
    eur: string;
    uan?: string;

}

export interface Value {
    value: string;
}

export type Str = number;

export interface Tstate {
    firstInput: number;
    secondInput: number;
    firstSelect: number;
    secondSelect: number;
}
export type TMon = "eur" | "usd";