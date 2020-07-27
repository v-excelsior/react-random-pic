import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { foxService } from '../services'

import { addImage } from '../redux/actions'

import Button from '@material-ui/core/Button'

function FoxesPage({ addImage }) {
    const animalType = 'fox'

    const [imgUrl, setImgUrl] = useState('')

    useEffect(() => {
        setNewImage()
    }, [])

    async function setNewImage() {
        let url = await foxService.getURL()
        setImgUrl(url)
    }

    let image
    if (imgUrl) {
        image = <img src={imgUrl} alt="Dog" />
    } else {
        image = <span>Loading...</span>
    }

    return (
        <div className="page">
            <h2 className="page-title">This is a cat!</h2>
            <hr></hr>
            <div className="control-wrapper">
                <Button
                    className="control-btn"
                    onClick={setNewImage}
                    variant="contained"
                    color="primary"
                >
                    Get new
                </Button>
                <Button
                    className="control-btn"
                    onClick={() => addImage(imgUrl, animalType)}
                    variant="contained"
                    color="primary"
                >
                    Add image
                </Button>
            </div>

            {image}
        </div>
    )
}

const mapDispatchToProps = {
    addImage,
}

export default connect(null, mapDispatchToProps)(FoxesPage)
