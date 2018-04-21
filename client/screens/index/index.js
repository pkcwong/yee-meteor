import React from 'react';
import { ListGroup, ListGroupItem} from 'react-bootstrap';

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
			        <div className="title">
				        Fact Confidence Level:
			        </div>
			        <div className="title">
				        Suggest Article:
			        </div>
			        <ListGroup>
				        <ListGroupItem bsStyle="warning" header="Heading 1">
					        Item 1
				        </ListGroupItem>
				        <ListGroupItem bsStyle="warning" header="Heading 1">
					        Item 2
				        </ListGroupItem>
				        <ListGroupItem bsStyle="warning" header="Heading 1">
					        ...
				        </ListGroupItem>
			        </ListGroup>
		        </div>
	        </div>
        )
    }

}
