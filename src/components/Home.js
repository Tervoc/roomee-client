import React, { useState, useEffect } from 'react';
import { Card, Container } from 'react-bootstrap';
import format from 'date-fns/format'
import Chore from './Chore';
import SiteNavbar from './SiteNavbar';
import MyRoomees from './MyRoomees';
import Constants from '../Constants';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import StatusCard from './StatusCard';
import Alert from 'react-bootstrap/Alert';
import Announcement from './Announcement';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './styles/home.css'

const Home = (props) => {

	const [cookies] = useCookies();

    const [roomees, setRoomees] = useState([]);
	const [announcements, setAnnouncements] = useState([]);
	const [dailyChores, setDailyChores] = useState([]);

    useEffect(() => {
        axios.get(Constants.APIRoot + 'roomees/1', {
            headers: { token: cookies['roomee-token'] }
        })
        .then((response) => {
            setRoomees(response.data);
        })
        .catch(() => {
            toast.error('Could not load roomees at this time. Please try again later.');
        });


		axios.get(Constants.APIRoot + 'announcement', {
			headers: { token: cookies['roomee-token'] }
		})
		.then((response) => {
			setAnnouncements(response.data);
		})
		.catch(() => {
			toast.error('Could not load announcements right now. Please try again later.');
		});


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
	}, []);

	return(
		
		<SiteNavbar pageTitle= "Home" className="page-background">
			<h2>Home</h2>
			 <Row style = {{marginTop: '10px'}}>
                    <Col>
                        <Card className="daily-card">
                            <Card.Body>
                                <Card.Title>
                                    <Row>
                                        <Col>
                                            Daily
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
					<Card className="roomee-card">
                            <Card.Body>
                                <Card.Title>
                                    <Row>
                                        <Col>
                                            Roomees
                                        </Col>
                                    </Row>
                                    
                                </Card.Title>
					{
						
						roomees.length !== 0 ?
							roomees.map((roomee) => 
								<StatusCard key={roomee.userId} allowChange={roomee.userId == 1 ? true : false} status={roomee.userStatus} userId={roomee.userId} />
							)
						:
						null
            		}
						</Card.Body>
                        </Card>
					</Col>

					<Col>
					<Card className="announcement-card">
                            <Card.Body>
                                <Card.Title>
                                    <Row>
                                        <Col>
                                            Announcements
                                        </Col>
                                    </Row>
                                    
                                </Card.Title>
						{ 
							announcements.length !== 0 ?
								announcements.map((announcement) =>
									<Announcement 
										key={announcement.announcement.announcementId}
										title={announcement.announcement.title}
										body={announcement.announcement.body}
										timestamp={announcement.announcement.creationTimestamp}
										user={announcement.user}
									/>
								)
							:
								<Alert variant={'info'}>
									{'There are no new announcements at this time.'}
								</Alert>
						}
						</Card.Body>
						</Card>
					</Col>
		</Row>
		</SiteNavbar>	
	);
}

export default Home;