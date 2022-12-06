import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";


type PatientRadioProps = {
  onChange?: any
}
export default function PatientRadioContainer({onChange}: PatientRadioProps) {
  const [status, setStatus] = useState('All');

  const handleStatusChange = (status: string) => {
    onChange(status);
  }

  return(
    <Container fluid>
      <Row>
        <Col>  
          <div key={`inline-radio`} className="my-3">
            <strong className='d-inline-block' style={{marginRight: '15px'}}>Patient List</strong>
            <Form.Check
              inline
              label="All"
              name="status"
              type='radio'
              id={`inline-radio-1`}
              defaultChecked={true}
              onChange={()=>{handleStatusChange('All')}}
            />
            <Form.Check
              inline
              label="Pending"
              name="status"
              type='radio'
              id={`inline-radio-2`}
              onChange={()=>{handleStatusChange('Pending')}}
            />
            <Form.Check
              inline
              label="Completed"
              name="status"
              type='radio'
              id={`inline-radio-3`}
              onChange={()=>{handleStatusChange('Completed')}}
            />
          </div>
          <hr/>
        </Col>
      </Row>
    </Container>
  );
}