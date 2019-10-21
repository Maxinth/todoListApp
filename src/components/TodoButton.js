import React, { Component } from 'react'

export class TodoButton extends Component {
    render() {
        const { text, theme, val } = this.props;
        return (
                <button className={`btn btn-outline-${theme}`} 
                        onClick={() => this.props.callback(val)}>
                    { text }
                </button>
        )
    }
}

export default TodoButton

