import React from 'react'
import { connect } from 'react-redux'

class CollectionPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>
                <h1>All images from collection</h1>
                <hr />
                {this.props.collection.map((imageUrl, i) => (
                    <img
                        key={i}
                        src={imageUrl}
                        className="collection-card__image"
                        alt="Here must be an image,but somethink went wrong ;("
                    />
                ))}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        collection: state.collection.collection,
    }
}

export default connect(mapStateToProps, null)(CollectionPage)
