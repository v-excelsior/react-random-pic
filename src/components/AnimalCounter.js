import React from 'react'
import { connect } from 'react-redux'

function AnimalCounter({ animals }) {
    return (
        <div className='animal-counter-list'>
            <span className='animal-counter'>Cats : {animals.cat}</span>
            <span className='animal-counter'>Dogs : {animals.dog}</span>
            <span className='animal-counter'>Foxes : {animals.fox}</span>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        animals: state.collection.animals,
    }
}
export default connect(mapStateToProps, null)(AnimalCounter)
