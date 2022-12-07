import LogoContainer from "../molecules/LogoContainer";
import MenuItem from "../molecules/MenuItem";
import {AiFillDashboard, AiTwotonePieChart} from "react-icons/ai";
import {BsShieldShaded, BsFillPersonFill, BsReceiptCutoff, BsCardList, BsEnvelopeFill} from "react-icons/bs";
import {BiFirstAid, BiBuilding} from "react-icons/bi";
import {HiOutlineDocumentText} from "react-icons/hi";
import {RiBriefcase4Fill} from "react-icons/ri";
import styled from "styled-components";

export default function LeftMenu() {
  function handleMenuItemClick() {
    console.log("--");
  }
  
  return(
    <>
     <LogoContainer></LogoContainer>
      <MenuItem title="Dashboard" onClick={()=>handleMenuItemClick()}>
        <AiFillDashboard></AiFillDashboard>
      </MenuItem>
      <MenuItem title="Quality" onClick={()=>handleMenuItemClick()}>
        <BsShieldShaded></BsShieldShaded>
      </MenuItem>
      <MenuItem title="Analytics" onClick={()=>handleMenuItemClick()}>
        <AiTwotonePieChart></AiTwotonePieChart>
      </MenuItem>
      <MenuItem title="Programs" onClick={()=>handleMenuItemClick()}>
        <BiFirstAid></BiFirstAid>
      </MenuItem>
      <MenuItem title="Reports" onClick={()=>handleMenuItemClick()}>
        <HiOutlineDocumentText></HiOutlineDocumentText>
      </MenuItem>
      <Seperator />
      <MenuItem title="Patient" onClick={()=>handleMenuItemClick()}>
        <BsFillPersonFill></BsFillPersonFill>
      </MenuItem>
      <Seperator />
      <MenuItem title="Work Boards" onClick={()=>handleMenuItemClick()}>
        <RiBriefcase4Fill></RiBriefcase4Fill>
      </MenuItem>
      <MenuItem title="Order" onClick={()=>handleMenuItemClick()}>
        <BsReceiptCutoff></BsReceiptCutoff>
      </MenuItem>
      <MenuItem title="Appointment" onClick={()=>handleMenuItemClick()}>
        <BsCardList></BsCardList>
      </MenuItem>
      <MenuItem title="InPatient" onClick={()=>handleMenuItemClick()}>
        <BiBuilding></BiBuilding>
      </MenuItem>
      <Seperator />
      <MenuItem title="Messages" onClick={()=>handleMenuItemClick()}>
        <BsEnvelopeFill></BsEnvelopeFill>
      </MenuItem>
    </>
  );
}

const Seperator = styled.hr`
  color: var(--white);
  margin: 0;
`;