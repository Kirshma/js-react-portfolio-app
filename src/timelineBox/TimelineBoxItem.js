import React from 'react';
import TextInput from "../inputFields/TextInput";
import DateInput from "../inputFields/DateInput";
import TextAreaInput from "../inputFields/TextAreaInput";

/**
 * This class represents one TimelineBoxItem which is bundled together with other instances in the timelineBox.js class
 * TimelineBoxItem.js holds a TextInput that acts as a Subtitle/Topic field, a DateInput that displays a "from date" and "until date"
 * as well as another TextInput for a description of the TimelineBoxItem set by the user
 */
class TimelineBoxItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            additional: this.props.additional,
            description: props.description,
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        let dateInput = <h6 className="w3-text-teal">
                <i className="fa fa-calendar fa-fw w3-margin-right"/>
                <span> from </span>
                <DateInput editView={this.props.editView}/>
                <span> until  </span>
                <DateInput editView={this.props.editView}/>
            </h6>;
        return (
            <div>
                <hr/>
                <h5 className="w3-opacity">
                    <b>
                        <TextInput description={"Subtitle/Subtopic: "} editView={this.props.editView}/>
                    </b>
                </h5>
                {dateInput}
                <p>
                    <TextAreaInput description={"Text about your topic: "} editView={this.props.editView}/>
                </p>
            </div>
        );
    }
}
export default TimelineBoxItem;
