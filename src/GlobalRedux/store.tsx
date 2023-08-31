"use client"

import {configureStore} from '@reduxjs/toolkit'
import counterSlice from './Features/CounterSlice/counterSlice'
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import singleEvent from './Features/SingleEvent/singleEvent';

export const store : any = configureStore({
    reducer:{
       counter: counterSlice,
       singleEvent: singleEvent
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
