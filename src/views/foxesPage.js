import React from 'react'
import { foxService } from '../services'

import Button from '@material-ui/core/Button'

class FoxesPage extends React.Component {
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
                <Button onClick={this.getImage} variant="contained" color="primary">
                    Get new
                </Button>
                <hr></hr>
                <img src={this.state.imgUrl} alt="Fox" />
            </div>
        )
    }
}

export default FoxesPage
