import React from 'react'
import './compose.css'
import RemoveIcon from '@mui/icons-material/Remove';
import PinchIcon from '@mui/icons-material/Pinch';
import ClearIcon from '@mui/icons-material/Clear';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import TextFormatIcon from '@mui/icons-material/TextFormat';
import AttachmentIcon from '@mui/icons-material/Attachment';
import LinkIcon from '@mui/icons-material/Link';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import LockIcon from '@mui/icons-material/Lock';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';

const Compose = () => {
  return (
    <div className='compose'>
       <div className='compose_header'>
          <div className='compose_header_left'>
             <span>New Message</span>
          </div>

          <div className='compose_header_right'>
            <RemoveIcon/>
            <PinchIcon/>
            <ClearIcon/>
          </div>
       </div>

       <div className='compose_body'>
           <div className='compose_bodyform'>
             <input type='email' placeholder='Reciepents'/>
             
             <input type='text' placeholder='Subject'/>
             <textarea rows='20'></textarea>
           </div>
       </div>

       <div className='compose_footer'>
          <div className='compose_footerleft'>
             <button type='submit'>send <ArrowDropDownIcon/></button>
          </div>
          <div className='compose_footerright'>
             <TextFormatIcon/>
             <AttachmentIcon/>
             <LinkIcon/>
             <TagFacesIcon/>
             <AddToDriveIcon/>
             <InsertPhotoIcon/>
             <LockIcon/>
             <MoreVertIcon/>
             <DeleteIcon/>
          </div>
       </div>
    </div>
  )
}

export default Compose
