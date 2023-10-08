import { configureStore } from '@reduxjs/toolkit';
import factorySlice from './slices/factorySlice';

const store = configureStore({
	reducer: {
		factory: factorySlice.reducer,
	},
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
