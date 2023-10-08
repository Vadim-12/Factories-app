import { ReduxProvider } from '@/store/provider';
import '../styles/globals.scss';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Factories List Page',
	description: 'Work with your factories with comfort',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ReduxProvider>
			<html lang='en'>
				<body>{children}</body>
			</html>
		</ReduxProvider>
	);
}
