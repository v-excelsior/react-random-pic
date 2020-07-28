import React from 'react'
import { connect } from 'react-redux'

function CollectionPage({ collection, animals }) {
    return (
        <div>
            <h2 className="page-title">All images from collection</h2>
            {collection.map((imageUrl, i) => (
                <img
                    key={i}
                    src={imageUrl}
                    className="collection-card__image"
                    alt="Collection card"
                />
            ))}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        collection: state.collection.collection,
        animals: state.collection.animals,
    }
}
export default connect(mapStateToProps, null)(CollectionPage)
