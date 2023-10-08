'use client';

import { useAppDispatch } from '@/hooks/store';
import { IFactoryWithIdAndHost } from '@/types/factory';
import React from 'react';
import { deleteFactory, setFactoryForEdit } from '@/store/slices/factorySlice';
import { useRouter } from 'next/router';

const FactoryUnit: React.FC<{ factory: IFactoryWithIdAndHost }> = ({
	factory,
}) => {
	const router = useRouter();
	const dispatch = useAppDispatch();

	const handleEditFactory = () => {
		dispatch(setFactoryForEdit(factory));
		router.push('/factories/edit');
	};
	const handleDeleteFactory = async () => {
		await dispatch(deleteFactory(factory._id));
	};

	return (
		<div className='factory'>
			<span className='factory-name'>{factory.name}</span>
			<span className='factory-index'>{factory.index}</span>
			<span className='factory-host'>{factory.host}</span>
			<div className='factory-tool-btns'>
				<button className='factory-edit-btn' onClick={handleEditFactory}>
					Изменить
				</button>
				<button className='factory-delete-btn' onClick={handleDeleteFactory}>
					Удалить
				</button>
			</div>
		</div>
	);
};

export default FactoryUnit;
