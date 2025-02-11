import React from "react"
import moment from "moment"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import { ExpenseDTO } from "../homepage/types"
import { newExpense } from "../../services/expense"

const NewExpense: React.FC = () => {
    const [form, setForm] = React.useState<ExpenseDTO>({
        date: moment().unix(),
        installmentNumber: 1,
        description: "",
        paymentMethod: "",
        payer: "",
        payee: "",
        amount: 0,
        category: "",
        paid: false
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target
        setForm(prevForm => ({
            ...prevForm,
            [name]: type === "checkbox" ? checked : value
        }))
    }

    return (
        <div className="new-expense">
            <form>
                <div className="new-expense__controls">
                    <DatePicker
                        label="Até"
                        value={moment.unix(form.date)}
                        onChange={(newValue) => setForm(prevForm => ({ ...prevForm, date: newValue?.unix() as number }))}
                    />
                    <div className="new-expense__control">
                        <label>N° de parcelas:</label>
                        <input
                            type="number"
                            min="1"
                            step="1"
                            name="installmentNumber"
                            value={form.installmentNumber}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="new-expense__control">
                        <label>Descrição:</label>
                        <input
                            type="text"
                            name="description"
                            value={form.description}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="new-expense__control">
                        <label>Método de pagamento:</label>
                        <input
                            type="text"
                            name="paymentMethod"
                            value={form.paymentMethod}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="new-expense__control">
                        <label>Pagador:</label>
                        <input
                            type="text"
                            name="payer"
                            value={form.payer}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="new-expense__control">
                        <label>Recebedor:</label>
                        <input
                            type="text"
                            name="payee"
                            value={form.payee}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="new-expense__control">
                        <label>Valor:</label>
                        <input
                            type="number"
                            min="0.01"
                            step="0.01"
                            name="amount"
                            value={form.amount}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="new-expense__control">
                        <label>Categoria:</label>
                        <input
                            type="text"
                            name="category"
                            value={form.category}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="new-expense__control">
                        <label>Está pago?</label>
                        <input
                            type="checkbox"
                            name="paid"
                            checked={form.paid}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button onClick={() => console.log(newExpense(form))}>Add Expense</button>
                </div>
            </form>
        </div>
    )
}

export default NewExpense
