require('./style.less');


class App extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div>
            <input type="text" value="222" />
            <button>按钮</button>
        </div>
    }
}

window.onload=function(){
    let root = document.getElementById('root');
    ReactDOM.render(
        <App/>,
        root
    )
}