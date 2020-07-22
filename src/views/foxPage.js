import React from 'react'
import { foxService } from '../services'

class FoxPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            imgUrl: '',
        }
        this.getImage = this.getImage.bind(this)
    }
    async componentDidMount() {
        this.getImage()
    }
    async getImage() {
        this.setState({
            imgUrl: await foxService.getURL(),
        })
    }

    render() {
        return (
            <div>
                <h1>This is a cat!</h1>
                <button onClick={this.getImage}>Get new</button>
                <hr></hr>
                <img src={this.state.imgUrl} alt="Cat" />
            </div>
        )
    }
}

export default DogsPage
