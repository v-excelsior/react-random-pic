import React from 'react'
import { connect } from 'react-redux'

function AnimalCounter({ animals }) {
    function countAnimalByType(type) {
        console.log(type)
    }
    return (
        <div className="animal-counter-list">
            <span className="animal-counter">Cats : {countAnimalByType('cat')}</span>
            <span className="animal-counter">Dogs : {countAnimalByType('cat')}</span>
            <span className="animal-counter">Foxes : {countAnimalByType('cat')}</span>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        collection: state.collection.collection,
    }
}
export default connect(mapStateToProps, null)(AnimalCounter)
