/* help/page.js */
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Help from './body/Help';

export default function HelpPage() {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<Help className="flex-grow"/>
			<Footer />
		</div>
	);
}

// Path: app/help/page.js