"use client";

import React, {useState} from 'react';
import Tab from '../components/Tab';
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function SoundTherapy() {
	// Define your sound therapy videos as objects with id and name properties
	const videosForRelaxation = [
		{ id: 'buqt6_CjtuI', name: 'Relaxing Nature Sounds' },
		{ id: 'WPni755-Krg', name: 'Study Music Alpha Waves' },
		{ id: 'prfZFyp4XZk', name: 'Sounds of the Sea • Deep Underwater' }
	];
	const videosForSleep = [
		{ id: 'YB-nFu50R1M', name: 'Reduces Stress, Anxiety and Calm The Mind' },
		{ id: 'WCuZRbHER0g', name: 'Release Anxiety & Tension' }
	];
	const videosForFocus = [
		{ id: 'xsfyb1pStdw', name: 'Binaural Beats for Concentration' },
		{ id: 'Z8ANihFXlgU', name: 'Ambient Study Music' }
	];

	const [isVisible, setIsVisible] = useState(false);
	const toggleVisibility = () => {
		setIsVisible(!isVisible);
	};

	return (
		<div>
			<Header />
			<div className="SOUND_THERAPY
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
						Benefits of Sound Therapy ⤵
					</button>

					{isVisible && (
						<div>
							<p>
								<strong>Relaxation and Stress Relief:</strong> Sound therapy uses soothing sounds to promote relaxation and reduce stress.
							</p>
							<p>
								<strong>Enhanced Sleep Quality:</strong> Certain sounds can help synchronize brain waves for better sleep.
							</p>
							<p>
								<strong>Improved Focus and Concentration:</strong> Ambient or natural sounds can enhance cognitive functions and concentration.
							</p>
							<p>
								<strong>Emotional Balance:</strong> It can play a role in managing emotions and mood swings.
							</p>
							<p>
								<strong>Physical Healing:</strong> Some studies suggest that sound therapy can aid in pain relief and healing.
							</p>
						</div>
					)}
				</div>

				<Tab videos={videosForRelaxation} title="For studying"/>
				<Tab videos={videosForSleep} title="Stress relief"/>
				<Tab videos={videosForFocus} title="Binaural Beats"/>
			</div>

			<Footer/>
		</div>
	);
}
