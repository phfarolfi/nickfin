import React, { useEffect, useState } from "react"
import moment from "moment"
import TextField from "@mui/material/TextField"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"

import { getAllExpenses } from "../../services/expense"
import { Expense } from "./types"

const MainPage: React.FC = () => {
    const [expenses, setExpenses] = useState<Expense[]>()
    const [period, setPeriod] = useState<{ start?: number; end?: number }>({
        start: 1735084800,
        end: 1737763200,
    })

    useEffect(() => {
        async function fetchExpenses() {
            const expenses = await getAllExpenses()

            setExpenses(expenses)
        }

        fetchExpenses()
    }, [])

    return (
        <div className="container">
            <div className="period-selection">
                <DatePicker
                    label="De"
                    value={moment(period.start)}
                    onChange={(newValue) => setPeriod({...period, start: newValue?.unix()})}
                    textField={(params) => <TextField {...params} />}
                />
                <DatePicker
                    label="Até"
                    value={moment(period.end)}
                    onChange={(newValue) => setPeriod({...period, end: newValue?.unix()})}
                    textField={(params) => <TextField {...params} />}
                />
            </div>
            {expenses && (
                <ul>
                    {expenses.map((expense, i) => (
                        <li key={i}>
                            {expense.date},{expense.installmentNumber},{expense.description},{expense.paymentMethod},
                            {expense.payer},{expense.payee},{expense.amount},{expense.category},
                            {expense.paid.toString()}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default MainPage
