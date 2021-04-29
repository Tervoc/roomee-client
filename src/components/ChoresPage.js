import React, { useState, useEffect } from 'react'
import Chore from './Chore'
//mport ChoreForm from './ChoreForm'
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
//import FormControl from 'react-bootstrap/FormControl'
//import InputGroup from 'react-bootstrap/InputGroup'

const Chores = () => {
	const [cookies] = useCookies();
    const [dailyChores, setDailyChores] = useState([]);
    const [weeklyChores, setWeeklyChores] = useState([]);
    const [monthlyChores, setMonthlyChores] = useState([]);
    const [roommees, setRoommees] = useState([]);
    const [roommees_, setRoommees_] = useState([]);
    const [names, setNames] = useState([]);
    const [choreId, setChoreId] = useState([]);
    const [addDailyChoresModalShow, setAddDailyChoresModalShow] = React.useState(false);
    const [addWeeklyChoresModalShow, setAddWeeklyChoresModalShow] = React.useState(false);
    const [addMonthlyChoresModalShow, setAddMonthlyChoresModalShow] = React.useState(false);

    function roommate(firstName, lastName, userId){
        this.firstName = firstName;
        this.lastName=lastName;
        this.userId = userId;
    }
    var roommateList = []; 
    useEffect(() => {
        axios.get(Constants.APIRoot + 'chore/assignment/' + '1', {
            headers: { token: cookies['roomee-token'] }
        })
        .then((response) => {
            var d = [];
            var w = [];
            var m = [];
            for (var i = 0; i < response.data.length; i++) {
                 if (response.data[i].choreFrequencyId == 1) {
                      d.push(response.data[i]);
                 }
                 if (response.data[i].choreFrequencyId == 2) {
                    w.push(response.data[i]);
                }
                if (response.data[i].choreFrequencyId == 3) {
                    m.push(response.data[i]);
                 }
            }
            setDailyChores(d);
            setWeeklyChores(w);
            setMonthlyChores(m);
        })
        .catch(() => {
            toast.error('Could not load chores right now. Please try again later.');
        });



        axios.get(Constants.APIRoot + 'roomees/objects/1', {
            headers: { token: cookies['roomee-token'] }
        })
        .then((response) => {
           setRoommees(response.data);
           console.log("roommees");
           console.log(roommees);
        })
        .catch(() => {
            toast.error('Could not load roomates right now. Please try again later.');
        });
 

        // var temp = new roommate();
        // for(var i=0; i<roommees.length; i++){
        //     axios.get(Constants.APIRoot + 'user?type=id&identifier=' + roommees[i].userId, {
        //         headers: { token: cookies['roomee-token'] }
        //     })
        //     .then((response) => {
        //         temp.firstName = response.data.firstName; 
        //         temp.lastName =  response.data.lastName;
        //         temp.userId = roommees[i].userId;
        //         roommateList.push(temp);
        //         console.log("roommateList");
        //         console.log(roommateList);
        //     })
        //     .catch(() => {
        //         toast.error('Could not load name at this time.');
        //     });
        // }
        // setRoommees_(temp);
    
       // setRoommates(roommateList);
       
        
    }, []);
    console.log("____roommateList___");
                console.log(roommateList);
    




    function MyVerticallyCenteredModal(props) {
        const initialFormData = ({
            title: "",
            description: "",
            assignedTo: ""
          });
        const [formData, updateFormData] = React.useState(initialFormData);
        const handleChange = (e) => {
            e.target.name == "title"?
                updateFormData({
                    ...formData,
                    title: e.target.value.trim()         
                })
            :e.target.name == "description"?
                updateFormData({
                    ...formData,
                    description: e.target.value.trim()         
                }) 
            :e.target.name == "assignedTo"?
                updateFormData({
                    ...formData,
                    assignedTo: e.target.value.trim()         
                })
            :
            console.log("didnt work");

        };
        const handleSubmit = (e) => {
            e.preventDefault()
            console.log(formData);
            //props.onHide
           // ... submit to API or something
           axios.post(Constants.APIRoot + 'chore',{
                name: formData.title,
                description: formData.description,
                roomId: "1",
                privateFlag: false,
                choreFrequencyId: props.frequency,
                choreDayAssignmentId: 0,
                choreTimeAssignmentId: 0},
                {
                    headers: { token: cookies['roomee-token'] }
                    })
                
                .then(function(response){
                    console.log(response);
                    axios.post(Constants.APIRoot + 'chore/assign/'+ response.data + '?userId=' + formData.assignedTo, 
                       
                    {
                        headers: { token: cookies['roomee-token'] }
                    })
                    
                   
                    .catch(function(error){
                        console.log(error);
                    });
                })
                .catch(function(error){
                    console.log(error);
                });
        };
    
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.modaltitle}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Row>
                        <Form.Label>title</Form.Label>
                        <Form.Control
                            type = "text"
                            name = "title"
                            placeholder="Take Out Trash"
                            onChange={handleChange}
                        />
                    </Form.Row>
                    <Form.Row>
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            type="text" 
                            name="description" 
                            placeholder="the trash needs to be taken out" 
                            onChange={handleChange}
                        />
                    </Form.Row>
                    <Form.Row>
                        <Col>
                            <Form.Label>Assign To: </Form.Label>
                            <Form.Control as="select" type = "text" name="assignedTo" onChange={handleChange}>
                                {
                                 roommees.length !== 0 ?
                            
                                    roommees.map((roomee) =>
                                        <option value={roomee.userId}>{roomee.firstName}</option>
                                        
                                    )
                                    
                                    
                                :
                                    <Alert variant={'info'}>
                                        {'There are no new chores at this time.'}
                                    </Alert>
                                }
                                
                            
                                
                            </Form.Control>
                        </Col>
                    </Form.Row>
                </Form>
            </Modal.Body>
            <Modal.Footer> 
                <Button type="Submit" onClick={handleSubmit}>Submit</Button>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
      }
	return (
        <SiteNavbar>
            <h2>Chores</h2>
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
                                        <Button variant="primary" onClick={() => setAddDailyChoresModalShow(true)}>+</Button>{' '}
                                    </Col>
                                </Row>
                            </Card.Title>
                            {/* <Card.Text></Card.Text> */}
                            {dailyChores.length !== 0 ?
                            
                                dailyChores.map((chore) =>
                                    <Chore 
                                        key={chore.choretId}
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
                                        <Button variant="primary" onClick={() => setAddWeeklyChoresModalShow(true)}>+</Button>{' '}
                                    </Col>
                                </Row>
                            </Card.Title>
                            { 
                            weeklyChores.length !== 0 ?
                                weeklyChores.map((chore) =>
                                    <Chore 
                                        key={chore.choretId}
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
                    <Card className="monthly-card">
                        <Card.Body>
                            <Card.Title>
                                <Row>
                                    <Col>
                                        Monthly
                                    </Col>
                                    <Col>
                                        <Button variant="primary" onClick={() => setAddMonthlyChoresModalShow(true)}>+</Button>{' '}
                                    </Col>
                                </Row>
                            </Card.Title>
                                { 
                                monthlyChores.length !== 0 ?
                                    monthlyChores.map((chore) =>
                                        <Chore 
                                            key={chore.choretId}
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
            </Row>
            <MyVerticallyCenteredModal
                show={addDailyChoresModalShow}
                onHide={() => setAddDailyChoresModalShow(false)}
                modaltitle={"Add Daily Chore"}
                frequency ={1}

               // onSubmit={()=>axios.post}
                
            />	
            <MyVerticallyCenteredModal
                show={addWeeklyChoresModalShow}
                onHide={() => setAddWeeklyChoresModalShow(false)}
                modaltitle={"Add Weekly Chore"}
                frequency ={ 2}

            />
            <MyVerticallyCenteredModal
                show={addMonthlyChoresModalShow}
                onHide={() => setAddMonthlyChoresModalShow(false)}
                modaltitle={"Add Monthly Chore"}
                frequency ={3}
            />
        </SiteNavbar>
	);
}

export default Chores;

