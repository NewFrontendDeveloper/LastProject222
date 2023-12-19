import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    val: '',
}

export const tokenSLice = createSlice({
    name:'tok',
    initialState,
    reducers: {
        addToken: (state,action)=> {
            state.val = action.payload
            console.log(action.payload)
        }
    }
})

export const {addToken} = tokenSLice.actions
export default tokenSLice.reducer