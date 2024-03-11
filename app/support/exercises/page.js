"use client";

import React, { useState } from 'react';
import Tab from '../components/Tab';
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function AnxietyDepressionExercises() {
	// Define your exercise videos as objects with id and name properties
	const videosForAnxiety = [
		{ id: 'RFuYcIy6Vxc', name: 'Yoga for Anxiety' },
		{ id: '30VMIEmA114', name: 'The 5-4-3-2-1 Method' },
		{ id: 'AwbRERIzt6c', name: 'Mindful Walking' }
	];
	const videosForDepression = [
		{ id: 'e9B3QWESkLI', name: 'Strength Training for Mental Health' },
		{ id: '3ZBXldCxZEA', name: 'Cardio Exercises to Boost Mood' },
		{ id: 'sFtP0HWvu0k', name: 'Exercises to Shake off DEPRESSION' },
	];
	const videosForStressRelief = [
		{ id: '3YOYyQ8cb5c', name: 'Full Body Yin Yoga for Beginners' },
		{ id: 'sTANio_2E0Q', name: 'STRESS & ANXIETY Relief' },
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
                        underline
                        decoration-solid
                        mb-4
                        px-6
                        py-3
                        "
						onClick={toggleVisibility}
					>
						Benefits of Exercise for Anxiety & Depression ⤵
					</button>

					{isVisible && (
						<div>
							<p>
								<strong>Enhances Mood:</strong> Regular physical activity can increase the production of endorphins, which help produce positive feelings and reduce the perception of pain.
							</p>
							<p>
								<strong>Reduces Stress:</strong> Exercise can decrease symptoms of anxiety and depression by reducing levels of the body stress hormones, such as adrenaline and cortisol.
							</p>
							<p>
								<strong>Improves Sleep:</strong> Regular exercise can help you fall asleep faster and deepen your sleep, which is often disrupted by anxiety and depression.
							</p>
							<p>
								<strong>Boosts Brain Health:</strong> Physical activity can improve cognitive function, decrease symptoms of depression, and increase the size of the hippocampus, which is involved in memory and learning.
							</p>
							<p>
								<strong>Increases Self-esteem:</strong> Regular activity is an investment in your mind, body, and soul. When it becomes habit, it can foster your sense of self-worth and make you feel strong and powerful.
							</p>
						</div>
					)}
				</div>

				<Tab videos={videosForAnxiety} title="Exercises for Anxiety"/>
				<Tab videos={videosForDepression} title="Exercises for Depression"/>
				<Tab videos={videosForStressRelief} title="Yoga"/>
			</div>

			<Footer/>
		</div>
	);
}
