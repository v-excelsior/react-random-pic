import { ADD_IMAGE } from './types'

export function addImage(imageUrl) {
    return {
        type: ADD_IMAGE,
        payload: imageUrl,  
    }
}
