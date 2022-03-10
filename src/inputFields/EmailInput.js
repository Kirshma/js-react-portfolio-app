import React from 'react';

class EmailInput extends React.Component {
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
                    <label htmlFor="email">{this.state.description}</label>
                    <input
                        value={this.state.value}
                        type="email"
                        id="email"
                        pattern=".+@.+"
                        style={{maxWidth: "100%"}}
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

export default EmailInput;

