import React, {Component} from "react";
import {link} from 'react-router-dom';
import { CRow  } from '@coreui/react';
  import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { Axios } from "axios";

const handleNameChange=(e)=>{
    this.setState({
        latestupdate: e.target.value
    });
    const handleSubmit=(e)=> {
        e.preventDefault();
        console.log(this.state);
    }
}

class AdminDash extends Component{
    constructor() {
        super();
        this.state = {
            latestupdate:''
        }
    }

    render(){
        return(
            <div className="admin-container">
                <div className="row">
                    <div className="col-md-12">
                    <Card>
                        <Card.Header className="card-header">Latest Updates</Card.Header>
                            <Card.Body>

                                <Form onSubmit={this.handleSubmit.bind(this)}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className="card-label">Enter Text For Latest Updates</Form.Label>
                                    <Form.Control  style={{ width:"60%", height:"50px" }} type="Text" placeholder="Enter Updates" onChange={this.handleNameChange.bind(this)} value={this.state.latestupdate}/>
                                    <Form.Text className="text-muted">
                                    </Form.Text>
                                    </Form.Group>
                                    <Button variant="primary" style={{Color:"blue",}} className="card-button">Add To Latest Updates</Button>
                                </Form>
                            <Button variant="primary" style={{Color:"blue",}} className="card-button">Add To Latest Updates</Button>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Header>Update Sliders</Card.Header>
                            <Card.Body>

                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Upload Image To Update Sliders</Form.Label>
                                    <Form.Control type="file" placeholder="Upload Image" />
                                    <Form.Text className="text-muted">
                                    </Form.Text>
                                    </Form.Group>
                                </Form>
                            <Button variant="primary">Add To Latest Updates</Button>
                        </Card.Body>
                    </Card>
                    {/* <CRow>
                        <CCol sm={6}>
                            <CCard>
                            
                            <CCardBody>
                                <CCardTitle>Special title treatment</CCardTitle>
                                <CCardText>
                                With supporting text below as a natural lead-in to additional content.
                                </CCardText>
                                <CButton href="#">Add Latest Updates</CButton>
                            </CCardBody>
                            </CCard>
                        </CCol>
                        <CCol sm={6}>
                            <CCard>
                            <CCardBody>
                                <CCardTitle>Special title treatment</CCardTitle>
                                <CCardText>
                                With supporting text below as a natural lead-in to additional content.
                                </CCardText>
                                <CButton href="#">Go somewhere</CButton>
                            </CCardBody>
                            </CCard>
                        </CCol>
                        </CRow> */}
                                                
                    </div>
                </div>
            </div>
        )
    }
    

}
export default AdminDash;