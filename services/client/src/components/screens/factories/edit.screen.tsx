'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Formik } from 'formik';
import { IFactoryWithIdAndOctets } from '@/types/factory';
import { useRouter } from 'next/router';
import { useAppDispatch } from '@/hooks/store';
import { updateFactory } from '@/store/slices/factorySlice';
import FactoryFormatter from '@/utils/factoryFormatter';
import validationSchema from '@/utils/validationSchema';

const EditFactoryScreen: React.FC<{ factory: IFactoryWithIdAndOctets }> = ({
	factory,
}) => {
	const router = useRouter();

	const dispatch = useAppDispatch();

	const refHostOctet1 = useRef<HTMLInputElement>(null);
	const refHostOctet2 = useRef<HTMLInputElement>(null);
	const refHostOctet3 = useRef<HTMLInputElement>(null);
	const refHostOctet4 = useRef<HTMLInputElement>(null);
	const refSaveButton = useRef<HTMLButtonElement>(null);

	const [hostOctet1, setHostOctet1] = useState<string>(factory.hostOctet1);
	const [hostOctet2, setHostOctet2] = useState<string>(factory.hostOctet2);
	const [hostOctet3, setHostOctet3] = useState<string>(factory.hostOctet3);
	const [hostOctet4, setHostOctet4] = useState<string>(factory.hostOctet4);

	useEffect(() => {
		if (
			refHostOctet1.current &&
			refHostOctet2.current &&
			refHostOctet3.current &&
			refHostOctet4.current
		) {
			if (refHostOctet1.current.value.length === 3) {
				refHostOctet2.current.focus();
			}
		}
	}, [hostOctet1]);

	useEffect(() => {
		if (
			refHostOctet1.current &&
			refHostOctet2.current &&
			refHostOctet3.current &&
			refHostOctet4.current
		) {
			if (refHostOctet2.current.value.length === 3) {
				refHostOctet3.current.focus();
			} else if (
				refHostOctet2.current.value.length === 0 &&
				refHostOctet1.current.value.length > 0
			) {
				refHostOctet1.current.focus();
			}
		}
	}, [hostOctet2]);

	useEffect(() => {
		if (
			refHostOctet1.current &&
			refHostOctet2.current &&
			refHostOctet3.current &&
			refHostOctet4.current
		) {
			if (refHostOctet3.current.value.length === 3) {
				refHostOctet4.current.focus();
			} else if (
				refHostOctet3.current.value.length === 0 &&
				refHostOctet2.current.value.length > 0
			) {
				refHostOctet2.current.focus();
			}
		}
	}, [hostOctet3]);

	useEffect(() => {
		if (
			refHostOctet1.current &&
			refHostOctet2.current &&
			refHostOctet3.current &&
			refHostOctet4.current &&
			refSaveButton.current
		) {
			if (refHostOctet4.current.value.length === 3) {
				refSaveButton.current.focus();
			} else if (
				refHostOctet4.current.value.length === 0 &&
				refHostOctet3.current.value.length > 0
			) {
				refHostOctet3.current.focus();
			}
		}
	}, [hostOctet4]);

	const initialValues: IFactoryWithIdAndOctets = {
		_id: factory._id,
		index: factory.index,
		name: factory.name,
		hostOctet1: factory.hostOctet1,
		hostOctet2: factory.hostOctet2,
		hostOctet3: factory.hostOctet3,
		hostOctet4: factory.hostOctet4,
	};

	const cancelForm = () => {
		router.push('/factories');
	};

	return (
		<div className='container containerEditFactoryPage'>
			<h1>Редактировать завод</h1>
			<Formik
				initialValues={initialValues}
				validateOnBlur
				onSubmit={async (editedFactory: IFactoryWithIdAndOctets) => {
					const formattedEditedFactory =
						FactoryFormatter.factoryWithIdAndOctetsToFactoryWithIdAndHost(
							editedFactory
						);
					await dispatch(updateFactory(formattedEditedFactory));
					router.push('/factories');
				}}
				validationSchema={validationSchema}
			>
				{({
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					handleSubmit,
				}) => (
					<>
						<div className='input-info-block'>
							<div className='input-field-one'>
								<label>Индекс</label>
								{touched.index && errors.index && (
									<span className='input-field-error'>{errors.index}</span>
								)}
								<br />
								<input
									type='text'
									name='index'
									tabIndex={1}
									value={values.index}
									onBlur={handleBlur}
									onChange={handleChange}
								/>
							</div>
							<div className='input-field-one'>
								<label>Наименование</label>
								{touched.name && errors.name && (
									<span className='input-field-error'>{errors.name}</span>
								)}
								<br />
								<input
									type='text'
									name='name'
									tabIndex={2}
									value={values.name}
									onBlur={handleBlur}
									onChange={handleChange}
								/>
							</div>
							<div className='input-field-one'>
								<label>Хост</label>
								{(touched.hostOctet1 ||
									touched.hostOctet2 ||
									touched.hostOctet3 ||
									touched.hostOctet4) && (
									<span className='input-field-error'>
										{errors.hostOctet1 ||
											errors.hostOctet2 ||
											errors.hostOctet3 ||
											errors.hostOctet4}
									</span>
								)}
								<br />
								<input
									type='number'
									name='hostOctet1'
									className='host-octet'
									placeholder='IP'
									tabIndex={3}
									value={values.hostOctet1}
									onBlur={handleBlur}
									onChange={(e) => {
										setHostOctet1(e.target.value);
										handleChange(e);
									}}
									ref={refHostOctet1}
								/>
								.
								<input
									type='number'
									name='hostOctet2'
									className='host-octet'
									tabIndex={4}
									value={values.hostOctet2}
									onBlur={handleBlur}
									onChange={(e) => {
										setHostOctet2(e.target.value);
										handleChange(e);
									}}
									ref={refHostOctet2}
								/>
								.
								<input
									type='number'
									name='hostOctet3'
									className='host-octet'
									tabIndex={5}
									value={values.hostOctet3}
									onBlur={handleBlur}
									onChange={(e) => {
										setHostOctet3(e.target.value);
										handleChange(e);
									}}
									ref={refHostOctet3}
								/>
								.
								<input
									type='number'
									name='hostOctet4'
									className='host-octet'
									tabIndex={6}
									value={values.hostOctet4}
									onBlur={handleBlur}
									onChange={(e) => {
										setHostOctet4(e.target.value);
										handleChange(e);
									}}
									ref={refHostOctet4}
								/>
							</div>
						</div>
						<div className='btns'>
							<button className='cancel-btn' onClick={cancelForm}>
								Отмена
							</button>
							<button
								className='save-btn'
								onClick={() => handleSubmit}
								ref={refSaveButton}
							>
								Сохранить
							</button>
						</div>
					</>
				)}
			</Formik>
		</div>
	);
};

export default EditFactoryScreen;
