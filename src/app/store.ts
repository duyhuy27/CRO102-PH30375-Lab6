import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../features/couter/couterSlice.ts';
import {setupListeners} from '@reduxjs/toolkit/query';
import {pokemonApi} from '../services/pokemon.ts';
import {userApi} from '../services/user.ts';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(pokemonApi.middleware, userApi.middleware),
});
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;