import { NextPage } from 'next';
import { useAppDispatch, useAppSelector } from '@/hooks/store';
import { IFactoriesData } from '@/types/factory';
import FactoriesScreen from '@/components/screens/factories/index.screen';
import { fetchAllFactories } from '@/store/slices/factorySlice';

const FactoriesPage: NextPage<IFactoriesData> = async () => {
	const dispatch = useAppDispatch();
	await dispatch(fetchAllFactories());
	const factories = useAppSelector((state) => state.factory.factories);

	return <FactoriesScreen factories={factories} />;
};

export default FactoriesPage;

/*
	const factories: IFactoryWithId[] = [
		{
			_id: 'r12l23k1j41234',
			name: 'КПО "Север"',
			index: 'msk',
			host: '155.54.265.108',
		},
		{
			_id: 'jfqlkefjowasi',
			name: 'КПО "Храброво"',
			index: 'spb',
			host: '155.54.265.108',
		},
		{
			_id: 'doispagh3qo3f8',
			name: 'КПО "Юг"',
			index: 'msk',
			host: '155.54.265.108',
		},
		{
			_id: 'sado8hfa823lh234',
			name: 'Кашира',
			index: 'moja',
			host: '155.54.265.108',
		},
	];
	*/
