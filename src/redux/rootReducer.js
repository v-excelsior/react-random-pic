import { combineReducers } from 'redux'
import { collectionReducer } from './collectionReducer'

export const rootReducer = combineReducers({
    collection: collectionReducer,
})
// {
//     if ((action.type = 'HELLO')) {
//         console.log('Hello here')
//         return state
//     }
//     return state
// }
