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
		py-1.5
		px-6
		">
			<div className="flex justify-end">
				<a href="https://www.linkedin.com/in/bruno-mata-41364b1b1/"
				   target="_blank"
				   rel="noopener noreferrer"
				   className="flex justify-end space-x-4 text-sm hover:text-blue-600 mr-3
			    ">
					<FontAwesomeIcon icon={faLinkedin} className="mr-2 size-5"/>
					LinkedIn
				</a>
				<a href="https://github.com/wrecless"
				   target="_blank"
				   rel="noopener noreferrer"
				   className="flex justify-end space-x-4 text-sm hover:text-gray-500
			    ">
					<FontAwesomeIcon icon={faGithub} className="mr-2 size-5"/>
					GitHub
				</a>
			</div>

		</footer>
	);
}

// Path: app/components/Footer.js
