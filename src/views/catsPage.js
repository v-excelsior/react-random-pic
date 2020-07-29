import React from 'react'

import { catService } from '../services'

import ImagePicker from '../components/ImagePicker'

function CatsPage() {
    const animalType = 'dog'

    async function GetUrlFromService() {
        return await catService.getURL()
    }

    return (
        <div className="page">
            <h2 className="page-title">This is a {animalType}!</h2>
            <ImagePicker animalType={animalType} onGetUrl={GetUrlFromService} />
        </div>
    )
}

export default CatsPage
