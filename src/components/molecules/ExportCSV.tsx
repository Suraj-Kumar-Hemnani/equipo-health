import EButton from "components/atoms/Button";
import { CSVLink } from "react-csv";


type Headers = {
  label: string,
  key: string
}

export interface ExportCSVProps {
  headers?: Headers[],
  data:any
}

export default function CSVButton({headers, data}: ExportCSVProps){
  return (
  <CSVLink data={data} headers={headers}>
    <EButton variant='rounded' title={"Export to CSV"}></EButton>
  </CSVLink>
  );
}
