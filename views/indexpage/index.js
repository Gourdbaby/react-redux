require('./style.less');

import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import reducer from './reducer/index.js';
import { actions } from './action.js';

const store = createStore(reducer);

class App extends React.Component{
    constructor(props){
        super(props)
        console.log(props)
        this.handle = this.handle.bind(this);
        this.inputHandle = this.inputHandle.bind(this);
    }
    handle(){
        let {dispatch, todo1, todo2} = this.props;
        dispatch(actions('init',[{name:todo2,value:"1"}]))
    }
    inputHandle(e){
        let {dispatch, todo1, todo2} = this.props;
        dispatch(actions('inputText',e.target.value))
    }
    render(){
        let {dispatch, todo1, todo2} = this.props;
        let arr = [];
        todo1.forEach((item,index) => {
            arr.push(
                <li key={item.value+index}>{item.name}</li>
            )
        })
        return <div>
            <input type="text" value={todo2} onChange={e => this.inputHandle(e) } />
             <ul>
                {arr}
            </ul> 
            <button onClick={ this.handle }>按钮</button>
        </div>
    }
}

function select(state) {
    return {
        todo1: state.todoReducer1,
        todo2: state.todoReducer2
    };
}
let App1 = connect(select)(App);

window.onload=function(){
    let root = document.getElementById('root');
    ReactDOM.render(
        <Provider store={store}>
            <App1 />
        </Provider>,
        root
    )
}