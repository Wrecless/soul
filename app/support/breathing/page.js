"use client";

import React, { useState } from 'react';
import Tab from '../components/Tab';
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function BreathingExercises() {
	// Define your breathing exercise videos as objects with id and name properties
	const videosTab1 = [
		{ id: '0BNejY1e9ik', name: 'For Beginners' },
		{ id: 'tybOi4hjZFQ', name: 'Intermediate' }
	];
	const videosTab2 = [
		{ id: '8vkYJf8DOsc', name: 'To Stop A Panic Attack' },
		{ id: 'Dx112W4i5I0', name: 'Quick 60 seconds' },
	];
	const videosTab3 = [
		{ id: '4qACPNA2cKY', name: '4-7-8' },
		{ id: 'bF_1ZiFta-E', name: 'Square breathing' }
	];

	const [isVisible, setIsVisible] = useState(false);
	const toggleVisibility = () => {
		setIsVisible(!isVisible);
	};

	return (
		<div>
			<Header />
			<div className="
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
						Benefits of Breathing Exercises ⤵
					</button>

					{isVisible && (
						<div>
							<p>
								<strong>Stress Reduction:</strong> Deep breathing exercises activate the parasympathetic
								nervous system, which can reduce stress and anxiety levels. This relaxation response helps calm the mind and reduce symptoms of stress.
							</p>
							<p>
								<strong>Improved Respiratory Function:</strong> Regular practice of breathing exercises can strengthen the diaphragm and increase lung capacity, leading to improved oxygen exchange and overall better respiratory health.
							</p>
							<p>
								<strong>Enhanced Mental Clarity:</strong> Deep breathing exercises can help clear the mind and improve focus and concentration. They can also help reduce symptoms of depression and anxiety.
							</p>
							<p>
								<strong>Improved Sleep:</strong> Breathing exercises can help calm the mind and body, making it easier to fall asleep and stay asleep. They can also help reduce symptoms of insomnia and improve overall sleep quality.
							</p>
							<p>
								<strong>Increased Energy Levels:</strong> Deep breathing exercises can help increase oxygen flow to the brain and body, leading to increased energy levels and overall improved physical performance.
							</p>
						</div>
					)}
				</div>

				<Tab videos={videosTab2} title="Help with Anxiety"/>
				<Tab videos={videosTab1} title="Wim Hof"/>
				<Tab videos={videosTab3} title="Others"/>
			</div>

			<Footer/>
		</div>
	);
}
