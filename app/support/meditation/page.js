"use client";

import React, {useState} from 'react';
import Tab from '../components/Tab';
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function GuidedMeditation() {
	// Define your meditation videos as objects with id and name properties
	const videosForBeginners = [
		{ id: 'U9YKY7fdwyg', name: 'Meditation 101: A Beginner\'s Guide' },
		{ id: '_hb-jMzGPdw', name: 'Finding Your Center' }
	];
	const videosForSleep = [
		{ id: 'KjH_HEadO7o', name: '10-minute for Self-love and Acceptance' },
		{ id: 'z0GtmPnqAd8', name: '15 Minute for Strength & Grounding In Stressful Times' }
	];
	const videosForAnxiety = [
		{ id: 'gqy8mmwDZk8', name: 'Feeling Overwhelmed' },
		{ id: 'syx3a1_LeFo', name: 'Letting Go' }
	];

	const [isVisible, setIsVisible] = useState(false);
	const toggleVisibility = () => {
		setIsVisible(!isVisible);
	};

	return (
		<div>
			<Header />
			<div className="MEDITATIONTAB
			bg-gradient-to-r
			from-purple-400
			via-purple-500
			to-purple-600
			">
				<div className="
				text-center
				items-center
				backdrop-blur-sm
				bg-white/20
				shadow-2xl
				rounded-3xl
				pt-3
				mx-8
				">
					<button
						className="
						text-2xl
						font-bold
						decoration-solid
						mb-4
						px-6
						py-3
						"
						onClick={toggleVisibility}
					>
						Benefits of Guided Meditation ⤵
					</button>

					{isVisible && (
						<div>
							<p>
								<strong>Mindfulness and Awareness:</strong> Guided meditation helps cultivate a state of
								mindfulness and presence, enhancing your awareness of the present moment.
							</p>
							<p>
								<strong>Stress Reduction:</strong> It can significantly reduce stress levels, promoting
								relaxation and well-being.
							</p>
							<p>
								<strong>Improved Sleep:</strong> Regular practice can improve sleep patterns, helping
								you fall asleep faster and enjoy more restorative sleep.
							</p>
							<p>
								<strong>Emotional Health:</strong> It can improve your overall emotional health,
								reducing symptoms of anxiety and depression.
							</p>
							<p>
								<strong>Concentration:</strong> It enhances concentration and focus, benefiting both
								personal and professional areas of life.
							</p>
						</div>
					)}
				</div>

				<Tab videos={videosForBeginners} title="For Beginners"/>
				<Tab videos={videosForSleep} title="Guided Meditation"/>
				<Tab videos={videosForAnxiety} title="Meditation for stress"/>
			</div>

			<Footer/>
		</div>
	);
}
