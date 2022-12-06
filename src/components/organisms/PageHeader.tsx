import { Col, Row } from "react-bootstrap"
import styled from "styled-components"
import EButton from "../atoms/Button"
import {GiNotebook, GiStabbedNote} from 'react-icons/gi';
import {RiShieldCrossFill} from 'react-icons/ri';

interface PageHeaderProps {
  pageTitle: React.ReactNode,
}

export default function PageHeader({pageTitle}: PageHeaderProps) {
  return(
    <>
    <hr/>
      <Row style={{textAlign: 'left'}} className='py-3'>
        <Col xs={12} md={4}><PageHeading>{pageTitle}</PageHeading></Col>
        <Col>
          <EButton title="Summary"><GiNotebook></GiNotebook></EButton>
          <EButton icon="" title="Program"><RiShieldCrossFill></RiShieldCrossFill></EButton>
          <EButton icon="" title="Risk"><RiShieldCrossFill></RiShieldCrossFill></EButton>
          <EButton icon="" title="KPI"><GiStabbedNote></GiStabbedNote></EButton>
        </Col>
      </Row>
    </>
  )
}

const PageHeading = styled.h1`
  color: var(--pink);
  font-size: 2rem;
`;