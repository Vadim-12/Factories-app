import { Request } from 'express';

export default interface ApiRequest<T = any> extends Request {
	body: T;
}
