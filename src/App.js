import React from 'react';
import Footer from './footer/Footer';
import TimelineBox from './timelineBox/TimelineBox';
import BasicInfoBox from "./basicInfoBox/BasicInfoBox";
import EvaluationBox from "./evaluationBox/EvaluationBox";
import ImageInput from "./inputFields/ImageInput";


//This class manages the portfolio app which currently is the only app
//Check the image file "Classes & Components Visualized.png" to get an understanding of the class structure
class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            timelineBoxCount : 0,
            evaluationBoxCount : 0,
            editView : true,
            portfolioName : '',
        };
        this.toggleEditView = this.toggleEditView.bind(this); //Otherwise toggleEditView() function won't know what "this" refers to
        this.increaseTimelineBoxCount = this.increaseTimelineBoxCount.bind(this);
        this.increaseEvaluationBoxCount = this.increaseEvaluationBoxCount.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({portfolioName: event.target.value});
    }

    increaseTimelineBoxCount() {
        this.setState({
            timelineBoxCount : this.state.timelineBoxCount+1,
        });
    }

    increaseEvaluationBoxCount() {
        this.setState({
            evaluationBoxCount : this.state.evaluationBoxCount+1,
        });
    }

    renderTopics() {
        let items = [];
        for (let i = 0 ; i < this.state.timelineBoxCount ; i++) {
            items.push(<TimelineBox editView={this.state.editView}/>);
        }
        const listItems = items.map( (item) => <div>{item}</div>);
        return (
            <div className="w3-twothird">
            {listItems}
            </div>
        )
    }

    renderEvaluationBoxes() {
        let evaluations = [];
        for (let i = 0 ; i < this.state.evaluationBoxCount ; i++) {
            evaluations.push(<div><EvaluationBox editView={this.state.editView}/><br/></div>);
        }
        const evaluationBoxes = evaluations.map( (ev) => <div>{ev}</div>);
        return (
            <div>
                {evaluationBoxes}
            </div>
        )

    }

    toggleEditView() {
        this.setState({
                editView : !this.state.editView,
            }
        );
    }

    render() {
        const evaluationBoxes = this.renderEvaluationBoxes();
        const topics = this.renderTopics();
        let name = <span>Your Name: <input type="text" value={this.state.value} style={{maxWidth: "100%"}} onChange={this.handleChange} /></span>;
        if(!this.state.editView){
            name = <span/>
        }
        let evaluationAddingButton = <button onClick={this.increaseEvaluationBoxCount}> Add more evaluation boxes </button>;
        let timelineAddingButton = <button onClick={this.increaseTimelineBoxCount}> Add another topic </button>;
        if (!this.state.editView) {
            evaluationAddingButton = <span/>;
            timelineAddingButton = <span/>;
        }
        return (
                <body className="w3-light-grey">
                {/* Button that updates all components' editView */}
                <button onClick={this.toggleEditView}> Toggle Edit View </button>
                {/* Page Container */}
                <div className="w3-content w3-margin-top" style={{maxWidth: "1400px"}}>
                    {/* The Grid */}
                    <div className="w3-row-padding">
                        {/* Left Column */}
                        <div className="w3-third">
                            <div className="w3-white w3-text-grey w3-card-4">
                                <ImageInput portfolioName={this.state.portfolioName} editView={this.state.editView}/>
                                <div className="w3-container">
                                    {name}
                                    <BasicInfoBox editView={this.state.editView}/>
                                    <hr/>
                                    <EvaluationBox editView={this.state.editView}/>
                                    <br/>
                                    {evaluationBoxes}
                                    <p>{evaluationAddingButton}</p>
                                    <br/>
                                </div>
                            </div>
                            <br/>
                            {/* End Left Column */}
                        </div>
                        {/* Right Column */}
                        <div className="w3-twothird">
                        <TimelineBox editView={this.state.editView}/>
                        </div>
                        {topics}
                        <div className="w3-twothird">
                            <div className="w3-container w3-card w3-white w3-margin-bottom">
                                {timelineAddingButton}
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
                </body>
        );
    }
}

export default App;
