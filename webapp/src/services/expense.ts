import { ExpenseDTO } from "../components/homepage/types"

export async function getAllExpenses() {
    const response = await fetch("http://localhost:8080/expense/")

    return await response.json()
}

export async function newExpense(expense: ExpenseDTO) {
    const response = await fetch("http://localhost:8080/expense/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(expense)
    })

    return await response.json()
}
