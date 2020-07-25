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
                <Button onClick={() => this.props.addImage(this.state.imgUrl)}
                    variant="contained"
                    color="primary">
                    Add image
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
