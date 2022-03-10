import React from 'react';
import EvaluationItem from "./EvaluationItem";
import TextInput from "../inputFields/TextInput";

class EvaluationBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            evaluationBoxCount: 0,
        };
        this.increaseItemCount = this.increaseItemCount.bind(this);
    }

    increaseItemCount() {
        this.setState({
            evaluationBoxCount: this.state.evaluationBoxCount + 1,
        });
    }

    renderInfo() {
        let items = [];
        for (let i = 0; i < this.state.evaluationBoxCount; i++) {
            items.push(<EvaluationItem editView={this.props.editView}/>);
        }
        const listItems = items.map((item) => <div>{item}</div>);
        return (
            <div>
                {listItems}
            </div>
        )
    }

    render() {
        let button;
        if (this.props.editView) {
            button =
                <div>
                    <button onClick={this.increaseItemCount}> Add more evaluation items</button>
                </div>
        } else {
            button = <div/>
        }
        const info = this.renderInfo();
        return (
            <div>
                <p className="w3-large"><b><i
                    className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"/>
                    <TextInput description={"Skill Evaluation Topic: "} editView={this.props.editView}/></b>
                </p>
                <EvaluationItem editView={this.props.editView}/>
                {info}
                <br/>
                {button}
            </div>
        );
    }
}

export default EvaluationBox;
