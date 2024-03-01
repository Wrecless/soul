/* Header */

import React from 'react';
import Image from 'next/image';
const Header = () => {
	return (
		<header className=" HEADER
		flex
		justify-start
		items-center
		bg-gradient-to-r
		from-purple-500
		via-purple-600
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
				<h1 className=" TITLE
				m-0
				p-0
				font-bold
				font-serif
				font
				text-5xl
				">
					SoulSupport
				</h1>
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
						<a href="/" className="text-white hover:text-gray-200 transition-colors duration-300">Home</a>
					</li>
					<li>
						<a href="/support" className="text-white hover:text-gray-200 transition-colors duration-300">Support</a>
					</li>
					<li>
						<a href="/help" className="text-white hover:text-gray-200 transition-colors duration-300">Help</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;

// Path: components/Footer.js