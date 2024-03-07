import React from 'react';
//import { FiPhoneCall } from 'react-icons/fi';
import Image from 'next/image';
//import { FaPhone } from "react-icons/fa6";

{/* Replace "📞" with <FiPhoneCall /> if using an icon library */}

//CHANGE ICONS FOR MOBILE VIEW ********************

export default function SamaritansContactLine() {
	return (
		<div className="">
			<div className="flex items-center bg-green-400 p-4 rounded-lg shadow space-x-4">
				{/* Icon */}
				<div className="flex-shrink-0">
					<Image src="/samaritans.png" alt="Samaritans UK" width={200} height={200}/>
				</div>

				{/* Information */}
				<div>
					<p className="text-lg font-semibold">Samaritans UK</p>
					<p>Reach out for help anytime, day or night.</p>
					<p><strong>Phone: </strong>

						<a href="tel:+44116123"
						   className="text-blue-500 hover:text-blue-700">
							116 123
						</a>
						<span> FREE (UK)</span>
					</p>
					<p><strong>Website:</strong> <a href="https://www.samaritans.org"
					                                className="text-blue-600 hover:text-blue-800">www.samaritans.org</a>
					</p>
				</div>
			</div>
			<div className="flex items-center bg-blue-400 p-4 rounded-lg shadow space-x-4">
				{/* Icon */}
				<div className="flex-shrink-0">
					<Image src="/NHS.png" alt="Samaritans UK" width={200} height={200}/>
				</div>

				{/* Information */}
				<div>
					<p className="text-lg font-semibold">Derbyshire Mental Health Helpline and Support Service</p>
					<p>It is open 24 hours a day, seven days a week.</p>
					<p><strong>Phone: </strong>

						<a href="tel: 0800 028 0077"
						   className="text-purple-700 hover:text-blue-700">
							0800 028 0077
						</a>
						<span> FREE (UK)</span>
					</p>
					<p><strong>Website:</strong> <a href="https://www.derbyshirehealthcareft.nhs.uk/services/helpline-and-support-service"
					                                className="text-blue-600 hover:text-blue-800">www.nhs.uk</a>
					</p>
				</div>
			</div>
		</div>
	);
}

// Path: app/help/page.js