import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { foxService } from '../services'

import { addImage } from '../redux/actions'

import Button from '@material-ui/core/Button'

function FoxesPage({ addImage }) {
    const [imgUrl, setImgUrl] = useState('')

    useEffect(() => {
        setNewImage()
    }, [])
    
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
        <div>
            <h1>This is a cat!</h1>
            <Button onClick={setNewImage} variant="contained" color="primary">
                Get new
            </Button>
            <Button onClick={() => addImage(imgUrl)} variant="contained" color="primary">
                Add image
            </Button>
            <hr></hr>
            {image}
        </div>
    )
}

const mapDispatchToProps = {
    addImage,
}

export default connect(null, mapDispatchToProps)(FoxesPage)
