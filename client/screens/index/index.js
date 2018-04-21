import React from 'react';
import { Button, ButtonGroup, Form, ListGroup, ListGroupItem} from 'react-bootstrap';

export class Index extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<div>
		        <div class="header">
				        <ButtonGroup bsSize="big" class="buttonGroup">
					        <Button class="custom-button">File</Button>
					        <Button>Insert</Button>
					        <Button>Reference</Button>
				        </ButtonGroup>
		        </div>
			        <Form>
				        <textarea class="left-container">
                            Hello there, you can begin typing here...
						</textarea>
			        </Form>

		        <div class="right-container">
			        <div class="title">
				        Fact Confidence Level:
			        </div>
			        <div class="title">
				        Suggest Article:
			        </div>
			        <ListGroup>
				        <ListGroupItem bsStyle="warning" header="Heading 1">
					        Item 1
					        <text>
						        sup
					        </text>
					        <text>
						        hi
					        </text>
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
