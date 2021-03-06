import React, { Component } from 'react'
import './blockTitle.scss'

export default class BlockTitle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "Title",
            whileInput: false  // state that detect if user is inputting right now
        }
    }

    componentDidMount() {
        if (this.props.title !== "") {
            this.setState({
                title: this.props.title
            })
        }
    }

    // When user click the description, it would allow user to modify the content
    handleClick = () => {
        this.setState({
            whileInput: true
        });
    }

    // When the description lose its focus, user is not allowed to modify
    handleBlur = (e) => {
        e.preventDefault();
        this.setState({
            whileInput: false
        });
    }

    // Save the content of title(frontend)
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // Sync the modified content to collection
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onChangeTitle(this.state.title, this.props.time);
        this.setState({
            whileInput: false
        });
    }

    render() {
        let title;
        if (this.state.whileInput === false) {
            title = <div onClick={this.handleClick}> {this.props.title === '' ? "Title" : this.props.title} </div>
        } else {
            title =
                <form onSubmit={this.handleSubmit} >
                    <input
                        type="text"
                        name="title"
                        className="input-field title-input"
                        autoComplete="off"
                        value={this.state.title}
                        onChange={this.handleChange}
                        autoFocus
                    />
                </form>
        }
        return (
            <div className="block-title" onBlur={this.handleBlur}>
                {title}
            </div>
        )
    }
}