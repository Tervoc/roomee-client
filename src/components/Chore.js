import React from 'react';
import { Card } from 'react-bootstrap';
import format from 'date-fns/format'


const Chore = (props) => {
	return(
		<Card className="Chore" style = {{marginTop: '10px'}}>
			<Card.Body>
				<Card.Title>
					{props.title}
				</Card.Title>
				<Card.Text>
					{props.body}
				</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default Chore;