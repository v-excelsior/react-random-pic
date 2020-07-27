import { ADD_IMAGE } from './types'

const initialState = {
    collection: [],
    animals: {
        cats: 0,
        dogs: 0,
        foxes: 0,
    },
}

export const collectionReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_IMAGE:
            return { ...state, collection: state.collection.concat([action.url]) }
        default:
            return state
    }
}
