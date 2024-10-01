import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCharacters = createAsyncThunk(
    "character/fetchCharacters",
    async () => {
        const response = await fetch("https://rickandmortyapi.com/api/character")
        const data = await response.json()
        return data
    }
)

const characterSlice = createSlice({
    name: "character",
    initialState: {
        character: null
    },
    reducers: {
        setCharacter: (state, action) => {
            state.character = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCharacters.fulfilled, (state, action) => {
                state.character = action.payload
            })
    }
})

export const { setCharacter } = characterSlice.actions
export default characterSlice.reducer