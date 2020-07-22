// import axios from 'axios'

export class ImageService {
    constructor(url, animal) {
        this.apiURL = url
        this.animal = animal
    }
    async getURL() {
        // let response = await axios.get('https://api.thedogapi.com/v1/images/search')
        switch (this.animal) {
            case 'cat':
            case 'dog':
                console.log('cat or dog')
                break
            case 'fox':
                console.log('fox')
                break
            default:
                console.log('"' + this.animal + '" is not support')
        }
    }
}

//?mime_types=gif
// return response.data[0].url
