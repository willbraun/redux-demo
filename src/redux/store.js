// this creates one store, but we may need to add multiple stores as the app expands


import { configureStore } from '@reduxjs/toolkit'

// when importing the default export from ./counter, we can give it any name we want
import counterReducer from './counter'

export const store = configureStore({
  reducer: {
    counter: counterReducer, // naming the reducer "counter", and giving it the value of the reducer function we imported
  },
})