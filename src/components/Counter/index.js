import React, { useState } from 'react'
import { useSelector } from 'react-redux'

export const Counter = () => {
  
    const counter = useSelector(state => state.counter)

    return (
        <div>
            <h2 className='counter'>
                {counter}
            </h2>
        </div>
    )
}
