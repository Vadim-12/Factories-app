import { Schema, model } from 'mongoose';
import IFactory from '../types/IFactory';

const FactorySchema = new Schema<IFactory>({
	index: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	host: {
		type: String,
		required: true,
	},
});

export const FactoryModel = model<IFactory>('Factory', FactorySchema);
