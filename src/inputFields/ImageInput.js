import React from 'react';
import avatar from "../resources/avatar_hat.jpg";
import logo from "../resources/logo512.png";

class ImageInput extends React.Component {
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
                <div className="w3-display-container">
                    <img src={logo} style={{width: "100%"}} alt="Avatar"/>
                    <div className="w3-display-bottomleft w3-container w3-text-black">
                        <h2>{this.props.portfolioName}</h2>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="w3-display-container">
                    <img src={avatar} style={{width: "100%"}} alt="Avatar"/>
                    <div className="w3-display-bottomleft w3-container w3-text-black">
                        <h2>{this.props.portfolioName}</h2>
                    </div>
                </div>
            );
        }
    }
}

export default ImageInput;
