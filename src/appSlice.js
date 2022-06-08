import { createSlice } from '@reduxjs/toolkit'



const appSlice = createSlice({
    name: 'app',
    initialState: {themeMode: 'lightTheme'}, 
    reducers: {
        setThemeMode: (state, action) => {
            state.themeMode = action.payload
        },
    },
});

export const {setThemeMode} = appSlice.actions
export default appSlice.reducer;