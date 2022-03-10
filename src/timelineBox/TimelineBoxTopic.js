import React from 'react';
import TextInput from "../inputFields/TextInput";


function TimelineBoxTopic(props) {
    return (
        <div>
            <h2 className="w3-text-grey w3-padding-16">
                <i className="fa fa-globe fa-fw w3-margin-right w3-text-teal"/>
                <TextInput description={"Title/Topic: "} editView={props.editView}/>
            </h2>
        </div>
    );
}

export default TimelineBoxTopic;
