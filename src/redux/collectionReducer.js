import { ADD_IMAGE, DELETE_IMAGE } from './types'

const initialState = {
    collection: [], // [{url:'',animal:''}]
}
export const collectionReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_IMAGE:
            return {
                ...state,
                collection: state.collection.concat([{ url: action.url, animal: action.animal }]),
            }
        case DELETE_IMAGE:
            return {
                ...state,
                collection: state.collection.filter((item) => item.url !== action.url),
            }
        default:
            return state
    }
}
