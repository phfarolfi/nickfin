import React, { useEffect, useState } from "react"
import moment from "moment"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"

import { Expense, Revenue } from "../../commom/types"
import { getExpenses } from "../../services/expense"
import { getRevenues } from "../../services/revenue"

const MainPage: React.FC = () => {
    const [expenses, setExpenses] = useState<Expense[]>()
    const [revenues, setRevenues] = useState<Revenue[]>()
    const [period, setPeriod] = useState<{ start: number; end: number }>()

    useEffect(() => {
        if (period) {
            fetchExpenses(period?.start, period?.end)
            fetchRevenues(period?.start, period?.end)
        }
    }, [period])

    useEffect(() => {
        setPeriod({
            start: moment().startOf("month").unix(),
            end: moment().endOf("month").unix(),
        })
    }, [])

    async function fetchExpenses(start?: number, end?: number) {
        const expenses = await getExpenses(start, end)

        setExpenses(expenses)
    }

    async function fetchRevenues(start?: number, end?: number) {
        const revenues = await getRevenues(start, end)

        setRevenues(revenues)
    }

    return (
        <div className="container">
            <div className="period-selection">
                <DatePicker
                    label="De"
                    value={moment.unix(period?.start ?? 0)}
                    onChange={(newValue) => setPeriod({...period, start: newValue?.unix() as number, end: period?.end ?? moment().endOf("month").unix()})}
                />
                <DatePicker
                    label="Até"
                    value={moment.unix(period?.end ?? 0)}
                    onChange={(newValue) => setPeriod({...period, end: newValue?.unix() as number, start: period?.start ?? moment().startOf("month").unix()})}
                />
            </div>
            {expenses && expenses.length > 0 && (
                <>
                    <p>Despesas:</p>
                    <ul>
                        {expenses.map((expense, i) => (
                            <li key={i}>
                               ID: {expense.id}, Data de cobrança: {expense.date}, Criado em {expense.createdAt}, Parcela {expense.installmentNumber}/{expense.installmentTotal}, {expense.description}, {expense.paymentMethod}, 
                                {' '}{expense.payer}, {expense.payee}, R${expense.amount}, {expense.category}, 
                                {expense.paid ? ' Pago' : ' Não pago'}
                            </li>
                        ))}
                    </ul>
                </>
            )}
            {revenues && revenues.length > 0 && (
                <>
                    <p>Receitas:</p>
                    <ul>
                        {revenues.map((revenue, i) => (
                            <li key={i}>
                                {revenue.date}, {revenue.description}, {revenue.paymentMethod}, 
                                {revenue.payer}, {revenue.amount}, {revenue.category}
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    )
}

export default MainPage
