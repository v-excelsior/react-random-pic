import React from 'react'
import CollectionCard from '../components/CollectionCard'
import { connect } from 'react-redux'

function CollectionPage({ collection }) {
    return (
        <div className="collection">
            <h2 className="page-title">All images from collection</h2>
            <div className="collection-list">
                {collection.map((item, i) => (
                    <CollectionCard imageUrl={item.url} key={i} animal={item.animal} />
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        collection: state.collection.collection,
    }
}
export default connect(mapStateToProps, null)(CollectionPage)
