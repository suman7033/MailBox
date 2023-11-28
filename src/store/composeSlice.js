import { createSlice} from '@reduxjs/toolkit';

const initialComposeState={
    message: [],
    RecieveMessage: [],
    showCompose: true,
    count: 0,
    RecieveCount: 0,
    showEmail: true,
    openMessage: null,
    SentShow: false,
    RecieveShow: false,
    sendEmail: '',
}

const composeSlice=createSlice({
    name: 'compose',
    initialState: initialComposeState,
    reducers: {
        RecieveMessage(state,action){
           state.RecieveMessage.push(action.payload);
           state.RecieveCount=state.RecieveCount+1;
        },
        setCompose(state,action){
            state.message=action.payload;
            const getCount=action.payload.length;
            //const getCount=action.payload.reduce((count,message)=> count+parseFloat(message.count),0)
            state.count=getCount;
        },
        Showcompose(state,action){
            state.showCompose=!state.showCompose;
        },
        sendMessage(state,action){
           //console.log("sendSlice",action.payload)
           state.message.push(action.payload);
           state.sendEmail=action.payload.reciept;
           console.log("sendEmail",action.payload.reciept);
           state.count=state.count+1;
        },
        deleteCompose(state,action){
            const id=action.payload.id;
            const reqindex=state.message.findIndex((item)=>item.id===id);
            state.count=state.count-1;
            state.message.splice(reqindex,1);
        },
        ShowEmail(state,action){
           state.showEmail=!state.showEmail
        },
        openMessage(state,action){
            console.log("openMessage",action.payload);
          state.openMessage=action.payload;
        },
        SentShowMessage(state,action){
           state.SentShow=true;
        },
        RecieveShowMessage(state,action){
            state.RecieveShow=true;
            state.SentShow=false;
        }

    }
})
export const composeAction=composeSlice.actions;

export default composeSlice.reducer;