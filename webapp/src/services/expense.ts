export async function getAllExpenses() {
    const response = await fetch("http://localhost:8080/expense/")

    return await response.json()
}
