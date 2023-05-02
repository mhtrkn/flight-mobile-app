import { tickets } from "../constants"

export const getCompatibleTicket = (data) => {
    const compatible = tickets.filter((item) => item.from == data.from && item.to == data.to)
    return compatible
}