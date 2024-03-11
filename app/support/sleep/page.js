"use client";

import React, { useState } from 'react';
import Tab from '../components/Tab';
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function SleepHypnotherapy() {
	// Define your sleep hypnotherapy videos as objects with id and name properties
	const videosForRelaxation = [
		{ id: 'r_5N_vVl4JY', name: 'Declutter Your Mind Before Deep Sleep' },
		{ id: 'vWlf_rh7xFY', name: 'Hypnosis for Instant Deep Sleep' }
	];
	const videosForDeepSleep = [
		{ id: 'Cp9abS-7m_A', name: 'Guided Hypnosis for a Full Night\'s Sleep' },
		{ id: 'MsQzakXQ9oQ', name: 'Stop Panic & Anxiety' }
	];
	const videosForInsomnia = [
		{ id: 'odvdQvJ4GYk', name: 'Sleep Talk Down Guided Sleep Meditation' },
		{ id: 'SCcfnwS9sec', name: 'Release Destructive Energy' }
	];

	const [isVisible, setIsVisible] = useState(false);
	const toggleVisibility = () => {
		setIsVisible(!isVisible);
	};

	return (
		<div>
			<Header />
			<div className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600">
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
                        underline
                        decoration-solid
                        mb-4
                        px-6
                        py-3
                        "
						onClick={toggleVisibility}
					>
						Benefits of Sleep Hypnotherapy ⤵
					</button>

					{isVisible && (
						<div>
							<p>
								<strong>Enhanced Sleep Quality:</strong> Sleep hypnotherapy can help you relax deeply, making it easier to fall asleep and stay asleep through the night.
							</p>
							<p>
								<strong>Stress and Anxiety Reduction:</strong> It addresses the subconscious sources of stress and anxiety, promoting a more restful nights sleep.
							</p>
							<p>
								<strong>Improved Sleep Patterns:</strong> Regular sessions can help reset your sleep patterns, aiding in overcoming insomnia and other sleep disorders.
							</p>
							<p>
								<strong>Deep Relaxation:</strong> Hypnotherapy provides profound relaxation benefits, helping your body and mind prepare for sleep.
							</p>
							<p>
								<strong>Positive Sleep Associations:</strong> It can help create positive associations with bedtime and sleeping, making it easier to wind down.
							</p>
						</div>
					)}
				</div>

				<Tab videos={videosForRelaxation} title="Michael Sealey"/>
				<Tab videos={videosForDeepSleep} title="Minds in Unison"/>
				<Tab videos={videosForInsomnia} title="Jason Stephenson"/>
			</div>

			<Footer />
		</div>
	);
}
