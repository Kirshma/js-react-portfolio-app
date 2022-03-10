import React from 'react';
import TextInput from "../inputFields/TextInput";
import NumberInput from "../inputFields/NumberInput";

/**
 * EvaluationItem as a function instead of a class/component since code is more concise and there's no need for state
 * Structure: "function EvaluationItem(props) {" is equivalent to: "class EvaluationItem extends React.Component {" without state
 * Returns the JSX view for a (skill) evaluation item object which is a combination of a TextInput and NumberInput field
 * Multiple EvaluationItems are bundled in an EvaluationBox
 * Props are the properties send from the state of App.js and this function acts as an observer by asking for those props according to the observer pattern
 */
function EvaluationItem(props) {

    return (
        <div>
            <p><TextInput description={"Skill Evaluation Subtopic: "} editView={props.editView}/></p>
            <NumberInput editView={props.editView}/>
        </div>
    );
}

export default EvaluationItem;
