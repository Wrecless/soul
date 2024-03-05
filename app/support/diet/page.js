// Path: pages/support.js
import React from 'react';
import Tab from '../components/Tab';
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function diet() {
	// Define your videos as objects with id and name properties
	const videosTab1 = [
		{ id: 'tybOi4hjZFQ', name: 'Wim Hof' },
		{ id: 'DbDoBzGY3vo', name: 'Second Video Title' }
	];
	const videosTab2 = [
		{ id: 'tybOi4hjZFQ', name: 'Third Video Title' },
		{ id: 'DbDoBzGY3vo', name: 'Fourth Video Title' }
	];
	const videosTab3 = [
		{ id: 'VideoID5', name: 'Fifth Video Title' },
		{ id: 'VideoID6', name: 'Sixth Video Title' }
	];

	return (
		<div>
			<Header />

			<div className="VIDEO_TABS
				bg-gradient-to-r
				from-purple-400
				via-purple-500
				to-purple-600
				">
				<Tab videos={videosTab1} title="Tab 1"/>
				<Tab videos={videosTab2} title="Tab 2"/>
				<Tab videos={videosTab3} title="Tab 3"/>
			</div>

			<Footer />
		</div>
	);
}
