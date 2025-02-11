import React from "react"
import moment from "moment"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import { RevenueDTO } from "../homepage/types"
import { newRevenue } from "../../services/revenue"

const NewRevenue: React.FC = () => {
    const [form, setForm] = React.useState<RevenueDTO>({
        date: moment().unix(),
        description: "",
        paymentMethod: "",
        payer: "",
        amount: 0,
        category: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target
        setForm(prevForm => ({
            ...prevForm,
            [name]: type === "checkbox" ? checked : value
        }))
    }

    return (
        <div className="new-revenue">
            <form>
                <div className="new-revenue__controls">
                    <DatePicker
                        label="Até"
                        value={moment.unix(form.date)}
                        onChange={(newValue) => setForm(prevForm => ({ ...prevForm, date: newValue?.unix() as number }))}
                    />
                    <div className="new-revenue__control">
                        <label>Descrição:</label>
                        <input
                            type="text"
                            name="description"
                            value={form.description}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="new-revenue__control">
                        <label>Método de pagamento:</label>
                        <input
                            type="text"
                            name="paymentMethod"
                            value={form.paymentMethod}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="new-revenue__control">
                        <label>Pagador:</label>
                        <input
                            type="text"
                            name="payer"
                            value={form.payer}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="new-revenue__control">
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
                    <div className="new-revenue__control">
                        <label>Categoria:</label>
                        <input
                            type="text"
                            name="category"
                            value={form.category}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="new-revenue__actions">
                    <button onClick={() => console.log(newRevenue(form))}>Add revenue</button>
                </div>
            </form>
        </div>
    )
}

export default NewRevenue
