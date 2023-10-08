import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
	name: Yup.string().required('Required!'),
	index: Yup.string().required('Required!'),
	hostOctet1: Yup.number()
		.required('Required')
		.min(0, 'Минимальное значение октета: 0')
		.max(255, 'Максимальное значение октета: 255'),
	hostOctet2: Yup.number()
		.required('Required')
		.min(0, 'Минимальное значение октета: 0')
		.max(255, 'Максимальное значение октета: 255'),
	hostOctet3: Yup.number()
		.required('Required')
		.min(0, 'Минимальное значение октета: 0')
		.max(255, 'Максимальное значение октета: 255'),
	hostOctet4: Yup.number()
		.required('Required')
		.min(0, 'Минимальное значение октета: 0')
		.max(255, 'Максимальное значение октета: 255'),
});

export default validationSchema;
