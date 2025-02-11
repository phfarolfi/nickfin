export interface Entry {
    id: number
    date: number
    createdAt: number
    description: string
    paymentMethod: string
    payer: string
    category: string
    amount: number
}

export interface Expense extends Entry {
    installmentNumber: number
    installmentTotal: number
    payee: string
    paid: boolean
}

export interface ExpenseDTO {
    date: number
    installmentTotal: number
    description: string
    paymentMethod: string
    payer: string
    payee: string
    category: string
    amount: number
    paid: boolean
}

export type Revenue = Entry

export interface RevenueDTO {
    date: number
    description: string
    paymentMethod: string
    payer: string
    category: string
    amount: number
}
