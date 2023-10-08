'use client';

import { redirect } from 'next/navigation';
import { useEffect } from 'react';

const NotFoundScreen: React.FC = () => {
	useEffect(() => {
		setTimeout(() => {
			redirect('/factories');
		}, 1400);
	}, []);

	return (
		<div className='global-wrapper'>
			<div className='error-content'>
				<span className='error-code'>404</span>
				<span className='error-separator'>|</span>
				<span className='error-message'>Страница не найдена.</span>
			</div>
		</div>
	);
};

export default NotFoundScreen;
