import axios from 'axios';
import EButton from '../atoms/Button';
import { useEffect, useMemo, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Pagination from './Paginator';
import { Row, Col } from 'react-bootstrap';
import CSVButton from './ExportCSV';


type patient =  {
  id?: number,
  name?: string,
  age?: number,
  cronicConditions?: string,
  payor?: string,
  opportunities?: string,
  phone?: string,
  lastVisit?: string,
  status?: string,
  action: [
    string
  ]
}

let PageSize = 4;

  
const PatientTable = ({status}: any) => {
  const [patients, setPatients] = useState([]); 

  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return patients.filter((patient:patient) => status ==="All" || status ==="" || patient.status === status).slice(firstPageIndex, lastPageIndex);
  }, [currentPage, patients, status]);
  
  useEffect(() =>{
    const patients = async ()=> {
      let res = await axios.get('./data/patientList.json');
      setPatients(await res.data.patients);
      return await res.data.patients;
    } 
    patients();
  }, []); 

  useEffect(()=>{
    setCurrentPage(1); // We want pagination to come to page 1 whenever there is a change when the radio buttons are selected.
  }, [status]);
 
  return (
    <div className="table-responsive px-3">

      <Row>
        <Col>
            <CSVButton data={patients}></CSVButton>
        </Col>
        <Col>
            <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={patients.filter((patient:patient) => status ==="All" || status ==="" || patient.status === status).length}
            pageSize={PageSize}
            onPageChange={page => setCurrentPage(page)} siblingCount={0}
            />
        </Col>
      </Row>      
    <Table striped>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Cronic Conditions</th>
          <th>Payor</th>
          <th>Opportunities</th>          
          <th>Phone</th>
          <th>Last Visit</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {currentTableData.map((patient: patient)=>{
          return(
            <tr>
              <td>{patient.name}</td>
              <td>{patient.age}</td>
              <td>{patient.cronicConditions}</td>
              <td>{patient.payor}</td>
              <td style={{textAlign: 'center'}}>{patient.opportunities? '1':'0'}</td>
              <td>{patient.phone}</td>
              <td>{patient.lastVisit}</td>
              <td><EButton variant='orange' title={"CarePlan"}></EButton></td>
            </tr>
          );
        })}        
      </tbody>
    </Table>    
    </div>
  );
}

export default PatientTable;