function todoRducer2(state=[],action){
    switch(action.type){
        case 'inputText':
            return action.data;
        default :
            return state;
    }
}

export default todoRducer2;