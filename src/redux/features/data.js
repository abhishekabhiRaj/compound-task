import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: [
        {
            name:'Compound'
        }
    ]
}

const compoundSlice = createSlice({
    name: 'compond',
    initialState,
    reducers: {
        setData: (state, action) => {
            state.data.push(action.payload)
            // console.log(action.payload)
        }
    }
});

export const { setData } = compoundSlice.actions

export const getData = (state) => state.compond.data

export default compoundSlice.reducer