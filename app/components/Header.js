/* Header */
import React from 'react';
import Image from 'next/image';

const Header = () => {
	return (
		<header className="
        flex flex-wrap
        justify-start
        items-center
        bg-gradient-to-r
        from-purple-400
        via-purple-500
        to-purple-800
        p-4
        text-white
        ">
			<div className="
            flex
            items-center
            mr-4
            ">
				<Image src="/Logo.gif" alt="Logo" width={75} height={75} className="w-20 h-20 md:w-40 md:h-40" />
				<a href="/"
				   className="
                   font-bold
                   font-serif
                   text-xl
                   md:text-5xl
                   transition
                   ease-in-out
                   delay-150
                   duration-150
                   hover:text-blue-400
                   hover:-translate-y-1
                   hover:scale-110
                   m-0
                   p-0
                   ">
					SoulSupport
				</a>
			</div>
			<nav className="
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
					<li className="text-sm md:text-2xl">
						<a
							href="/"
							className="
                            text-white
                            hover:text-blue-400
                            transition-colors
                            duration-300
                            ">
							Home
						</a>
					</li>
					<li className="text-sm md:text-2xl">
						<a href="/support" className="
                        text-white
                        hover:text-blue-400
                        transition-colors
                        duration-300
                        ">Support</a>
					</li>
					<li className="text-sm md:text-2xl">
						<a href="/help" className="
                        text-white
                        hover:text-blue-400
                        transition-colors
                        duration-300
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