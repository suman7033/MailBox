import React from 'react'
import './emailbody.css'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import DeleteIcon from '@mui/icons-material/Delete';

const EmailBody = (props) => {
    const deleteHandler=()=>{
        alert("delete");
    }
  return (
    <div className='emailbody'>
       <div className='emailbody_left'>
         <StarBorderIcon/>&nbsp;
         <h4>{props.name}</h4>
       </div>
       <div className='emailbody_middle'>
        <div className='emailbody_middle_msg'>
          <p><b>{props.subject}</b>&nbsp;{props.message}</p>
        </div>

       </div>
       <div className='emailbody_right'>
           <p>{props.time}</p>
       </div>
       <div className='deleteIcon'>
         <DeleteIcon onClick={deleteHandler}/>
       </div>
    </div>
  )
}

export default EmailBody
