import styled from 'styled-components';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import LeftMenu from '../organisms/LeftMenu';
import PageHeader from '../organisms/PageHeader';

type DefaultLayoutProps = {
   children?: React.ReactNode;
   pageTitle?: string;
}

export default function DefaultLayout({children, pageTitle}: DefaultLayoutProps){
  return(
    <Container fluid>
      <Row>
        <Col xs={8} md={2} style={{backgroundColor: 'var(--blue)', maxWidth:'200px'}}>
          <MenuContainer className='row'>
            <LeftMenu></LeftMenu>
          </MenuContainer>
        </Col>
        <Col xs={12} md={10}>
          <PageContainer>
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
`;

const PageContainer = styled.div`
  text-align: left;
`;

