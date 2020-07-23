import React from 'react'
import { dogService } from '../services'

import { connect } from 'react-redux'
import { sayHello } from '../redux/actions'

import Button from '@material-ui/core/Button'

class DogsPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            imgUrl: '',
        }
        this.getImage = this.getImage.bind(this)
        this.x = this.x.bind(this)
    }
    async componentDidMount() {
        this.getImage()
    }
    async getImage() {
        this.setState({
            imgUrl: await dogService.getURL(),
        })
    }

    async x() {
        const { dispatch } = this.props
        dispatch(sayHello())
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
                <Button onClick={this.getImage} color="inherit">
                    Get new
                </Button>
                <button onClick={this.x} color="inherit">
                    Say hello
                </button>
                <hr></hr>
                {image}
            </div>
        )
    }
}

export default connect()(DogsPage)
