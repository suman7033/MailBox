import { createSlice} from '@reduxjs/toolkit';

const initialComposeState={
    message: [],
    showCompose: true,
    count: 0,
    showEmail: true,
    openMessage: null,
}

const composeSlice=createSlice({
    name: 'compose',
    initialState: initialComposeState,
    reducers: {
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
           console.log("sendSlice",action.payload)
           state.message.push(action.payload);
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
        }

    }
})
export const composeAction=composeSlice.actions;

export default composeSlice.reducer;