import { ExpenseDTO } from "../commom/types"

export async function getAllExpenses() {
    const response = await fetch("http://localhost:8080/expense/")

    return await response.json()
}

export async function getExpenses(start?: number, end?: number) {
    if (!start && !end) {
        return await getAllExpenses()
    }

    if (start && end && start > end) {
        return []
    }

    let params = '?'

    if (start) {
        params += `start=${start}&`
    }

    if (end) {
        params += `end=${end}`
    }

    const response = await fetch("http://localhost:8080/expense/" + params)

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
