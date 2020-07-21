import axios from 'axios'

axios.defaults.headers.common['x-api-key'] = '352f9cab-cc87-4d62-ab3f-656897461b8b'

export class CatService {
    async getImageURL() {
        let response = await axios.get('https://api.thedogapi.com/v1/images/search', {
            params: { limit: 1, size: 'full' },
        })
        return response.data[0].url
    }
}

//?mime_types=gif
