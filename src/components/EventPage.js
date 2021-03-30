import React from 'react'
import Event from './Event'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Logo from "./Logo.png"
import Nav from 'react-bootstrap/Nav'
import { LinkContainer } from "react-bootstrap";
import { Redirect, Route } from 'react-router'

import './styles/eventPage.css'

import MyVerticallyCenteredModal from "./Modal"
const EventPage = () => {
	const [modalShow, setModalShow] = React.useState(false);
	return (
		<div  >
			{/* <Nav style={ {backgroundColor: '#00cc66',}}
				activeKey="/EventPage"
				onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
				>
				<Nav.Item>
					<Nav.Link href="/home">Active</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link eventKey="/Announcement">Announcements</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link eventKey="/Home">Home</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link eventKey="disabled" disabled>
					Disabled
					</Nav.Link> 
				</Nav.Item>
			</Nav> */}
			{/* <Nav activeKey={window.location.pathname}>
            <LinkContainer to="/signup">
              <Nav.Link>Signup</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
          </Nav> */}
			<div
				style={ {color: '#00cc66',}}
			/>
			<Container className="full-width" style={ {backgroundColor: '#2C2F33',}} >
				<Row>
					<img src={Logo} />
				</Row>
			</Container>

			<Jumbotron fluid>
				<Container>
					<h1>Events</h1>
					<p>
					    View and create events here
					</p>
				</Container>
			</Jumbotron>
			
			
			<>
			<Button variant="primary" onClick= {() => setModalShow(true)}>
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
			/>
			</>

			
			<Event
				title="Example Event 1"
				text={<Event 	title="Example Event 2"
								text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a viverra velit, vel porttitor mauris. Nulla volutpat varius turpis quis dictum. Nullam massa enim, mattis at justo id, posuere mattis felis. Sed non nunc vel sapien vehicula scelerisque consectetur at lectus. Nulla venenatis dui vel cursus fringilla. Morbi congue elementum elit, eget convallis sapien porttitor eu. Praesent et lorem lectus. Curabitur vel molestie nisl. Maecenas sed porttitor ex."			
								timestamp="2020-12-23 23:12:32.4567"
								userId="Jackmerius Tacktheritrix"
					/>	}
				timestamp="2020-12-23 15:12:32.4567"
				userId="Hingle McCringleberry"
			/>

			<Event
				title="Example Event 2"
				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a viverra velit, vel porttitor mauris. Nulla volutpat varius turpis quis dictum. Nullam massa enim, mattis at justo id, posuere mattis felis. Sed non nunc vel sapien vehicula scelerisque consectetur at lectus. Nulla venenatis dui vel cursus fringilla. Morbi congue elementum elit, eget convallis sapien porttitor eu. Praesent et lorem lectus. Curabitur vel molestie nisl. Maecenas sed porttitor ex."			
				timestamp="2020-12-23 23:12:32.4567"
				userId="Jackmerius Tacktheritrix"
			/>

			<Event
				title="Example Event 3"
				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a viverra velit, vel porttitor mauris. Nulla volutpat varius turpis quis dictum. Nullam massa enim, mattis at justo id, posuere mattis felis. Sed non nunc vel sapien vehicula scelerisque consectetur at lectus. Nulla venenatis dui vel cursus fringilla. Morbi congue elementum elit, eget convallis sapien porttitor eu. Praesent et lorem lectus. Curabitur vel molestie nisl. Maecenas sed porttitor ex."			
				timestamp="2020-12-23 23:12:32.4567"
				userId="XMUS FLAXON JAXON-WAXON"
			/>

			<Event
				title="Example Event 4"
				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a viverra velit, vel porttitor mauris. Nulla volutpat varius turpis quis dictum. Nullam massa enim, mattis at justo id, posuere mattis felis. Sed non nunc vel sapien vehicula scelerisque consectetur at lectus. Nulla venenatis dui vel cursus fringilla. Morbi congue elementum elit, eget convallis sapien porttitor eu. Praesent et lorem lectus. Curabitur vel molestie nisl. Maecenas sed porttitor ex."			
				timestamp="2020-12-23 15:12:32.4567"
				userId="Devoin Shower-Handel"
			/>

			<Event
				title="Example Event 5"
				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a viverra velit, vel porttitor mauris. Nulla volutpat varius turpis quis dictum. Nullam massa enim, mattis at justo id, posuere mattis felis. Sed non nunc vel sapien vehicula scelerisque consectetur at lectus. Nulla venenatis dui vel cursus fringilla. Morbi congue elementum elit, eget convallis sapien porttitor eu. Praesent et lorem lectus. Curabitur vel molestie nisl. Maecenas sed porttitor ex."			
				timestamp="2020-12-23 23:12:32.4567"
				userId="Torque [Construction Noise] Lewis"
			/>

			<Event
				title="Example Event 6"
				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a viverra velit, vel porttitor mauris. Nulla volutpat varius turpis quis dictum. Nullam massa enim, mattis at justo id, posuere mattis felis. Sed non nunc vel sapien vehicula scelerisque consectetur at lectus. Nulla venenatis dui vel cursus fringilla. Morbi congue elementum elit, eget convallis sapien porttitor eu. Praesent et lorem lectus. Curabitur vel molestie nisl. Maecenas sed porttitor ex."			
				timestamp="2020-12-23 23:12:32.4567"
				userId="(the player formerly known as mousecop)"
			/>
			<Event
				title="Example Event 6"
				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a viverra velit, vel porttitor mauris. Nulla volutpat varius turpis quis dictum. Nullam massa enim, mattis at justo id, posuere mattis felis. Sed non nunc vel sapien vehicula scelerisque consectetur at lectus. Nulla venenatis dui vel cursus fringilla. Morbi congue elementum elit, eget convallis sapien porttitor eu. Praesent et lorem lectus. Curabitur vel molestie nisl. Maecenas sed porttitor ex."			
				timestamp="2020-12-23 23:12:32.4567"
				userId="(the player formerly known as mousecop)"
			/>
		</div>
	);
}

export default EventPage;