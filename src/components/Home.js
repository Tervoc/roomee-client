import React from 'react'
import Announcement from './Announcement'
import Event from './Event'
// import Button from 'react-bootstrap/Button'
// import Form from 'react-bootstrap/Form'
// import Col from 'react-bootstrap/col'
// import Row from 'react-bootstrap/Row'
// import Modal from 'react-bootstrap/Modal'


const Home = () => {
	return (
		<div>
{/* Position it, automatically resize, make a pop up to enter event info */}

			<h2>Announcements</h2>
			
			{/* <Button variant="primary" onClick= {() => setModalShow(true)}>
				Create New Event
			</Button>

			<MyVerticallyCenteredModal
				show={modalShow}
				onHide={() => setModalShow(false)}
				title = "Create New Event"
				body = {<div>
					<Form>
					<Form.Group controlId="exampleForm.ControlInput1">
						<Form.Label>Event Name</Form.Label>
						<Form.Control placeholder="Event Name" />
					</Form.Group>
					<Form.Group controlId="exampleForm.ControlInput2">
						<Form.Label>Username</Form.Label>
						<Form.Control placeholder="Username" />
					</Form.Group>
					<Form.Group controlId="exampleForm.ControlTextarea1">
						<Form.Label>Details</Form.Label>
						<Form.Control as="textarea" rows={3} />
					</Form.Group>
					<Form.Row>
						<Col xs = "auto">
							<Form.Label>Date</Form.Label>
							<Form.Control placeholder = "mm/dd/yyyy"/>
						</Col>
						<Col xs = "auto">
							<Form.Label>Time</Form.Label>
							<Form.Control placeholder = "h:m, AM/PM"/>
						</Col>
					</Form.Row>
					<Form.Row>
						<Col>
							<Form.Label>Location</Form.Label>
							<Form.Control placeholder = "Address"/>
						</Col>
						<Col>
							<Button variant="primary">Create</Button>{' '}
						</Col>
					</Form.Row>
					<Form.Group>
					</Form.Group>
					</Form>
								
				</div>}
				/> */}
			
			<Announcement
				title="Example Announcement 1"
				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a viverra velit, vel porttitor mauris. Nulla volutpat varius turpis quis dictum. Nullam massa enim, mattis at justo id, posuere mattis felis. Sed non nunc vel sapien vehicula scelerisque consectetur at lectus. Nulla venenatis dui vel cursus fringilla. Morbi congue elementum elit, eget convallis sapien porttitor eu. Praesent et lorem lectus. Curabitur vel molestie nisl. Maecenas sed porttitor ex."			
				timestamp="2020-12-23 15:12:32.4567"
				userId="Hingle McCringleberry"
			/>

			<Announcement
				title="Example Announcement 2"
				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a viverra velit, vel porttitor mauris. Nulla volutpat varius turpis quis dictum. Nullam massa enim, mattis at justo id, posuere mattis felis. Sed non nunc vel sapien vehicula scelerisque consectetur at lectus. Nulla venenatis dui vel cursus fringilla. Morbi congue elementum elit, eget convallis sapien porttitor eu. Praesent et lorem lectus. Curabitur vel molestie nisl. Maecenas sed porttitor ex."			
				timestamp="2020-12-23 23:12:32.4567"
				userId="Jackmerius Tacktheritrix"
			/>

			<Announcement
				title="Example Announcement 3"
				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a viverra velit, vel porttitor mauris. Nulla volutpat varius turpis quis dictum. Nullam massa enim, mattis at justo id, posuere mattis felis. Sed non nunc vel sapien vehicula scelerisque consectetur at lectus. Nulla venenatis dui vel cursus fringilla. Morbi congue elementum elit, eget convallis sapien porttitor eu. Praesent et lorem lectus. Curabitur vel molestie nisl. Maecenas sed porttitor ex."			
				timestamp="2020-12-23 23:12:32.4567"
				userId="XMUS FLAXON JAXON-WAXON"
			/>

			<Announcement
				title="Example Announcement 4"
				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a viverra velit, vel porttitor mauris. Nulla volutpat varius turpis quis dictum. Nullam massa enim, mattis at justo id, posuere mattis felis. Sed non nunc vel sapien vehicula scelerisque consectetur at lectus. Nulla venenatis dui vel cursus fringilla. Morbi congue elementum elit, eget convallis sapien porttitor eu. Praesent et lorem lectus. Curabitur vel molestie nisl. Maecenas sed porttitor ex."			
				timestamp="2020-12-23 15:12:32.4567"
				userId="Devoin Shower-Handel"
			/>

			<Announcement
				title="Example Announcement 5"
				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a viverra velit, vel porttitor mauris. Nulla volutpat varius turpis quis dictum. Nullam massa enim, mattis at justo id, posuere mattis felis. Sed non nunc vel sapien vehicula scelerisque consectetur at lectus. Nulla venenatis dui vel cursus fringilla. Morbi congue elementum elit, eget convallis sapien porttitor eu. Praesent et lorem lectus. Curabitur vel molestie nisl. Maecenas sed porttitor ex."			
				timestamp="2020-12-23 23:12:32.4567"
				userId="Torque [Construction Noise] Lewis"
			/>

			<Announcement
				title="Example Announcement 6"
				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a viverra velit, vel porttitor mauris. Nulla volutpat varius turpis quis dictum. Nullam massa enim, mattis at justo id, posuere mattis felis. Sed non nunc vel sapien vehicula scelerisque consectetur at lectus. Nulla venenatis dui vel cursus fringilla. Morbi congue elementum elit, eget convallis sapien porttitor eu. Praesent et lorem lectus. Curabitur vel molestie nisl. Maecenas sed porttitor ex."			
				timestamp="2020-12-23 23:12:32.4567"
				userId="(the player formerly known as mousecop)"
			/>
			<h2>Event</h2>
			<Event
				title="Example Announcement 6"
				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a viverra velit, vel porttitor mauris. Nulla volutpat varius turpis quis dictum. Nullam massa enim, mattis at justo id, posuere mattis felis. Sed non nunc vel sapien vehicula scelerisque consectetur at lectus. Nulla venenatis dui vel cursus fringilla. Morbi congue elementum elit, eget convallis sapien porttitor eu. Praesent et lorem lectus. Curabitur vel molestie nisl. Maecenas sed porttitor ex."			
				timestamp="2020-12-23 23:12:32.4567"
				userId="(the player formerly known as mousecop)"
			/>
		</div>
	);
}

export default Home;