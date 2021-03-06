import React from 'react'
import { Redirect, Route } from 'react-router'
import Layout from './components/Layout'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import MyRoomees from './components/MyRoomees.js'
import Announcements from './components/AnnouncementsPage.js'
import Chores from './components/ChoresPage.js'


import { toast, ToastContainer } from 'react-toastify'
import { useCookies } from 'react-cookie'

import jwt from 'jwt-decode'

import 'react-toastify/dist/ReactToastify.css'
import 'react-bootstrap-typeahead/css/Typeahead.css'

import './site.css'

const App = () => {
	const [cookies] = useCookies();

	const checkToken = () => {
        if(cookies['roomee-token'] !== undefined) {
            const user = jwt(cookies['roomee-token']);

            if(user.exp * 1000 > Date.now()) {
                return true;
            } else {
                toast.info('Your session has expired. Please log in to use this tool.');
                return false;
            }
        } else {
            toast.info('You are not logged in. Please log in to use this tool.');
            return false;
        }
    }

    const PrivateRoute = ({ component: Component, ...rest }) => (
        <Route {...rest} render={(props) => (
            checkToken() === true
                ?
                    <Component {...props} />
                :
                    <Redirect to={{pathname: "/login"}} />
        )} />
    )

	return(
		<React.Fragment>
			<Layout>
				<PrivateRoute exact path='/' component={Home} />
				<Route path='/login' component={Login} />
				<Route path='/signup' component={Signup} />
                <PrivateRoute path='/myroomees' component={MyRoomees} /> 
				<PrivateRoute path='/announcements' component={Announcements} />
                <PrivateRoute path='/chores' component={Chores} />
								
			</Layout>

			<ToastContainer
				position="bottom-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss={false}
				draggable={false}
				pauseOnHover
			/>
		</React.Fragment>
	);
}

export default App;