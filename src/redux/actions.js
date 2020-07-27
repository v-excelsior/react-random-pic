import { ADD_IMAGE } from './types'

export function addImage(imageUrl, animalType) {
    return {
        type: ADD_IMAGE,
        url: imageUrl,
        animal: animalType,
    }
}
