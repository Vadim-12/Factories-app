'use client';

import AddNewFactoryButton from '@/components/ui/AddNewFactoryButton';
import FactoryUnit from '@/components/ui/FactoryUnit';
import { IFactoriesData } from '@/types/factory';

const FactoriesScreen: React.FC<IFactoriesData> = ({ factories }) => {
	return (
		<div className='container containerFactoriesPage'>
			<h1>Заводы</h1>
			<AddNewFactoryButton />
			{factories.length &&
				factories.map((factory) => (
					<FactoryUnit key={factory._id} factory={factory} />
				))}
		</div>
	);
};

export default FactoriesScreen;
