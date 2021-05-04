const initialState = {
    loggedin: false,
    ver: 0,
    hor: 0
}

const reducer = (state = initialState, action) => {

    if (action.type === 'STOCK') {
        return {
            ...state, 
            ver: action.payload.stock.ver,
            hor: action.payload.stock.hor
        }
    }

    if (action.type === "LOGIN") {
        return {
            ...state,
            loggedin: true
        }
    }

    return state
}

export default reducer