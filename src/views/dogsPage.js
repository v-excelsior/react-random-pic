import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { dogService } from '../services'
import { addImage } from '../redux/actions'

import Button from '@material-ui/core/Button'

function DogsPage({ addImage }) {
    const animalType = 'dog'

    const [imgUrl, setImgUrl] = useState('')

    useEffect(() => {
        setNewImage()
    }, [])

    async function setNewImage() {
        let url = await dogService.getURL()
        setImgUrl(url)
    }

    let image
    if (imgUrl) {
        image = <img src={imgUrl} alt={animalType} />
    } else {
        image = <span>Loading...</span>
    }

    return (
        <div className="page">
            <h2 className="page-title">This is a {animalType}!</h2>

            <hr></hr>
            <div className="control-wrapper">
                <Button onClick={setNewImage} variant="contained" color="primary">
                    Get new
                </Button>
                <Button
                    onClick={() => addImage(imgUrl, animalType)}
                    variant="contained"
                    color="primary"
                    disabled={!imgUrl}
                >
                    Save image
                </Button>
            </div>
            {image}
        </div>
    )
}

const mapDispatchToProps = {
    addImage,
}

export default connect(null, mapDispatchToProps)(DogsPage)
