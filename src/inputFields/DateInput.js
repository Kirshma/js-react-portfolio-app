import React from 'react';

class DateInput extends React.Component {
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
                <span>
                    {this.state.description}
                    <input type="date" id="start" name="trip-start" value={this.state.value}
                           onChange={this.handleChange}/>
                </span>
            );
        } else {
            return (
                <span>
                    {this.state.value.toString().substr(0, 7)}
                </span>
            );
        }
    }
}

export default DateInput;