import React from 'react';
import TimelineBoxTopic from "./TimelineBoxTopic";
import TimelineBoxItem from "./TimelineBoxItem";

class TimelineBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            timelineBoxCount: 0,
        };
        this.increaseItemCount = this.increaseItemCount.bind(this);
    }

    increaseItemCount() {
        this.setState({
            timelineBoxCount: this.state.timelineBoxCount + 1,
        });
    }

    renderInfo() {
        let items = [];
        for (let i = 0; i < this.state.timelineBoxCount; i++) {
            items.push(<TimelineBoxItem editView={this.props.editView}/>);
        }
        const listItems = items.map((item) => <div>{item}</div>);
        return (
            <div>
                {listItems}
            </div>
        )
    }

    render() {
        let addingButton = <button onClick={this.increaseItemCount}> Add more info </button>;
        if (!this.props.editView) {
            addingButton = <span/>
        }
        const info = this.renderInfo();
        return (
            <div className="w3-container w3-card w3-white w3-margin-bottom">
                <TimelineBoxTopic editView={this.props.editView}/>
                <TimelineBoxItem editView={this.props.editView}/>
                {info}
                {addingButton}
            </div>

        );
    }
}

export default TimelineBox;
