import { ADD_IMAGE, DELETE_IMAGE } from './types'

export function addImage(imageUrl, animalType) {
    return {
        type: ADD_IMAGE,
        url: imageUrl,
        animal: animalType,
    }
}

export function deleteImage(imageUrl) {
    return {
        type: DELETE_IMAGE,
        url: imageUrl,
        // animal: animalType,
    }
}