export function handleTrips(payload){
    return{
        type: 'HANDLE_TRIPS',
        payload,
    }
}

export function handleTripsOriginal(payload){
    return{
        type: 'HANDLE_TRIPSORIGINAL',
        payload,
    }
}

export function handleCarShop(payload){
    return{
        type: 'HANDLE_CARSHOP',
        payload,
    }
}
