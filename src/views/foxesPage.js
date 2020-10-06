import React from 'react'

import { foxService } from '../services'

import ImagePicker from '../components/ImagePicker'

export default function FoxesPage() {
    const animalType = 'fox'

    return (
        <div className="page">
            <h2 className="page-title">This is a {animalType}!</h2>
            <ImagePicker animalType={animalType} onGetUrl={() => foxService.getURL()}/>
        </div>
    )
}
