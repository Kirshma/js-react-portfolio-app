import React from 'react';

class TextAreaInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            description: props.description,
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        if (this.props.editView) {
            return (
                <div>
                    <label htmlFor="info">{this.state.description}</label>
                    <textarea value={this.state.value} id="info" name="info" style={{maxWidth: "100%"}} onChange={this.handleChange}>
                    </textarea>
                </div>
            );
        } else {
            return (
                <div>
                    {this.state.value}
                </div>
            );
        }
    }
}

export default TextAreaInput;
