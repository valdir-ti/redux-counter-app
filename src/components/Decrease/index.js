import React from 'react'

export const Decrease = () => {

    const handleDecrease = () => {
        alert('handle Decrease')
    }

    return (
        <div>
            <button className='button-decrease' onClick={handleDecrease}>
                Decrease
            </button>
        </div>
    )
}
