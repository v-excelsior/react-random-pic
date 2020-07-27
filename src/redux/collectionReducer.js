import { ADD_IMAGE } from './types'

const initialState = {
    collection: [],
    animals: {
        cat: 0,
        dog: 0,
        fox: 0,
    },
}

export const collectionReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_IMAGE:
            return {
                ...state,
                collection: state.collection.concat([action.url]),
                animals: Object.assign({}, state.animals, {
                    [action.animal]: ++state.animals[action.animal],
                }),
            }
        default:
            return state
    }
}
