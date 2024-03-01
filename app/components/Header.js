/* Header */
import React from 'react';
import Image from 'next/image';

// fix mobile view for header

const Header = () => {
	return (
		<header className=" HEADER
		flex
		justify-start
		items-center
		bg-gradient-to-r
		from-purple-400
		via-purple-500
		to-purple-800
		p-4
		text-white
		">
			<div className="LOGO
			flex
		    items-center
			mr-4
			">
				<Image src="/Logo.gif" alt="Logo" width={150} height={150} />
				<a href="/"
				   className=" TITLE
				   transition
				   ease-in-out
				   delay-200
				   duration-200
				   hover:text-blue-400
				   hover:-translate-y-1
				   hover:scale-110

					m-0
					p-0
					font-bold
					font-serif
					font
					text-5xl
					">
					SoulSupport
				</a>
			</div>
			<nav className=" NAVBAR
			flex-1
			text-right
			">
				<ul className="
				flex
				justify-end
				gap-4
				list-none
				m-0
				p-0
				">
					<li className="text-base">
						<a
							href="/"
							className="HOME
							text-white
							hover:text-blue-400
							transition-colors
							duration-300
							text-2xl
							">
							Home
						</a>
					</li>
					<li>
						<a href="/support" className="SUPPORT
						text-white
						hover:text-blue-400
						transition-colors
						duration-300
						text-2xl
						">Support</a>
					</li>
					<li>
						<a href="/help" className="HELP
						text-white
						hover:text-blue-400
						transition-colors
						duration-300
						text-2xl
						drop-shadow-2xl
						">Help</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;

// Path: components/Footer.js