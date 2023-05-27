import { Activity } from "../../@types/activity";

export function processActivitySorting(data: Activity[], sort: string) {
    if (sort === "date") {
        return data.sort((a, b) => new Date(b.startTime).getTime() - new Date(a.startTime).getTime())
    } else if (sort === "distance") {
        return data.sort((a, b) => a.distance - b.distance)
    } else if (sort === "duration") {
        return data.sort((a, b) => parseInt(a.duration) - parseInt(b.duration))
    } else if (sort === "elevationGain") {
        return data.sort((a, b) => a.elevation.elevationGain - b.elevation.elevationGain)
    } else {
        return data
    }
}