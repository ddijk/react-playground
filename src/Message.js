import React from 'react'

class Message extends React.Component {

    constructor(props) {
        super(props);
        this.state  = { msg : "wereld"}
    }

    update(e) {
        console.log('ddchangeIt called');
        this.setState({msg: e.target.value});
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.update.bind(this)}></input>
                <h1>hallo {this.state.msg} - {this.props.msg}</h1>
           </div>)
    }

}

export default Message