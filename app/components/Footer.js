/* Footer */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
	return (
		<footer className="FOOTER
		bg-gradient-to-r
		from-purple-400
		via-purple-500
		to-purple-700
		text-white
		py-3
		px-6
		">
			<div className="flex justify-end space-x-4 text-l">
				<a href="https://www.linkedin.com/in/yourusername/" target="_blank" rel="noopener noreferrer">
					<FontAwesomeIcon icon={faLinkedin} className="mr-2"/>
					LinkedIn
				</a>
				<div className="flex justify-center space-x-4 text-xl">
					<a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faGithub} className="mr-2"/>
						GitHub
					</a>
				</div>
			</div>

		</footer>
	);
}

// Path: app/components/Footer.js