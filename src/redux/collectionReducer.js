import { ADD_IMAGE } from './types'

const initialState = {
    collection: [],
}
export const collectionReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_IMAGE:
            return { ...state, collection: state.collection.concat([action.payload]) }
        default:
            return state
    }
}
