// pages/support-options.js
import React from 'react';
import Link from 'next/link'; // Import the Link component

const options = [
	{ name: 'Breathing Exercises', id: 'breathing', path: '/support/breathing' },
	{ name: 'Sleep Hypnotherapy', id: 'sleep', path: '/support/sleep' },
	{ name: 'Sound Therapy', id: 'sound-therapy', path: '/support/sound-therapy' },
	{ name: 'Meditation', id: 'meditation', path: '/support/meditation' },
	{ name: 'Exercises', id: 'exercises', path: 'support/exercises' },
	{ name: 'Diet', id: 'diet', path: '/support/diet' },
];

export default function SupportOptions() {
	return (
		<div className="OPTIONS
		bg-gradient-to-r
		from-purple-400
		via-purple-500
		to-purple-600
		flex
		flex-col
		bg-gray-100
		flex-grow
		justify-center
		text-center

		">
			<div>
				<h1 className="text-3xl font-bold">🚧 WORK IN PROGRESS 🚧</h1>
				<p className="mt-4">More videos and content will be added in the future.</p>
			</div>
			{options.map((option) => (
				<Link key={option.id} href={option.path} passHref>
					<div className="neomorphic-btn
					m-4
					py-6
					px-10
					rounded-full
					text-xl
					font-semibold
					tracking-wide
					transition-all
					duration-300
					ease-in-out
					text-blue-500
					mx-20

					">
						{option.name}
					</div>
				</Link>
			))}
		</div>
	);
}
