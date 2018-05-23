import React, {Component, PropTypes} from 'react'
import classnames from 'classnames'
class TodoTextInput extends Component{
    render(){
        return(
            <input
                type="text"
                autoFocus="true"
                placeholder="What needs to be done?"
                className="new-todo"
                />
        )
    }
    render(){
        return(
            <input className="new-todo"
                type="text"
                placeholder="What needs to be done?"
                autoFocus="true"
                onKeyDown={this.handleSubmit.binf(this)}
                />
        )
    }
}
export default class TodoTextInput extends Component{
    handleSubmit = e => {
        const text = e.target.value.trim()
        if(e.which === 13){
            this.props.onSave(text)
        }

    }
    render(){
        return(
            <input className="new-todo"
                    type="text"
                    placeholder="What needs to be done?"
                autoFocus="true"
                onKeyDown={this.handleSubmit}/>
        )
    }
}