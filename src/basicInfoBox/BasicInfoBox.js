import React from 'react';
import TextInput from "../inputFields/TextInput";
import EmailInput from "../inputFields/EmailInput";

function BasicInfoBox(props) {
    return (
        <div>
            <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"/>
                <TextInput description={"Profession Title: "} editView={props.editView}/>
            </p>
            <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"/>
                <TextInput description={"Residence: "} editView={props.editView}/></p>
            <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"/>
                <EmailInput description={"E-Mail: "} editView={props.editView}/>
            </p>
            <p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"/>
                <TextInput description={"Phone Number: "} editView={props.editView}/>
            </p>
        </div>
    );
}

export default BasicInfoBox;
