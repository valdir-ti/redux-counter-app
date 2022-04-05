import React from 'react'
import { useDispatch } from 'react-redux'
import { increase } from '../../redux/actions'

export const Increase = () => {

    const dispatch = useDispatch()

    const handleIncrease = () => {
        dispatch(increase())
    }

    return (
        <div>
            <button className='button-increase' onClick={handleIncrease} title="Increase counter">
                Increase
            </button>
        </div>
    )
}
