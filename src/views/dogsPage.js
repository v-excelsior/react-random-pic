import React from 'react'

import { dogService } from '../services'

import ImagePicker from '../components/ImagePicker'

export default function DogsPage() {
    const animalType = 'dog'

    return (
        <div className="page">
            <h2 className="page-title">This is a {animalType}!</h2>
            <ImagePicker animalType={animalType} onGetUrl={() => dogService.getURL()}/>
        </div>
    )
}
