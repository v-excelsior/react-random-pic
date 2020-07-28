import React from 'react'

function CollectionCard(props) {
    return (
        <div className="collection-card">
            <img src={props.imageUrl} className="collection-card__image" alt="Collection card" />
        </div>
    )
}

export default CollectionCard
