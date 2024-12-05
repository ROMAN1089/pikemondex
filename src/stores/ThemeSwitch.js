import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: "theme",
    initialState: {
        theme: "lightTheme"
    },
    reducers: {
        toggleTheme(state) {
            state.theme = state.theme === "lightTheme" ? "darkTheme" : "lightTheme";
        }
    }
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;