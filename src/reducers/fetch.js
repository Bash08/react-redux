const data = (state = null, action) => {
    switch(action.type) {
        case 'FETCHCOMMENT': 
        return state = action.payload
        default:
            return state =null
    }
}

export default data
