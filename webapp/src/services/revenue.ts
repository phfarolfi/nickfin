import { RevenueDTO } from "../commom/types"

export async function getAllRevenues() {
    const response = await fetch("http://localhost:8080/revenue/")

    return await response.json()
}

export async function getRevenues(start?: number, end?: number) {
    if (!start && !end) {
        return await getAllRevenues()
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

    const response = await fetch("http://localhost:8080/revenue/" + params)

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
