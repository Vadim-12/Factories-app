import { SerializedError } from '@reduxjs/toolkit';
import { IFactoryWithIdAndHost, IFactoryWithIdAndOctets } from '../factory';

interface IFactoryState {
	factories: IFactoryWithIdAndHost[];
	isLoading: boolean;
	error: SerializedError | null;
	factoryForEdit?: IFactoryWithIdAndOctets;
}

export type { IFactoryState };
