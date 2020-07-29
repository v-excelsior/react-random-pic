import React from 'react'
import { connect } from 'react-redux'

import { getAnimalObjectCountByType } from '../redux/selectors'

function AnimalCounter({ catsCount, dogsCount, foxesCount }) {
    return (
        <div className="animal-counter-list">
            <span className="animal-counter">Cats : {catsCount}</span>
            <span className="animal-counter">Dogs : {dogsCount}</span>
            <span className="animal-counter">Foxes : {foxesCount}</span>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        catsCount: getAnimalObjectCountByType(state.collection.collection, 'cat'),
        dogsCount: getAnimalObjectCountByType(state.collection.collection, 'dog'),
        foxesCount: getAnimalObjectCountByType(state.collection.collection, 'fox'),
    }
}
export default connect(mapStateToProps, null)(AnimalCounter)
