import React from 'react'

class CollectionPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.getImage = this.getImage.bind(this)
    }

    render() {
        return (
            <div>
                <h1>This is a cat!</h1>
                <Button onClick={this.getImage} color="inherit">
                    Get new
                </Button>
                <hr></hr>
            </div>
        )
    }
}

export default CollectionPage
