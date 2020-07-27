import React from 'react'
import { connect } from 'react-redux'

function CollectionPage({ collection }) {
    return (
        <div>
            <h1>All images from collection</h1>
            <hr />
            {/* eslint-disable */}
            {collection.map((imageUrl, i) => (
                <img
                    key={i}
                    src={imageUrl}
                    className="collection-card__image"
                    alt="Here must be an image,but somethink went wrong ;("
                />
            ))}
            {/* eslint-enable */}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        collection: state.collection.collection,
    }
}

export default connect(mapStateToProps, null)(CollectionPage)
