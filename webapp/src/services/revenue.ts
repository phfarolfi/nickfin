import { RevenueDTO } from "../components/homepage/types"

export async function getAllRevenues() {
    const response = await fetch("http://localhost:8080/revenue/")

    return await response.json()
}

export async function newRevenue(revenue: RevenueDTO) {
    const response = await fetch("http://localhost:8080/revenue/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(revenue),
    })

    return await response.json()
}
