import React, { useEffect, useState } from "react"
import moment from "moment"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"

import { Expense, Revenue } from "./types"
import { getAllExpenses } from "../../services/expense"
import { getAllRevenues } from "../../services/revenue"

const MainPage: React.FC = () => {
    const [expenses, setExpenses] = useState<Expense[]>()
    const [revenues, setRevenues] = useState<Revenue[]>()
    const [period, setPeriod] = useState<{ start: number; end: number }>({
        start: 1736084800,
        end: 1737763200,
    })

    useEffect(() => {
        async function fetchExpenses() {
            const expenses = await getAllExpenses()

            setExpenses(expenses)
        }

        async function fetchRevenues() {
            const revenues = await getAllRevenues()

            setRevenues(revenues)
        }

        fetchExpenses()
        fetchRevenues()
    }, [])

    return (
        <div className="container">
            <div className="period-selection">
                <DatePicker
                    label="De"
                    value={moment.unix(period.start)}
                    onChange={(newValue) => setPeriod({...period, start: newValue?.unix() as number})}
                />
                <DatePicker
                    label="Até"
                    value={moment.unix(period.end)}
                    onChange={(newValue) => setPeriod({...period, end: newValue?.unix() as number})}
                />
            </div>
            {expenses && (
                <>
                    <p>Despesas:</p>
                    <ul>
                        {expenses.map((expense, i) => (
                            <li key={i}>
                                {expense.date}, {expense.installmentNumber}, {expense.description}, {expense.paymentMethod}, 
                                {expense.payer}, {expense.payee}, {expense.amount}, {expense.category}, 
                                {expense.paid.toString()}
                            </li>
                        ))}
                    </ul>
                </>
            )}
            {revenues && (
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
