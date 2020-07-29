import axios from 'axios'

export class ImageService {
    constructor(url, animal) {
        this.apiURL = url
        this.animal = animal
    }
    async getURL() {
        let response = await axios.get(this.apiURL)
        switch (this.animal) {
            case 'cat':
            case 'dog':
                return response.data[0].url
            case 'fox':
                return response.data.image
            default:
                console.log('"' + this.animal + '" is not support')
        }
    }
}