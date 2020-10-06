import React from 'react'

import { catService } from '../services'

import ImagePicker from '../components/ImagePicker'

export default function CatsPage() {
    const animalType = 'cat'

    return (
        <div className="page">
            <h2 className="page-title">This is a {animalType}!</h2>
            <ImagePicker animalType={animalType} onGetUrl={catService.getURL} />
        </div>
    )
}
