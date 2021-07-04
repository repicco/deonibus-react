import { combineReducers } from "redux";

const initialState = {
    trips: [],
    tripsOriginal: [],
    carShop: []
}


const trips = (state = initialState, action) => {
    switch(action.type){
        case 'HANDLE_TRIPS':
            return {...state, trips: action.payload }
        case 'HANDLE_TRIPSORIGINAL':
            return {...state, tripsOriginal: action.payload }
        case 'HANDLE_CARSHOP':
            return {...state, carShop: action.payload }
        default:
            return state
    }
}


export const reducers = combineReducers({trips})

