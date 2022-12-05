import { useState } from "react";
import PatientRadioContainer from "../molecules/PatientRadioContainer";
import PatientTable from "../molecules/PatientTable";

export default function PatientList() {

  const [status, setStatus] = useState("");
  
  const handleChange = (value: string)=>{
    setStatus(value);
  }

  return(
    <>
      <PatientRadioContainer onChange={handleChange}></PatientRadioContainer>
      <PatientTable status={status}></PatientTable>
    </>
  );
}