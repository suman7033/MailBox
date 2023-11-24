import React from 'react'
import './emaillist.css'
import EmailListSetting from '../EmailListSetting/EmailListSetting'
import EmailType from '../EmailType/EmailType'
import { IconButton } from '@mui/material'
import EmailBody from '../EmailBody/EmailBody'

const EmailList = () => {
  return (
    <>
    <div className='emailList'>
      <EmailListSetting/>
       
    </div>
    <IconButton>
    <EmailType/>
    </IconButton>
    <EmailBody name='sumo' subject='this is new message' message='message' time='03:20'/>
    </>
  )
}

export default EmailList
