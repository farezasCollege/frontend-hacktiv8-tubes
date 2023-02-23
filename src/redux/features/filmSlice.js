import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    entities: [],
    loading: false
}

// const uri = 

export const fetchFilm = createAsyncThunk("films/initial",async (param) => {
    const response = await axios.get(`https://www.omdbapi.com/?s=${param}&page=2&apikey=${process.env.REACT_APP_OMDB_TOKEN}`)
    // console.log("ini response: ",response)
    return response.data
})

const filmSlice = createSlice({
    name: "films",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchFilm.pending, (state, action) => {
            state.loading = true
        })

        builder.addCase(fetchFilm.fulfilled, (state, action) => {
            // console.log("state: ", state)
            // console.log("action: ", action.payload.Search)
            // state.entities
            state.entities = action.payload.Search
            state.loading = false
        })
    }
})

export default filmSlice.reducer