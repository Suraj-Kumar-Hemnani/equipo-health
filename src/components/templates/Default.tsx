import styled from 'styled-components';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import LeftMenu from '../organisms/LeftMenu';
import PageHeader from '../organisms/PageHeader';
import { selectMenuStatus } from 'reducers/MenuStateSlice';
import { useAppSelector } from 'store/hooks';
import SearchBox from 'components/molecules/SearchBox';

type DefaultLayoutProps = {
   children?: React.ReactNode;
   pageTitle?: string;
}

export default function DefaultLayout({children, pageTitle}: DefaultLayoutProps){

  const menuStatus = useAppSelector(selectMenuStatus);  
  const menuWidth = menuStatus.status==='opened'? '200px': '50px';

  return(
    <Container fluid>
      <Row>
        <Col xs={8} md={2} style={{position: 'fixed', backgroundColor: 'var(--blue)', maxWidth: menuWidth}}>
          <MenuContainer className='row'>
            <LeftMenu></LeftMenu>
          </MenuContainer>
        </Col>
        <Col xs={12} style={{paddingLeft: menuWidth}}>
          <PageContainer>
            <SearchBox></SearchBox>
            <PageHeader pageTitle={pageTitle}></PageHeader>
            {children}
          </PageContainer>
        </Col>
      </Row>
    </Container>
  )
}

const MenuContainer = styled.div`
  max-width: 200px;
  background-color: var(--blue);
  height: 100vh;
  align-content: start;
  transition: all 0.35s ease-in;
`;

const PageContainer = styled.div`
  text-align: left;
  padding-left: 15px;
`;

