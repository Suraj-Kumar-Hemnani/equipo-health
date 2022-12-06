import axios from 'axios';
import EButton from '../atoms/Button';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useTable } from 'react-table';
// https://react-table-v7.tanstack.com/docs/examples/basic


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

const PatientTable = ({status}: any) => {
  const [patients, setPatients] = useState([]); 
  useEffect(() =>{
    const patients = async ()=> {
      let res = await axios.get('./data/patientList.json');
      console.log(await res.data.patients);
      setPatients(await res.data.patients);
      return await res.data.patients;
    } 
    patients();
  }, []);
 
  return (
    <div className="table-responsive px-3">
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
        {patients.filter((patient:patient) => status ==="All" || status ==="" || patient.status === status).map((patient: patient)=>{
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