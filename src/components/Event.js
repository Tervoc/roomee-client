import React from 'react'
import Card from 'react-bootstrap/Card'
import format from 'date-fns/format'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'



const Event = (props) => {
	return(
		<Card className="Event" style={{flex:1, backgroundColor:'#00cc66'}} >
		
			<Card.Body>
				<Card.Title>
					{props.title}
				</Card.Title>
				<Card.Text>
					{props.text}
				</Card.Text>
			</Card.Body>
			<ListGroup variant="flush" >
				<div
					style={{ backgroundColor:'#00cc66'}}
				/>
				<ListGroupItem>Date: {props.date}</ListGroupItem>
				<ListGroupItem>Time: {props.time}</ListGroupItem>
			</ListGroup>
			<Card.Footer>
				{`Posted: ${format(new Date(props.timestamp), 'MM/dd/yyyy \'at\' hh:mm a')} by `}
				<span style={{fontWeight: "500"}}>{props.userId}</span>
			</Card.Footer>
		</Card>
	);
}

export default Event;