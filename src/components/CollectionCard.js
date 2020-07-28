import React from 'react'
import { connect } from 'react-redux'
import { deleteImage } from '../redux/actions'

function CollectionCard({ imageUrl, deleteImage }) {
    return (
        <div className="collection-card">
            <button className="collection-card__delete-btn" onClick={() => deleteImage(imageUrl)} />
            <img src={imageUrl} className="collection-card__image" alt="Collection card" />
        </div>
    )
}

const mapDispatchToProps = {
    deleteImage,
}

export default connect(null, mapDispatchToProps)(CollectionCard)
