export async function getAllRevenues() {
    const response = await fetch("http://localhost:8080/revenue/")

    return await response.json()
}
