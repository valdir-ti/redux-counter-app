import { INCREASE_COUNTER, DECREASE_COUNTER } from '../../constants'

export const increase = () => {
    return {
        type: INCREASE_COUNTER
    }
}

export const decrease = () => {
    return {
        type: DECREASE_COUNTER
    }
}