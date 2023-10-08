import { NextFunction, Response } from 'express';
import ApiRequest from '../types/request';
import CreateFactoryDto from '../dtos/factory/create.dto';
import FactoryService from '../services/factoryService';
import UpdateFactoryDto from '../dtos/factory/update.dto';

class FactoryController {
	static async create(
		req: ApiRequest<CreateFactoryDto>,
		res: Response,
		next: NextFunction
	) {
		try {
			const dto = req.body;
			const createdFactory = await FactoryService.create(dto);
			return res.json(createdFactory);
		} catch (e) {
			next(e);
		}
	}

	static async getAll(req: ApiRequest, res: Response, next: NextFunction) {
		try {
			const factories = await FactoryService.findAll();
			return res.json(factories);
		} catch (e) {
			next(e);
		}
	}

	static async findByIdAndUpdate(
		req: ApiRequest<UpdateFactoryDto>,
		res: Response,
		next: NextFunction
	) {
		try {
			const id = req.params.id;
			const dto = req.body;
			const updatedFactory = await FactoryService.findByIdAndUpdate(id, dto);
			return res.json(updatedFactory);
		} catch (e) {
			next(e);
		}
	}

	static async findByIdAndDelete(
		req: ApiRequest,
		res: Response,
		next: NextFunction
	) {
		try {
			const id = req.params.id;
			const deletedFactory = await FactoryService.findByIdAndDelete(id);
			return res.json(deletedFactory);
		} catch (e) {
			next(e);
		}
	}
}

export default FactoryController;
