import { ImageService } from './imageService'

export const dogService = new ImageService('https://api.thedogapi.com/v1/images/search', 'dog')
export const catService = new ImageService('https://api.thecatapi.com/v1/images/search', 'cat')
export const foxService = new ImageService('https://randomfox.ca/floof/', 'fox')
