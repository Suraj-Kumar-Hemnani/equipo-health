import LogoContainer from "../molecules/LogoContainer";
import MenuItem from "../molecules/MenuItem";
import {AiFillDashboard, AiTwotonePieChart} from "react-icons/ai";
import {BsShieldShaded, BsFillPersonFill, BsReceiptCutoff, BsCardList, BsEnvelopeFill} from "react-icons/bs";
import {BiFirstAid, BiBuilding} from "react-icons/bi";
import {HiOutlineDocumentText} from "react-icons/hi";
import {RiBriefcase4Fill} from "react-icons/ri";

type LeftMenuProps = {

}

export default function LeftMenu(props: LeftMenuProps) {
  function handleMenuItemClick() {
    throw new Error("Function not implemented.");
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
      <MenuItem title="Patient" onClick={()=>handleMenuItemClick()}>
        <BsFillPersonFill></BsFillPersonFill>
      </MenuItem>
      <MenuItem title="Patient" onClick={()=>handleMenuItemClick()}>
        <BsFillPersonFill></BsFillPersonFill>
      </MenuItem>
      <MenuItem title="Patient" onClick={()=>handleMenuItemClick()}>
        <BsReceiptCutoff></BsReceiptCutoff>
      </MenuItem>
    </>
  );
}