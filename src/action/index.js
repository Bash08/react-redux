import {fetchData} from '../dataServer';

export const increment = () => {
    return {
        type: 'INCREMENT',
    }
}
export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}
export const signIn = () => {
    return {
        type: 'SGIN_IN'
    }
}

export const fetch_data = () => async (dispatch, getState) => {
    const data = await fetchData()
    dispatch({
        type: 'FETCHCOMMENT',
        payload: data
    })
}