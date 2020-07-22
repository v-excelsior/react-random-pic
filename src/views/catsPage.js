import React from 'react'
import { catService } from '../services'

import Button from '@material-ui/core/Button'

class CatsPage extends React.Component {
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
            imgUrl: await catService.getURL(),
        })
    }

    render() {
        return (
            <div>
                <h1>This is a cat!</h1>
                <Button onClick={this.getImage} color="inherit">
                    Get new
                </Button>
                <hr></hr>
                <img src={this.state.imgUrl} alt="Cat" />
            </div>
        )
    }
}

export default CatsPage
