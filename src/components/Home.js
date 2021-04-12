import React, { useState, useEffect } from 'react'
import Announcement from './Announcement'
import SiteNavbar from './SiteNavbar'

import Alert from 'react-bootstrap/Alert'

import Constants from '../Constants'

import { toast } from 'react-toastify'
import axios from 'axios'

import { useCookies } from 'react-cookie'

const Home = () => {

	
	return (
			<SiteNavbar>
				<h2>Home</h2>
				
			</SiteNavbar>
	);
}

export default Home;