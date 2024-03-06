// Path: pages/support.js
import React from 'react';
import Tab from '../components/Tab';
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function breathing() {
	// Define your videos as objects with id and name properties
	const videosTab1 = [
		{ id: '0BNejY1e9ik', name: 'For Beginners' },
		{ id: 'tybOi4hjZFQ', name: 'Intermediate' }
	];
	const videosTab2 = [
		{ id: 'Dx112W4i5I0', name: 'Quick 60 seconds' },
		{ id: '8vkYJf8DOsc', name: 'To Stop A Panic Attack' },
	];
	const videosTab3 = [
		{ id: '4qACPNA2cKY', name: '4-7-8' },
		{ id: 'bF_1ZiFta-E', name: 'Square breathing' }
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
				<Tab videos={videosTab1} title="Wim Hof"/>
				<Tab videos={videosTab2} title="Help with Anxiety"/>
				<Tab videos={videosTab3} title="Others"/>
			</div>

			<Footer />
		</div>
	);
}
