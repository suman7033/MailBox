import React from 'react'
import './header.css'
import ReorderIcon from '@mui/icons-material/Reorder';
import { IconButton,Avatar} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import HelpIcon from '@mui/icons-material/Help';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';


const Header = () => {
  return (
    <div className='header'>
        <div className='header_left'>
          <IconButton>
            <ReorderIcon/>
          </IconButton>
          <img className='gmail' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRBgJ01d5d1m59ngkGAs0LviHoVgOH6jqohPTJMEv7yNYf26tlysOfKvcH3EZrT6gJV5g&usqp=CAU'/>
       </div>

       <div className='header_middle'>
        <div className='search_mail'>
          <IconButton>
            <SearchIcon/>
          </IconButton>
          <input type='text' placeholder='search mail'/>
          <IconButton>
            <ArrowDropDownIcon/>
          </IconButton>
        </div>
       </div>

       <div className='header_right'>
         <IconButton>
            <HelpIcon/>
         </IconButton>
         <IconButton>
            <SettingsIcon/>
         </IconButton>
         <IconButton>
            <AppsIcon/>
         </IconButton>
         <IconButton>
        <Avatar src='https://png.pngtree.com/png-clipart/20190924/original/pngtree-vector-user-young-boy-avatar-icon-png-image_4827810.jpg'/>
         </IconButton>
       </div>
    </div>
  )
}

export default Header
