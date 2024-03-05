import React from 'react';
import Tab from '../components/Tab';
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function sound() {
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
			<Header/>
			<div>
				<h1>Sound Therapy</h1>
				<p>Sound therapy is the use of physical sound vibrations for therapeutic benefit.</p>
				<p>The idea is that using specific sounds can help to heal the body and mind.</p>
				<p>This is because the body is made up of energy, and sound is thought to be a type of energy that can
					help to balance the body’s energy.</p>
				<p>Sound therapy can be used to help with a variety of conditions, including anxiety, depression, and
					PTSD. </p>
				<p>It can also be used to help with physical conditions, such as chronic pain and high blood
					pressure.</p>
				<p>Sound therapy can be used in a variety of ways, including listening to music, using tuning forks, and
					using singing bowls.</p>
			</div>
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

			<Footer/>
		</div>
	);
}
