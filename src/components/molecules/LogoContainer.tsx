import Logo from "components/atoms/Logo";
import MenuOpener from "components/atoms/MenuOpener";
import { Col, Container, Row } from "react-bootstrap";
import { selectMenuStatus } from "reducers/MenuStateSlice";
import { useAppSelector } from "store/hooks";


const LogoContainer = () => {

  const menuStatus = useAppSelector(selectMenuStatus);
  
  return(
    <>
      <Container className="pt-2">
        <Row>
          {menuStatus.status === 'opened' && <Col xs={0} md={8}><Logo></Logo></Col>}
          <Col xs={12} md={4} className='p-0'><MenuOpener></MenuOpener></Col>
        </Row>
        <hr style={{color: 'var(--white)'}}/>
      </Container>      
    </>
  );
}

export default LogoContainer;