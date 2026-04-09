/* Footer */
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-ink text-cream/70 py-4 px-6">
      <div className="flex flex-wrap items-center justify-between gap-3 max-w-5xl mx-auto">

        {/* Page links */}
        <div className="flex items-center gap-5 text-sm">
          <Link href="/about" className="hover:text-cream transition-colors duration-200">
            About
          </Link>
          <Link href="/disclaimer" className="hover:text-cream transition-colors duration-200">
            Disclaimer
          </Link>
          <Link href="/questionnaire" className="hover:text-cream transition-colors duration-200">
            Wellbeing Check‑in
          </Link>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-4 text-sm">
          <a
            href="https://www.linkedin.com/in/bruno-mata-41364b1b1/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-cream transition-colors duration-200"
          >
            <FontAwesomeIcon icon={faLinkedin} className="size-4" />
            LinkedIn
          </a>
          <a
            href="https://github.com/wrecless"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-cream transition-colors duration-200"
          >
            <FontAwesomeIcon icon={faGithub} className="size-4" />
            GitHub
          </a>
        </div>

      </div>
    </footer>
  );
}
