// Path: pages/support.js
import Tab from '../components/Tab';

export default function Support() {
	// Replace these with your actual video IDs
	const videosTab1 = ['DbDoBzGY3vo', 'tybOi4hjZFQ'];
	const videosTab2 = ['VideoID3', 'VideoID4'];
	const videosTab3 = ['VideoID5', 'VideoID6'];

	return (
		<div className="SUPPORTBODY
		flex
		flex-1
		flex-col
		bg-gradient-to-r
		from-purple-400
		via-purple-500
		to-purple-600
		">
			<div className="grid grid-cols-2 gap-2 justify-center text-center">
				<div>
					<h1>number 1</h1>
				</div>
				<div>
					<h1>number 2</h1>
				</div>
			</div>
			<Tab videos={videosTab1} />
		</div>
	);
}
