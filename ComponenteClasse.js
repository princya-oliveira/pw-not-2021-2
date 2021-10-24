'use strict';

const e = React.createElement;

class FormSoma extends React.Component {
    constructor(props){
        super(props);
        this.state = {  };
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

// encontrar a div 'root' do arquivo html e mostrar 
// o componente de classe dentro dela
const domContainer = document.querySelector('#root');
ReactDOM.render(e(FormSoma), domContainer);