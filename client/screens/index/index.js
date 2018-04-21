import React from 'react';
import { ListGroup, ListGroupItem, DropdownButton, MenuItem, ButtonToolbar} from 'react-bootstrap';

export class Index extends React.Component {
  
    constructor(props) {
        super(props);
	    this.state = {
	    	text: '',
		    title: ''
	    };
    }

    render() {
        return (
        	<div className="index">
		        <div class="left-container">
			        <div class="header">
				        <div class="header-icon">
				            <img src="/img/logo.png"
				                 alt="logo.png"
				                 height="70"
				                 onChange={(event) => {
					                 this.setState({
						                 title: event.target.value
					                 });
				                 }}/>
				        </div>
				        <div className="header-buttons">
					        <input type="title" placeholder="Report Title"/>
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
						        <button className="custom-button">
							        Help
						        </button>
						        <ButtonToolbar>
							        <DropdownButton
								        bsStyle="default"
								        title= "Report Type"
								        noCaret
								        id="dropdown-no-caret"
							        >
								        <MenuItem eventKey="1">Article</MenuItem>
								        <MenuItem eventKey="1">Report</MenuItem>
								        <MenuItem eventKey="2">Letter</MenuItem>
								        <MenuItem eventKey="3">Review</MenuItem>
								        <MenuItem eventKey="4">Email</MenuItem>
							        </DropdownButton>
						        </ButtonToolbar>
					        </div>
				        </div>
			        </div>
			        <textarea
				        className="text-area"
				        onChange={(event) => {
					        this.setState({
						        text: event.target.value
					        });
				        }}
			        >
	                Hello there, you can begin typing here...
		        </textarea>
		        </div>
		        <div className="right-container">
			        <div className="right-top">
				        <div className="title">
					        Facts Suggestions:
				        </div>
				        <ListGroup>
					        <ListGroupItem bsStyle="warning" header="Heading 1">
						        Item 1
					        </ListGroupItem>
					        <br/>
					        <ListGroupItem bsStyle="warning" header="Heading 1">
						        Item 2
					        </ListGroupItem>
					        <br/>
					        <ListGroupItem bsStyle="warning" header="Heading 1">
						        ...
					        </ListGroupItem>
				        </ListGroup>
			        </div>
			        <div className="right-down">
				        <div className="title">
					        Quick Reference for Writing:
				        </div>
				        <ListGroup>
					        <ListGroupItem bsStyle="warning" header="Introduction">
						        The introduction sets the scene for the main body of the report. The aims and objectives of the report should be explained in detail. Any problems or limitations in the scope of the report should be identified, and a description of research methods, the parameters of the research and any necessary background history should be included.

						        In some reports, particularly in science subjects, separate headings for Methods and Results are used prior to the main body (Discussion) of the report as described below.

					        </ListGroupItem>
				        </ListGroup>
			        </div>
		        </div>
	        </div>
        )
    }
}
