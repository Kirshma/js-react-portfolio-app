import React from 'react';

class TextInput extends React.Component {
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
                    {this.state.description}
                    <input type="text" value={this.state.value} style={{maxWidth: "100%"}}
                           onChange={this.handleChange}/>
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

export default TextInput;