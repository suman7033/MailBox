import React from 'react'
import './sidebar.css';
import { IconButton } from '@mui/material';
import {Button} from '@mui/material';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import SideBarOption from '../SideBarOption/SideBarOption';
import MailIcon from '@mui/icons-material/Mail';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import SendIcon from '@mui/icons-material/Send';
import DraftsIcon from '@mui/icons-material/Drafts';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


const sidebar = () => {
  const composeHandler=()=>{
     alert("compose")
  }
  return (
     <div className='sidebar'>
       <Button startIcon={<ControlPointIcon/>} className='compose_btn' onClick={composeHandler}>Compose</Button><br/><br/>
       
       <SideBarOption Icon={MailIcon} title='Inbox' number='234' isactive={true}/>

       <SideBarOption Icon={StarBorderIcon} title='Starred' number='234'/>

       <SideBarOption Icon={AccessTimeFilledIcon} title='Snoozed' number='234'/>

       <SideBarOption Icon={SendIcon} title='Sent' number='234'/>

       <SideBarOption Icon={DraftsIcon} title='Drafts' number='234'/>

       <SideBarOption Icon={DeleteForeverIcon} title='Trash' number='234'/>

     </div>
  )
}

export default sidebar
