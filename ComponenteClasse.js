'use strict';

const e = React.createElement;

class FormSoma extends React.Component {
    constructor(props){
        super(props)
    }

  
    render() {
        return e(
            
            <form>
                <div>
                    <label htmlFor="num1">Primeiro número:</label><br />
                    <input id="num1" type="number" value={this.props.num1} onChange={this.props.handleChange1} />
                </div>
                <div>
                    <label htmlFor="num2">Segundo número:</label><br />
                    <input id="num2" type="number" value={this.props.num2} onChange={this.props.handleChange2} />
                </div>
                <div>Soma: {this.props.soma}</div>
            </form>
            
        );
    }
}

const domContainer = document.getElementById('root');
ReactDOM.render(e(FormSoma), domContainer);