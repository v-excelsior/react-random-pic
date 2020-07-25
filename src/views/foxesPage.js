import React, { useState } from 'react'
import { foxService } from '../services'

import Button from '@material-ui/core/Button'

function FoxesPage() {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         imgUrl: '',
    //     }
    //     this.getImage = this.getImage.bind(this)
    // }
    const [imgUrl, setImgUrl] = useState('');

    // async componentDidMount() {
    //     this.getImage()
    // }
    async function getImage() {
        let url = await foxService.getURL()
        setImgUrl(url)
    }
    return (
        <div>
            <h1>This is a cat!</h1>
            <Button onClick={getImage} variant="contained" color="primary">
                Get new
                </Button>
            <hr></hr>
            <img src={imgUrl} alt="Fox" />
        </div>
    )

}

export default FoxesPage
