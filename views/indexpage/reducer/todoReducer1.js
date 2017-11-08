function todoRducer1(state=[],action){
    switch(action.type){
        case 'init':
            let Newstate = action.data.map((item) => {
                return {name:item.name, value:item.value, newstate:true}
            })
            return [...state,...Newstate];
        default :
            return state;
    }
}

export default todoRducer1;