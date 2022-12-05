import styled from 'styled-components';
import LogoImage from '../../assets/logo-equipo.png';

export default function Logo(){
  return(
    <LogoHolder>
      <img src={LogoImage} alt="Logo" style={{maxWidth:'100%', filter: 'brightness(0) invert(1)'}}/>      
    </LogoHolder>
  )
}

const LogoHolder = styled.div`
  padding: 5px;
`;