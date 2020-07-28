import { ADD_IMAGE, DELETE_IMAGE } from './types'

const initialState = {
    collection: [],
    // animals: {
    //     cat: 0,
    //     dog: 0,
    //     fox: 0,
    // },
}
//  {url:'',animal:''}
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
                collection: state.collection.filter((element) => element !== action.url),
            }
        default:
            return state
    }
}
