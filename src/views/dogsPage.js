import React from 'react'

import { dogService } from '../services'

import ImagePicker from '../components/ImagePicker'

function DogsPage() {
    const animalType = 'dog'

    async function GetUrlFromService() {
        return await dogService.getURL()
    }

    return (
        <div className="page">
            <h2 className="page-title">This is a {animalType}!</h2>
            <ImagePicker animalType={animalType} onGetUrl={GetUrlFromService} />
        </div>
    )
}

export default DogsPage
