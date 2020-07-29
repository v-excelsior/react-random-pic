import React from 'react'

import { foxService } from '../services'

import ImagePicker from '../components/ImagePicker'

function FoxesPage() {
    const animalType = 'dog'

    async function GetUrlFromService() {
        return await foxService.getURL()
    }

    return (
        <div className="page">
            <h2 className="page-title">This is a {animalType}!</h2>
            <ImagePicker animalType={animalType} onGetUrl={GetUrlFromService} />
        </div>
    )
}

export default FoxesPage
