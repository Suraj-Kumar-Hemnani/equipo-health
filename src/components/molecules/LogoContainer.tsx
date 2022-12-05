import Logo from "components/atoms/Logo";
import MenuOpener from "components/atoms/MenuOpener";
import { Col, Container, Row } from "react-bootstrap";


const LogoContainer = () => {

  return(
    <>
      <Container>
        <Row>
          <Col xs={0} md={8}><Logo></Logo></Col>
          <Col xs={12} md={4}><MenuOpener></MenuOpener></Col>
        </Row>
      </Container>      
    </>
  );
}

export default LogoContainer;