import React from 'react'
import './emaillist.css'
import EmailListSetting from '../EmailListSetting/EmailListSetting'
import EmailType from '../EmailType/EmailType'
import { IconButton } from '@mui/material'
import EmailBody from '../EmailBody/EmailBody'
import { useSelector } from 'react-redux'

const EmailList = () => {
  const message=useSelector((state)=>state.compose.message)
  console.log("EmailListMessage",message);
  return (
    <>
    <div className='emailList'>
      <EmailListSetting/>
       
    </div>
    <IconButton>
    <EmailType/>
    </IconButton>
    {message.map((message)=>(
       <EmailBody id={message.id} name={message.reciept} subject={message.subject} message={message.textarea} time='03:20'/>
    ))}
    {/* <EmailBody name={composeValue.reciept} subject={composeValue.subject} message={composeValue.textarea} time='03:20'/> */}
    </>
  )
}

export default EmailList
