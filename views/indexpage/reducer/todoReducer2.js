

import { ActionsType } from '../action.js'

function todoRducer2(state={},action){
    switch(action.type){
        case ActionsType.inputText:
            return action.data;
        default :
            return state;
    }
}

export default todoRducer2;