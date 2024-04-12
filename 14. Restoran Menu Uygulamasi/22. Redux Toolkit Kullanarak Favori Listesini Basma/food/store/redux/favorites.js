import { createSlice } from '@reduxjs/toolkit';

import favoritesReducer from './favorites';


const favoritesSilece=createSlice({
    name:'favorites',
    initialState:{
        ids:[], 
    },
    reducers:{
        addFavorite(state,action){
            state.ids.push(action.payload.id);
        },
        removeFavorite(state,action){
            state.ids=state.ids.filter(id=>id!==action.payload.id);
        }
    }
});

export  default favoritesSilece.reducer;
export const addFavorite=favoritesSilece.actions.addFavorite;
export const removeFavorite=favoritesSilece.actions.removeFavorite;


 