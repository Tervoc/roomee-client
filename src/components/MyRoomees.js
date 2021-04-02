import React, { useState, useEffect } from 'react';
import SiteNavbar from './SiteNavbar';
import StatusCard from './StatusCard'

import Constants from '../Constants'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useCookies } from 'react-cookie'

const MyRoomees = () => {
    const [cookies] = useCookies();

    const [roomees, setRoomees] = useState([]);

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
    }, []);

    return (
        <SiteNavbar>
            <h2>My Roomees</h2>

            {
                roomees.length !== 0 ?
                    roomees.map((roomee) => 
                        <StatusCard key={roomee.userId} allowChange={roomee.userId == 1 ? true : false} status={roomee.userStatus} userId={roomee.userId} />
                    )
                :
                null
            }
        </SiteNavbar>
    )
}

export default MyRoomees;