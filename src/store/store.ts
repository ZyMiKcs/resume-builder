import { configureStore } from '@reduxjs/toolkit';
import { reducer as formdataReducer } from './formdata/formdataSlice';
import { updateLocalStorage } from '../utils/updateLocalStorage';

export const store = configureStore({
    reducer: {
        formdata: formdataReducer,
    },
    devTools: true,
});

store.subscribe(() => {
    updateLocalStorage(store.getState().formdata.id, store.getState().formdata);
});
