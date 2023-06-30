import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    nav: 0,
}

const navbarSlice = createSlice({
    name: 'navbar',
    initialState,
    reducers: {
        setData: (state, action) => {
            state.nav = action.payload
        }
    }
});

export const { setData } = navbarSlice.actions

export const getData = (state) => state.navbar.nav

export default navbarSlice.reducer