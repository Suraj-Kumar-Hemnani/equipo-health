import styled from "styled-components";
import {GoPlus} from 'react-icons/go';
import EButton from "components/atoms/Button";

export default function SearchBox() {
  return (<>
    <SearchInput placeholder="Firstname / Lastname"></SearchInput>    
    <EButton variant="rounded" title="Patient"><GoPlus></GoPlus></EButton>
  </>);
}

const SearchInput = styled.input`
  padding: 5px;
  margin: 15px 15px 0;
  border-radius: 15px;
  padding-left: 50px;
  position: relative;
  border: 1px solid #efefef;
}
`;
