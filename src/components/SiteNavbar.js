// Author(s): Jackson, Darrel (Darrel.Jackson@ttu.edu)
// Date Created: 03/18/2021
// Notes: N/A
import React from 'react'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'
import './styles/siteNavbar.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt, faAddressCard, faHome, faUserFriends, faBullhorn, faClipboardList, faCog, faCalendarAlt, faUserPlus} from '@fortawesome/free-solid-svg-icons'
import Image from 'react-bootstrap/Image'
import Home from './Home'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Alert from 'react-bootstrap/Alert'

const SiteNavbar = (props) => {

	return(
		<Row className="page">
			<Col className="navbar">
				<Nav>
					<Col>
					<Row className="navbar-header" xs>
						{ <Image src="resources/images/roomee-logo.png" style={{marginTop: '5px', padding: '5px'}} fluid/> }
					</Row>
					<Row>
						<Col className="nav-items">
							<Nav.Link as={Link} to={'/'} style={{borderRight: '7px solid #44DDBF'}}><FontAwesomeIcon icon={faHome}/>&nbsp;Home</Nav.Link>
							<Nav.Link as={Link} to={'/myroomees'}><FontAwesomeIcon icon={faUserFriends}/>&nbsp;My roomees</Nav.Link>
							<Nav.Link as={Link} to={Home}><FontAwesomeIcon icon={faBullhorn}/>&nbsp;Announcements</Nav.Link>
							<Nav.Link as={Link} to={Home}><FontAwesomeIcon icon={faClipboardList}/>&nbsp;Chores</Nav.Link>
							<Nav.Link as={Link} to={Home}><FontAwesomeIcon icon={faCalendarAlt}/>&nbsp;Events</Nav.Link>
						</Col>
					</Row>
					<Row xs className="navbar-footer">
						<Alert className= "change" variant={'success'}>My status: Available</Alert>
						
						<div className="navbar-footer-buttons">
							<OverlayTrigger
								placement={'top'}
								overlay={
									<Tooltip>Add room</Tooltip>
								}
							>
								{ <FontAwesomeIcon icon={faUserPlus} size="2x" className="navbar-button add-room"/>}
							</OverlayTrigger>

							<OverlayTrigger
								placement={'top'}
								overlay={
									<Tooltip>Settings</Tooltip>
								}
							>
								{ <FontAwesomeIcon icon={faCog} size="2x" className="navbar-button settings"/>}
							</OverlayTrigger>

							<OverlayTrigger
								placement={'top'}
								overlay={
									<Tooltip>My Profile</Tooltip>
								}
							>
								{ <FontAwesomeIcon icon={faAddressCard} size="2x" className="navbar-button user-settings"/>}
							</OverlayTrigger>

							<OverlayTrigger
								placement={'top'}
								overlay={
									<Tooltip>Logout</Tooltip>
								}
							>
								{ <FontAwesomeIcon icon={faSignOutAlt} size="2x" className="navbar-button sign-out"/> }
							</OverlayTrigger>
						</div>
					</Row>
					</Col>
				</Nav>
			</Col>
			<Col className="page-content" fluid>
				{props.children}
			</Col>
		</Row>	
	);
}

export default SiteNavbar;