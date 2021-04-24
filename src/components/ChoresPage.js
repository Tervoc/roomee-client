import React, { useState, useEffect } from 'react'
import Chore from './Chore'
import SiteNavbar from './SiteNavbar'

import Alert from 'react-bootstrap/Alert'

import Constants from '../Constants'

import { toast } from 'react-toastify'
import axios from 'axios'

import { useCookies } from 'react-cookie'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './styles/chores.css'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'

const Chores = () => {
	const [cookies] = useCookies();
	const [dailyChores, setDailyChores] = useState([]);
	const [weeklyChores, setWeeklyChores] = useState([]);
	const [monthlyChores, setMonthlyChores] = useState([]);
    const [modalShow, setModalShow] = React.useState(false);
	
	useEffect(() => {
		axios.get(Constants.APIRoot + 'chore/assignment/1' , {
			headers: { token: cookies['roomee-token'] }
		})
		.then((response) => {
			var d = [];
			for (var i = 0; i < response.data.length; i++) {
				 if (response.data[i].choreFrequencyId == 1) {
				  	d.push(response.data[i]);
				 }
			}	

			setDailyChores(d);
		})
		.catch(() => {
			toast.error('Could not load chores right now. Please try again later.');
		});
	}, []);
	
	return (
			<SiteNavbar>
				<h2>Chores</h2>
				{/* { 
				chores.length !== 0 ?
					chores.map((chore) =>
						<Chore 
							key={chore.chore.choretId}
							title={chore.chore.title}
							body={chore.chore.body}
							timestamp={chore.chore.creationTimestamp}
							user={chore.user}
						/>
					)
				:
					<Alert variant={'info'}>
						{'There are no new chores at this time.'}
					</Alert>
				} */}
                <Row style = {{marginTop: '10px'}}>
                    <Col>
                        <Card className="daily-card">
                            <Card.Body>
                                <Card.Title>
                                    <Row>
                                        <Col>
                                            Daily
                                        </Col>
                                        <Col>
                                            <Button variant="primary" onClick={() => setModalShow(true)}>+</Button>{' '}
                                        </Col>
                                    </Row>
                                    
                                </Card.Title>
								{ 
								dailyChores.length !== 0 ?
									dailyChores.map((chore) =>
										<Chore 
											key={chore.choreId}
											title={chore.name}
											body={chore.description}
										/>
									)
								:
									<Alert variant={'info'}>
										{'There are no new chores at this time.'}
									</Alert>
								}
								
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="weekly-card">
                            <Card.Body>
                                <Card.Title>
                                    <Row>
                                        <Col>
                                            Weekly
                                        </Col>
                                        <Col>
                                            <Button variant="primary" onClick={() => setModalShow(true)}>+</Button>{' '}
                                        </Col>
                                    </Row>
                                </Card.Title>
                                {/* <Card.Text></Card.Text> */}
                                <Chore 
                                    title="Clean Kitchen"
                                    body="Its starting to smeel like someones fat uncle died"
                                    timestamp="2020-12-23 23:12:32.4567"
                                    user="Joe Mama"
						        />
                                <Chore 
                                title="Mop Floor"
                                body="Its starting to smeel like someones fat uncle died"
                                timestamp="2020-12-23 23:12:32.4567"
                                user="Joe Mama"
                                />
                                <Chore 
                                    title="Mop Floor"
                                    body="Its starting to smeel like someones fat uncle died"
                                    timestamp="2020-12-23 23:12:32.4567"
                                    user="Joe Mama"
                                />
                           
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="monthly-card">
                            <Card.Body>
                                <Card.Title>
                                    <Row>
                                        <Col>
                                            Monthly
                                        </Col>
                                        <Col>
                                            <Button variant="primary" onClick={() => setModalShow(true)}>+</Button>{' '}
                                        </Col>
                                    </Row>
                                </Card.Title>
                                {/* <Card.Text></Card.Text> */}
                                <Chore 
                                    title="Mop Floor"
                                    body="Its starting to smeel like someones fat uncle died"
                                    timestamp="2020-12-23 23:12:32.4567"
                                    user="Joe Mama"
                                />
                                <Chore 
                                    title="Mop Floor"
                                    body="Its starting to smeel like someones fat uncle died"
                                    timestamp="2020-12-23 23:12:32.4567"
                                    user="Joe Mama"
                                />
                                <Chore 
                                    title="Mop Floor"
                                    body="Its starting to smeel like someones fat uncle died"
                                    timestamp="2020-12-23 23:12:32.4567"
                                    user="Joe Mama"
                                />
                                <Chore 
                                    title="Mop Floor"
                                    body="Its starting to smeel like someones fat uncle died"
                                    timestamp="2020-12-23 23:12:32.4567"
                                    user="Joe Mama"
                                />
                                <Chore 
                                    title="Mop Floor"
                                    body="Its starting to smeel like someones fat uncle died"
                                    timestamp="2020-12-23 23:12:32.4567"
                                    user="Joe Mama"
                                />
                            </Card.Body>
                        </Card>

                    </Col>
                </Row>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />   
				
				
			</SiteNavbar>
	);
}

export default Chores;

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Create New Chore
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Type some stuff here</h4>
          
          <Form>
            <Form.Row className="align-items-center">
                <Col xs="auto">
                <Form.Label htmlFor="inlineFormInput" srOnly>
                    Name
                </Form.Label>
                <Form.Control
                    className="mb-2"
                    id="inlineFormInput"
                    placeholder="Jane Doe"
                />
                </Col>
                <Col xs="auto">
                <Form.Label htmlFor="inlineFormInputGroup" srOnly>
                    Username
                </Form.Label>
                <InputGroup className="mb-2">
                    <InputGroup.Prepend>
                    <InputGroup.Text>@</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl id="inlineFormInputGroup" placeholder="Username" />
                </InputGroup>
                </Col>
                <Col xs="auto">
                <Form.Check
                    type="checkbox"
                    id="autoSizingCheck"
                    className="mb-2"
                    label="Remember me"
                />
                </Col>
                <Col xs="auto">
                <Button type="submit" className="mb-2">
                    Submit
                </Button>
                </Col>
            </Form.Row>
        </Form>
        <p>
          Did you ever hear the Tragedy of Darth Plagueis the wise? I thought not. It's not a story the Jedi would tell you. It's a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life... He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful... the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. It's ironic he could save others from death, but not himself
        </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }