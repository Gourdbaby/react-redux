

import { ActionsType } from '../action.js'

function todoRducer1(state={},action){
    if(!state.init){
        state.init = []
    }
    let returnobj = {
        init: state.init
    }
    switch(action.type){
        case ActionsType.init:
            let data = action.data;
            let Newstate = data.map((item) => {
                return {name:item.name, value:item.value, id: item.id}
            })
            returnobj.init = [...state.init, ...Newstate]
            return returnobj;
        break;
        case ActionsType.inputText:
            let value = action.data.value;
            let id = action.data.id;
            let init = returnobj.init;
            init.forEach(element => {
                if(element.id == id){
                    element.value = value
                }
            });
            return returnobj;
        break;
        default :
            return state;
    }
}

export default todoRducer1;