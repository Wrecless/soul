// Path: pages/support.js
import Tab from '../components/Tab';
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Support from '../components/Support';

export default function support() {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<Support className="flex-grow" />
			<Footer />
		</div>
	);
}
