'use client';

import React from 'react';
import { useRouter } from 'next/router';

const AddNewFactoryButton: React.FC = () => {
	const router = useRouter();

	const handleAddNewFactory = async () => {
		router.push('/factories/create');
	};

	return (
		<button className='add-new-factory-button' onClick={handleAddNewFactory}>
			Добавить новый завод
			<span>+</span>
		</button>
	);
};

export default AddNewFactoryButton;
