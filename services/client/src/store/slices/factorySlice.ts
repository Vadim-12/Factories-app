import FactoryService from '@/services/factoryService';
import { IFactoryWithHost, IFactoryWithIdAndHost } from '@/types/factory';
import { IFactoryState } from '@/types/store/factory';
import FactoryFormatter from '@/utils/factoryFormatter';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState: IFactoryState = {
	factories: [],
	isLoading: false,
	error: null,
};

export const createFactory = createAsyncThunk<
	IFactoryWithIdAndHost,
	IFactoryWithHost
>(
	'factories/create',
	async (createDto: IFactoryWithHost, { rejectWithValue }) => {
		try {
			const response = await FactoryService.create(createDto);
			return response.data;
		} catch (e) {
			return rejectWithValue(e);
		}
	}
);

export const fetchAllFactories = createAsyncThunk<
	IFactoryWithIdAndHost[],
	void
>('factories/fetchAll', async (_, { rejectWithValue }) => {
	try {
		const response = await FactoryService.getAll();
		return response.data;
	} catch (e) {
		return rejectWithValue(e);
	}
});

export const deleteFactory = createAsyncThunk<IFactoryWithIdAndHost, string>(
	'factories/delete',
	async (id: string, { rejectWithValue }) => {
		try {
			const response = await FactoryService.deleteById(id);
			return response.data;
		} catch (e) {
			return rejectWithValue(e);
		}
	}
);

export const updateFactory = createAsyncThunk<
	IFactoryWithIdAndHost,
	IFactoryWithIdAndHost
>(
	'factories/update',
	async (updateDto: IFactoryWithIdAndHost, { rejectWithValue }) => {
		try {
			const response = await FactoryService.updateById(
				updateDto._id,
				updateDto
			);
			return response.data;
		} catch (e) {
			return rejectWithValue(e);
		}
	}
);

const factorySlice = createSlice({
	name: 'factories',
	initialState,
	reducers: {
		setFactoryForEdit: (
			state,
			action: PayloadAction<IFactoryWithIdAndHost>
		) => {
			const formattedFactory =
				FactoryFormatter.factoryWithIdAndHostToFactoryWithIdAndOctets(
					action.payload
				);
			state.factoryForEdit = formattedFactory;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(createFactory.pending, (state, action) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(createFactory.fulfilled, (state, action) => {
				state.isLoading = false;
				const createdFactory = action.payload;
				state.factories.push(createdFactory);
			})
			.addCase(createFactory.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.error;
			})
			.addCase(fetchAllFactories.pending, (state, action) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(fetchAllFactories.fulfilled, (state, action) => {
				state.isLoading = false;
				state.factories = action.payload;
			})
			.addCase(fetchAllFactories.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.error;
			})
			.addCase(deleteFactory.pending, (state, action) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(deleteFactory.fulfilled, (state, action) => {
				state.isLoading = false;
				const deletedFactory = action.payload;
				state.factories = state.factories.filter(
					(factory) => factory._id !== deletedFactory._id
				);
			})
			.addCase(deleteFactory.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.error;
			})
			.addCase(updateFactory.pending, (state, action) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(updateFactory.fulfilled, (state, action) => {
				state.isLoading = false;
				const updatedFactory = action.payload;
				state.factories = state.factories.map((factory) =>
					factory._id === updatedFactory._id ? updatedFactory : factory
				);
			})
			.addCase(updateFactory.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.error;
			});
	},
});

export const { setFactoryForEdit } = factorySlice.actions;
export default factorySlice;
