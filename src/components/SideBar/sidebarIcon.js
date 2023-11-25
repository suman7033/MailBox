import React from 'react'
import './sidebar.css';
import { Link } from 'react-router-dom';
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
import { useDispatch, useSelector } from 'react-redux';
import { composeAction } from '../../store/composeSlice';
import {toast} from 'react-toastify'


const SidebarIcon = () => {
  const count=useSelector((state)=>state.compose.count)
  
   const dispatch=useDispatch();  
  const composeHandler=()=>{
    toast.success('Open Compose Box', {
      position: 'top-center',
      autoClose: 3000,
    });
    dispatch(composeAction.Showcompose())
  }
  const logoutHandler=()=>{
    toast.error('Logout Sucessful', {
      position: 'top-center',
      autoClose: 3000,
    });
  }
  return (
     <div className='sidebar'>
       <Button startIcon={<ControlPointIcon/>} className='compose_btn' onClick={composeHandler}>Compose</Button><br/><br/>
       
       <SideBarOption Icon={MailIcon} title='Inbox' number={count} isactive={true}/>

       <SideBarOption Icon={StarBorderIcon} title='Starred' number='234'/>

       <SideBarOption Icon={AccessTimeFilledIcon} title='Snoozed' number='234'/>

       <SideBarOption Icon={SendIcon} title='Sent' number={count} isactive={true}/>

       <SideBarOption Icon={DraftsIcon} title='Drafts' number='234'/>

       <SideBarOption Icon={DeleteForeverIcon} title='Trash' number='234'/>
       <button className='logoutBtn' onClick={logoutHandler}><Link to='/'>Logout</Link></button>
     </div>
  )
}

export default SidebarIcon;
