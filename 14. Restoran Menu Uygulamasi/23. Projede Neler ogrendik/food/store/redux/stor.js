 import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './favorites';

 export default configureStore({
    reducer:{
        favorteFoods:favoritesReducer, 
         
    },
});