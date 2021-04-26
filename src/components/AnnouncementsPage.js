import React, { useState, useEffect } from 'react'
import Announcement from './Announcement'
import SiteNavbar from './SiteNavbar'

import Alert from 'react-bootstrap/Alert'

import Constants from '../Constants'

import { toast } from 'react-toastify'
import axios from 'axios'

import { useCookies } from 'react-cookie'

const Announcements = () => {
	const [cookies] = useCookies();
	const [announcements, setAnnouncements] = useState([]);
	
	useEffect(() => {
		axios.get(Constants.APIRoot + 'announcement', {
			headers: { token: cookies['roomee-token'] }
		})
		.then((response) => {
			setAnnouncements(response.data);
		})
		.catch(() => {
			toast.error('Could not load announcements right now. Please try again later.');
		});
	}, []);
	
	return (
			<SiteNavbar>
				<h2>Announcements</h2>
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
			</SiteNavbar>
	);
}

export default Announcements;