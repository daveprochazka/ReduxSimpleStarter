import React, {Component, button} from 'react';

const WARNING_MESSAGE = 'This is a warning message!';

class ButtonWarning extends Component{

    render(){
        return(
            <button onClick={this.onClickButtonDisplayWarning}>I'm A Button</button>
        );
    }

    onClickButtonDisplayWarning(event){
        alert(WARNING_MESSAGE);
    }
}

export default ButtonWarning;