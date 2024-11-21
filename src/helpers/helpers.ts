type TravelData = {
    id: number,
    passenger_name: string,
    passenger_avatar: string,
    origin: string,
    destination: string,
}

type transformedData = {
    title: string,
    data: TravelData[]
}


export function transformData (data: TravelData[]):transformedData[] {
    const allLocations:string[] = getLocationsNames()

    return allLocations.map((location) => {
        return {
            title: location,
            data: filterByLocation(location)
        }
    })

    function getLocationsNames () {
        const destinations:string[] = []
    
        data.forEach((n) => {
            if(!destinations.includes(n.destination)) {
                destinations.push(n.destination)
            }
    
            if(!destinations.includes(n.origin)) {
                destinations.push(n.origin)
            }      
        })
    
        return destinations
    }

    function filterByLocation (location: string):TravelData[] {
        return data.filter((item) => {
            if (item.destination === location || item.origin === location) {
                return item
            }
        })
    } 
}