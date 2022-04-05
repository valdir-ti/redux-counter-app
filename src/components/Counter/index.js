import React, { useState } from 'react'

export const Counter = () => {
  
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <h2 className='counter'>
                {counter}
            </h2>
        </div>
    )
}
