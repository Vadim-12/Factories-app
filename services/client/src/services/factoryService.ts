import $api from '@/config/api';
import { IFactoryWithHost, IFactoryWithIdAndHost } from '@/types/factory';
import { AxiosResponse } from 'axios';

class FactoryService {
	static async create(
		createDto: IFactoryWithHost
	): Promise<AxiosResponse<IFactoryWithIdAndHost>> {
		return $api.post<IFactoryWithIdAndHost>('/api/factories', createDto);
	}

	static async getAll(): Promise<AxiosResponse<IFactoryWithIdAndHost[]>> {
		return $api.get<IFactoryWithIdAndHost[]>('/api/factories');
	}

	static async updateById(
		id: string,
		updatedFactory: IFactoryWithHost
	): Promise<AxiosResponse<IFactoryWithIdAndHost>> {
		return $api.put<IFactoryWithIdAndHost>(
			`/api/factories/${id}`,
			updatedFactory
		);
	}

	static async deleteById(
		id: string
	): Promise<AxiosResponse<IFactoryWithIdAndHost>> {
		return $api.delete<IFactoryWithIdAndHost>(`/api/factories/${id}`);
	}
}

export default FactoryService;
