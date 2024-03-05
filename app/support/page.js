// Path: app/support/options/Options.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Options from './options/Options';

export default function support() {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<Options className="flex-grow" />
			<Footer />
		</div>
	);
}
