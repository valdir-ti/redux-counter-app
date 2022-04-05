import React from 'react'
import { useDispatch } from 'react-redux'
import { decrease } from '../../redux/actions'

export const Decrease = () => {

    const dispatch = useDispatch()

    return (
        <div>
            <button className='button-decrease' onClick={() => dispatch(decrease())} title="Decrease counter">
                Decrease
            </button>
        </div>
    )
}
