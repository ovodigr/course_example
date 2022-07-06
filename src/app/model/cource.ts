export interface ICourceGet {
    base_ccy: string;
    buy: string;
    ccy: string;
    sale: string
}
export interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export interface ICource {
    'buy': IRes,
    'sale': IRes,
}

export interface IRes {
    usd: string;
    eur: string;
    uan?: string;
}

export interface Value {
    value: string;
}

export type TNum = number;

export interface Tstate {
    firstInput: number;
    secondInput: number;
    firstSelect: string;
    secondSelect: string;
}
export type TMon = "eur" | "usd";

export type TInput = "firstInput" | "secondInput";

export type TSelect = "firstSelect" | "secondSelect";