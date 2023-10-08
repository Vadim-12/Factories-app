import {
	IFactoryWithHost,
	IFactoryWithIdAndHost,
	IFactoryWithIdAndOctets,
	IFactoryWithOctets,
} from '@/types/factory';

class FactoryFormatter {
	static factoryWithIdAndOctetsToFactoryWithIdAndHost(
		from: IFactoryWithIdAndOctets
	): IFactoryWithIdAndHost {
		const to: IFactoryWithIdAndHost = {
			_id: from._id,
			index: from.index,
			name: from.name,
			host: `${from.hostOctet1}.${from.hostOctet2}.${from.hostOctet3}.${from.hostOctet4}`,
		};
		return to;
	}

	static factoryWithIdAndHostToFactoryWithIdAndOctets(
		from: IFactoryWithIdAndHost
	): IFactoryWithIdAndOctets {
		const hostOctets = from.host.split('.');
		const to: IFactoryWithIdAndOctets = {
			_id: from._id,
			index: from.index,
			name: from.name,
			hostOctet1: hostOctets[0],
			hostOctet2: hostOctets[1],
			hostOctet3: hostOctets[2],
			hostOctet4: hostOctets[3],
		};
		return to;
	}

	static factoryWithOctetsToFactoryWithHost(
		from: IFactoryWithOctets
	): IFactoryWithHost {
		const to: IFactoryWithHost = {
			index: from.index,
			name: from.name,
			host: `${from.hostOctet1}.${from.hostOctet2}.${from.hostOctet3}.${from.hostOctet4}`,
		};
		return to;
	}

	static factoryWithHostToFactoryWithOctets(
		from: IFactoryWithHost
	): IFactoryWithOctets {
		const hostOctets = from.host.split('.');
		const to: IFactoryWithOctets = {
			index: from.index,
			name: from.name,
			hostOctet1: hostOctets[0],
			hostOctet2: hostOctets[1],
			hostOctet3: hostOctets[2],
			hostOctet4: hostOctets[3],
		};
		return to;
	}

	static factoryWithIdAndHostToFactoryWithOctets(
		from: IFactoryWithIdAndHost
	): IFactoryWithOctets {
		const hostOctets = from.host.split('.');
		const to: IFactoryWithOctets = {
			index: from.index,
			name: from.name,
			hostOctet1: hostOctets[0],
			hostOctet2: hostOctets[1],
			hostOctet3: hostOctets[2],
			hostOctet4: hostOctets[4],
		};
		return to;
	}

	static factoryWithIdAndOctetsToFactoryWithHost(
		from: IFactoryWithIdAndOctets
	): IFactoryWithHost {
		const to: IFactoryWithHost = {
			index: from.index,
			name: from.name,
			host: `${from.hostOctet1}.${from.hostOctet2}.${from.hostOctet3}.${from.hostOctet4}`,
		};
		return to;
	}
}

export default FactoryFormatter;
