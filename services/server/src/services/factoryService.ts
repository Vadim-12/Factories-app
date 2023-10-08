import CreateFactoryDto from '../dtos/factory/create.dto';
import UpdateFactoryDto from '../dtos/factory/update.dto';
import { FactoryModel } from '../models/factoryModel';

class FactoryService {
	static async create(dto: CreateFactoryDto) {
		try {
			const newFactory = await FactoryModel.create(dto);
			return newFactory;
		} catch (e) {
			console.log(e);
		}
	}

	static async findAll() {
		try {
			const factories = await FactoryModel.find({});
			return factories;
		} catch (e) {
			console.log(e);
		}
	}

	static async findByIdAndDelete(id: string) {
		try {
			const deletedFactory = await FactoryModel.findByIdAndDelete(id);
			return deletedFactory;
		} catch (e) {
			console.log(e);
		}
	}

	static async findByIdAndUpdate(id: string, dto: UpdateFactoryDto) {
		const updatedFactory = await FactoryModel.findByIdAndUpdate(id, dto, {
			new: true,
		});
		return updatedFactory;
	}
}

export default FactoryService;
