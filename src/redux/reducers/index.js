import { INCREASE_COUNTER, DECREASE_COUNTER } from '../../constants'

const counter = ( state = {counter: 0} , action ) => {
    switch(action.type) {
        case INCREASE_COUNTER:
            return {
                ...counter,
                counter: state.counter + 1
            }
        case DECREASE_COUNTER: 
            return {
                ...counter, 
                counter: state.counter - 1
            }
        default: 
            return state
    }
}

export default counter