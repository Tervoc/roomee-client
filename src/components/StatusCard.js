import React, { useState, useEffect } from 'react';

import Card from 'react-bootstrap/Card';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import { CardFooter } from 'reactstrap'
import Alert from 'react-bootstrap/Alert'

import Constants from '../Constants'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useCookies } from 'react-cookie'
import { Container } from 'react-bootstrap';


const StatusCard = (props) => {
    const [cookies] = useCookies();

    const Available = () => {
        setCardColor('#44DDBF');
        setCardText('Available');
    }

    const Busy = () => {
        setCardColor('#F04747');
        setCardText('Busy');
    }

    const Away = () => {
        setCardColor('#FAA61A');
        setCardText('Away');
    }


    const [cardColor, setCardColor] = useState('#44DDBF');
    const [cardText, setCardText] = useState('Available');

    const [name, setName] = useState('');

    useEffect(() => {
        axios.get(Constants.APIRoot + 'user?type=id&identifier=' + props.userId, {
            headers: { token: cookies['roomee-token'] }
        })
        .then((response) => {
            setName(response.data.lastName + ', ' + response.data.firstName);
        })
        .catch(() => {
            toast.error('Could not load name at this time.');
        });

        switch(props.status) {
            case 'available':
                Available();
                break;
            case 'away':
                Away();
                break;
            case 'busy':
                Busy();
                break;
        }
    }, []);

    return (
        
        <Card style={{ width: '100%', backgroundColor: 'lightGrey',  margin: 'auto', marginBottom: "10px"}}>
            <Card.Body>
                <Card.Title>Status</Card.Title>
                <Card.Text>
                    <Alert style={{backgroundColor: cardColor}}>
                        {cardText}
                    </Alert>
                </Card.Text>
                <DropdownButton id="dropdown-basic-button" title="Change Status" hidden={!props.allowChange}>
                    <Dropdown.Item variant="primary" onClick={Available}>Available</Dropdown.Item>
                    <Dropdown.Item variant="primary" onClick={Busy}>Busy</Dropdown.Item>
                    <Dropdown.Item variant="primary" onClick={Away}>Away</Dropdown.Item>
                </DropdownButton>
            </Card.Body>
            <CardFooter>
                {name}
            </CardFooter>
        </Card>
        
    )
}

export default StatusCard