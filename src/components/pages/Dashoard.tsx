import SearchBox from "components/molecules/SearchBox";
import CardsContainer from "../organisms/CardsContainer";
import PatientList from "../organisms/PatientList";
import DefaultLayout from "../templates/Default";

export default function Dashoard () {
  return (
    <>
    <SearchBox></SearchBox>
      <DefaultLayout pageTitle="Dashboard">        
        <CardsContainer></CardsContainer>
        <PatientList></PatientList>
      </DefaultLayout>
    </>
  );
}