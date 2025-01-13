export interface Expense {
    id: number
    date: number
    createdAt: number
    installmentNumber: number
    description: string
    paymentMethod: string
    payer: string
    payee: string
    category: string
    amount: number
    paid: boolean
}

export interface ExpenseDTO {
    date: number
    installmentNumber: number
    description: string
    paymentMethod: string
    payer: string
    payee: string
    category: string
    amount: number
    paid: boolean
}
