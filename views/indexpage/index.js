require('./style.less');

import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import reducer from './reducer/index.js';
import { actions } from './action.js';

const store = createStore(reducer);

let num = 0;
class App extends React.Component{
    constructor(props){
        super(props)
        this.handle = this.handle.bind(this);
        this.inputHandle = this.inputHandle.bind(this);
    }
    handle(){
        let { motionFn1 } = this.props;
        let plus = ++num;
        motionFn1([{name: "smx", value: plus, id: plus}])
    }
    inputHandle(e, id){
        let { motionFn2 } = this.props;
        let data = {
            value : e.target.value,
            id: id
        }
        motionFn2(data)
    }
    render(){
        let { todo1 } = this.props;
        let data = todo1.init;

        let inputs = data.map(item => {
            return <input type="text" value={ item.value } onChange={e => this.inputHandle(e, item.id) } />
        })
        return <div>
             { inputs }
            <button onClick={ this.handle }>按钮</button>
        </div>
    }
}

function mapStateToProps(state) {
    return {
        todo1: state.todoReducer1,
        todo2: state.todoReducer2
    };
}
function mapDispatchToProps(dispatch){
    return {
        motionFn1:(data) => dispatch(actions('init', data)),
        motionFn2:(data) => dispatch(actions('inputText', data))
    }
}
let App1 = connect(mapStateToProps, mapDispatchToProps)(App);

window.onload=function(){
    let root = document.getElementById('root');
    ReactDOM.render(
        <Provider store={store}>
            <App1 />
        </Provider>,
        root
    )
}