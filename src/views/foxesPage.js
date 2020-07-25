import React, { useState, useEffect } from 'react'
import { foxService } from '../services'

import Button from '@material-ui/core/Button'

function FoxesPage() {

    const [imgUrl, setImgUrl] = useState('');

    useEffect(() => { setNewImage() }, []);

    async function setNewImage() {
        let url = await foxService.getURL()
        setImgUrl(url)
    }

    return (
        <div>
            <h1>This is a cat!</h1>
            <Button onClick={setNewImage}
                variant="contained" color="primary">
                Get new
            </Button>
            <hr></hr>
            <img src={imgUrl} alt="Fox" />
        </div >
    )

}

export default FoxesPage
