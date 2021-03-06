import { ADD_IMAGE, DELETE_IMAGE } from './types'

const stub = {
    url: 'https://s.mind.ua/img/forall/a/201973/49.jpg?1558127037',
    animal: 'cat',
}

const initialState = {
    collection: [stub], 
}

export const collectionReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_IMAGE:
            return {
                ...state,
                collection: [...state.collection, { url: action.url, animal: action.animal }],
            }
        case DELETE_IMAGE:
            return {
                ...state,
                collection: state.collection.filter(item => item.url !== action.url),
            }
        default:
            return state
    }
}
