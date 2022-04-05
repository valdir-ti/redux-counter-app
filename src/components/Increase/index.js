import React from 'react'

export const Increase = () => {

    const handleIncrease = () => {
        alert('handle Increase')
    }

    return (
        <div>
            <button className='button-increase' onClick={handleIncrease}>
                Increase
            </button>
        </div>
    )
}
