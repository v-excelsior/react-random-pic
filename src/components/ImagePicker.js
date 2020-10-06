import React, { useCallback, useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { addImage } from '../redux/actions'

import Button from '@material-ui/core/Button'

function ImagePicker({ animalType, onGetUrl, addImage }) {
    const [imgUrl, setImgUrl] = useState('')

    const setNewImage = useCallback(async () => {
        setImgUrl(await onGetUrl())
    }, [onGetUrl])

    useEffect(() => {
        setNewImage()
    }, [setNewImage])

    const image = imgUrl
        ? <img src={imgUrl} alt={animalType}/>
        : <span>Loading...</span>

    return (
        <div className="page">
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

export default connect(null, mapDispatchToProps)(ImagePicker)
