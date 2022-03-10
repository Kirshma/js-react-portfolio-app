import React from 'react';

class NumberInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            description: props.description,
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        //If the number is above 100 which translates to above 100%, then the number will be set to 100
        let numberValue = event.target.value;
        if (numberValue > 100) {
            numberValue = 100;
        } else if (numberValue < 10) {
            numberValue = 10;
        }
        this.setState({value : numberValue});
        //alert(this.state.value);
    }

    render() {

        /*
        The following code will check whether there's a numberValue saved, if there is, it will display the number as a
        percentage visualization in css else be empty.
         */
        let numberInput;
        if (this.state.value !== '') {
            numberInput = <div className="w3-container w3-center w3-round-xlarge w3-teal"
                               style={{width: this.state.value.toString() + "%"}}>
                {this.state.value.toString() + "%"}
            </div>;
        } else {
            numberInput = <div/>
        }
        /*
        Check if the current element is in edit mode or not and display it accordingly,
        the editView will be set by the App.js file and the data transported as props.
        The code manipulates the state of the css based on this classes state of the value which is transmitted by the user.
        Eg. if the percentage of this.state.value is higher the css will display a longer line.
         */
        if (this.props.editView) {
            return (
                <span>
                    {this.state.description}
                    <label htmlFor="">Skill Evaluation percentage (10-100): </label>
                    <input type="number" id="evaluation" name="evaluation" min="0" max="100"
                           onChange={this.handleChange}/>
                </span>
            );
        } else {
            return (
                <div className="w3-light-grey w3-round-xlarge w3-small">
                    {numberInput}
                </div>
            );
        }
    }
}

export default NumberInput;
