interface IFactoryBase {
	index: string;
	name: string;
}

export interface IFactoryWithOctets extends IFactoryBase {
	hostOctet1: string;
	hostOctet2: string;
	hostOctet3: string;
	hostOctet4: string;
}

export interface IFactoryWithHost extends IFactoryBase {
	host: string;
}

export interface IFactoryWithIdAndHost extends IFactoryWithHost {
	_id: string;
}

export interface IFactoryWithIdAndOctets extends IFactoryWithOctets {
	_id: string;
}

export interface IFactoriesData {
	factories: IFactoryWithIdAndHost[];
}

export interface IFactoryData {
	factory: IFactoryWithIdAndHost;
}
