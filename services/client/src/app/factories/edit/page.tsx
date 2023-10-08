import EditFactoryScreen from '@/components/screens/factories/edit.screen';
import { useAppSelector } from '@/hooks/store';
import { NextPage } from 'next';

const EditFactoryPage: NextPage = () => {
	const factoryForEdit = useAppSelector(
		(state) => state.factory.factoryForEdit
	);

	return <EditFactoryScreen factory={factoryForEdit!} />;
};

export default EditFactoryPage;
