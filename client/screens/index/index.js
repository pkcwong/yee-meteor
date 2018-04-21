import React from 'react';
import { ListGroup, ListGroupItem, DropdownButton, MenuItem, ButtonToolbar, Button, Modal, FormGroup, InputGroup, FormControl} from 'react-bootstrap';

export class Index extends React.Component {
  
    constructor(props) {
        super(props);
	    this.state = {
	    	text: '',
		    title: '',
		    razor: {},
		    titleType: 'Text Type',
		    referenceModal: {
			    show: false
		    }
	    };
	    this.interval = null;
    }

    render() {
        return (
        	<div className="index">
		        <div class="left-container">
			        <div class="header">
			           <div class="header-icon">
			            <img src="/img/yee.png"
			                 alt="logo.png"
			                 height="82"
			                 onChange={(event) => {
				                 this.setState({
					                 title: event.target.value
				                 });
			                 }}/>
				        </div>
				        <div className="header-buttons">
					        <input type="title" placeholder="Type Your Title Here"/>
					        <div className="buttonGroup">
						        <button className="custom-button">
							        File
						        </button>
						        <button className="custom-button">
							        Edit
						        </button>
						        <button className="custom-button">
							        Insert
						        </button>
						        <button className="custom-button">
							        Format
						        </button>
						        <button className="custom-button">
							        Tools
						        </button>
						        <button className="custom-button" onClick={() => {
							        this.setState({
								        referenceModal: {
									        show: true
								        }
							        });
						        }}>
							        Reference
						        </button>
						        <button className="custom-button">
							        Help
						        </button>
						        <ButtonToolbar>
							        <DropdownButton
								        bsStyle="default"
								        title= {this.state.titleType}
								        noCaret
								        id="dropdown-no-caret"
								        onSelect={
									        (eventKey) => {
									        	if(eventKey == '2'){
									        		this.setState({
												        titleType: "Report Writing"
											        });
											        $("#writing").html("<b>Contents (Table of Contents)</b><br/>" +
												        "The contents page should list the different chapters and/or headings together with the page numbers. Your contents page should be presented in such a way that the reader can quickly scan the list of headings and locate a particular part of the report. You may want to number chapter headings and subheadings in addition to providing page references. Whatever numbering system you use, be sure that it is clear and consistent throughout. <br/>" +
												        "<br/><b>Introduction: </b><br/>" +
												        "The introduction sets the scene for the main body of the report. The aims and objectives of the report should be explained in detail. Any problems or limitations in the scope of the report should be identified, and a description of research methods, the parameters of the research and any necessary background history should be included. </br>" +
												        "<br/><b>Methods</b></br>" +
												        "Information under this heading may include: a list of equipment used; explanations of procedures followed; relevant information on materials used, including sources of materials and details of any necessary preparation; reference to any problems encountered and subsequent changes in procedure. <br/>" +
												        "<br/><b>Result</b><br/>" +
												        "This section should include a summary of the results of the investigation or experiment together with any necessary diagrams, graphs or tables of gathered data that support your results. Present your results in a logical order without comment. Discussion of your results should take place in the main body (Discussion) of the report. <br/>" +
												        "<br/><b>Discussion</b><br/>" +
												        "The main body of the report is where you discuss your material. The facts and evidence you have gathered should be analysed and discussed with specific reference to the problem or issue. If your discussion section is lengthy you might divide it into section headings. Your points should be grouped and arranged in an order that is logical and easy to follow. Use headings and subheadings to create a clear structure for your material. Use bullet points to present a series of points in an easy-to-follow list. As with the whole report, all sources used should be acknowledged and correctly referenced.<br/>" +
												        "<br/><b>Bibliography</b><br/>" +
												        "Your bibliography should list, in alphabetical order by author, all published sources referred to in your report. There are different styles of using references and bibliographies.")
										        }
									        }
								        }
							        >
								        <MenuItem eventKey="1">Article</MenuItem>
								        <MenuItem eventKey="2">Report</MenuItem>
								        <MenuItem eventKey="3">Letter</MenuItem>
								        <MenuItem eventKey="4">Review</MenuItem>
								        <MenuItem eventKey="5">Email</MenuItem>
							        </DropdownButton>
							        <Button id="similarWriting" bsStyle="primary">
								        Writeup Complete
							        </Button>
						        </ButtonToolbar>
					        </div>
				        </div>
			        </div>
			        {/*<div className="paddingLeft">*/}
				        <textarea
					        className="text-area"
					        onChange={(event) => {
					            let text = event.target.value;
						        this.setState({
							        text: text
						        });
						        clearTimeout(this.interval);
						        this.interval = setTimeout(() => {
							        this.refresher();
						        }, 5000);
					        }}
				        >
		                Hello there, you can begin typing here...
			            </textarea>
			        {/*</div>*/}
		        </div>
		        <div className="right-container">
			        <div className="right-top">
				        <div className="title">
					        Similar Writings
				        </div>
				        <ListGroup>
					        <ListGroupItem bsStyle="warning" header="Heading 1" id="card">
						        Item 1
					        </ListGroupItem>
					        <br/>
					        <ListGroupItem bsStyle="warning" header="Heading 1" id="card">
						        Item 2
					        </ListGroupItem>
					        <br/>
					        <ListGroupItem bsStyle="warning" header="Heading 1" id="card">
						        ...
					        </ListGroupItem>
				        </ListGroup>
			        </div>
			        <div className="right-down">
				        <div className="title">
					        Quick Reference for Writing:
				        </div>
				        <ListGroup>
					        <ListGroupItem bsStyle="warning" id="writing">
						        Click on Report Type for quick reference.
					        </ListGroupItem>
				        </ListGroup>
			        </div>
		        </div>
		        <Modal
			        show={this.state.referenceModal.show}
			        onHide={() => {
				        this.setState({
					        referenceModal: {
						        show: false
					        }
				        });
			        }}
		        >
			        <Modal.Header>
				        <Modal.Title>
					        Adding Reference
				        </Modal.Title>
			        </Modal.Header>
			        <Modal.Body>
				        <div className="formWeb">
					        Add a website link for your reference.
				        </div>
				        <form>
					        <FormGroup>
						        <InputGroup>
							        <InputGroup.Addon>www.</InputGroup.Addon>
							        <FormControl type="text" />
						        </InputGroup>
					        </FormGroup>
				        </form>
			        </Modal.Body>
			        <Modal.Footer>
				        <Button
					        onClick={() => {
						        this.setState({
							        referenceModal: {
								        show: false
							        }
						        });
					        }}
				        >
					        Close
				        </Button>
				        <Button
					        bsStyle="primary"
					        onClick={() => {
						        this.setState({
							        referenceModal: {
								        show: false
							        }
						        });
					        }}
				        >
					        Submit
				        </Button>
			        </Modal.Footer>
		        </Modal>

	        </div>
        )
    }

    refresher() {
    	this.state.text.split('.').forEach((sentence) => {
			if (this.state.razor[sentence] === undefined) {
				Meteor.call('textrazor', {
					method: 'entities',
					params: {
						text: sentence
					}
				}, (err, res) => {
					if (!err) {
						if (res['ok']) {
							let pack = this.state.razor;
							pack[sentence] = res;
							this.setState({
								razor: pack
							}, () => {
								console.log(this.state.razor);
							});
						}
					} else {
						console.error(err);
					}
				});
			}
	    });
    }

}
