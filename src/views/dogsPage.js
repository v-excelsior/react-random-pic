import React from 'react'
import { dogService } from '../services'
import { connect } from 'react-redux'

import { addImage } from '../redux/actions'

import Button from '@material-ui/core/Button'

class DogsPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            imgUrl: '',
        }
        this.getImage = this.getImage.bind(this)
        this.testDispatch = this.testDispatch.bind(this)
    }
    async componentDidMount() {
        this.getImage()
    }
    async getImage() {
        this.setState({
            imgUrl: await dogService.getURL(),
        })
    }
    testDispatch() {
        this.props.addImage(this.state.imgUrl)
    }
    render() {
        let image
        if (this.state.imgUrl) {
            image = <img src={this.state.imgUrl} alt="Cat" />
        } else {
            image = <span>Loading...</span>
        }
        return (
            <div>
                <h1>This is a cat!</h1>
                <Button onClick={this.getImage} variant="contained" color="primary">
                    Get new
                </Button>
                <Button onClick={this.testDispatch} variant="contained" color="primary">
                    Say hello
                </Button>
                <hr></hr>
                {image}
            </div>
        )
    }
}

const mapDispatchToProps = {
    addImage,
}

export default connect(null, mapDispatchToProps)(DogsPage)
