import React from 'react';
import Image from 'next/image';

{/* Replace "📞" with <FiPhoneCall /> if using an icon library */}

//CHANGE ICONS FOR MOBILE VIEW ********************

export default function SamaritansContactLine() {
	return (
		<div className="HELPTABS
		flex-grow
		bg-gradient-to-r
		from-purple-400
		via-purple-500
		to-purple-600
		flex-col
		space-y-1

		">
			<div className="SAMARITANSTAB
			flex
			flex-col
			sm:flex-row
			items-center
			p-2
			rounded-xl
			shadow
			space-y-4
			sm:space-y-0
			sm:space-x-4
			bg-green-400
			mt-1
			mx-1
			">
				{/* Icon */}
				<div className="
				flex-shrink-0
				transition
                ease-in-out
                delay-150
                duration-150
				hover:-translate-y-1
				hover:scale-110
                 ">
					<a href="https://www.samaritans.org" target="_blank" rel="noopener noreferrer">
						<Image src="/samaritans.png" alt="Samaritans UK" width={200} height={200}/>
					</a>
				</div>


				{/* Information */}
				<div className="text-center sm:text-left">
					<p className="text-xl font-bold font-serif">Samaritans UK</p>
					<p>Reach out for help anytime, day or night.</p>
					<p><strong>Phone: </strong>

						<a href="tel:+44116123"
						   className="text-blue-600 hover:text-blue-900">
							116 123
						</a>
						<span> FREE (UK)</span>
					</p>
					<p><strong>Website:</strong>
						<a href="https://www.samaritans.org"
						   className="text-blue-600 hover:text-blue-800
						">
							www.samaritans.org
						</a>
					</p>
				</div>
			</div>

			<div className="NHSTAB
			flex
			flex-col
			sm:flex-row
			items-center
			p-2 rounded-xl
			shadow
			space-y-4
			sm:space-y-0
			sm:space-x-4
			bg-blue-500
			mx-1
			">
				{/* Icon */}
				<div className="
				flex-shrink-0
				transition
                ease-in-out
                delay-150
                duration-150
				hover:-translate-y-1
				hover:scale-110
				">
					<a href="https://www.derbyshirehealthcareft.nhs.uk/services/helpline-and-support-service"
					   target="_blank"
					   rel="noopener noreferrer
					   ">
						<Image src="/NHS.png" alt="NHS" width={200} height={200}/>
					</a>
				</div>

				{/* Information */}
				<div className="text-center sm:text-left">
					<p className="text-xl font-bold font-serif">Derbyshire Mental Health Helpline and Support
						Service</p>
					<p>It is open 24 hours a day, seven days a week.</p>
					<p><strong>Phone: </strong>

						<a href="tel: 0800 028 0077"
						   className="text-blue-600 hover:text-blue-900">
							0800 028 0077
						</a>
						<span> FREE (UK)</span>
					</p>
					<p><strong>Website:</strong> <a
						href="https://www.derbyshirehealthcareft.nhs.uk/services/helpline-and-support-service"
						className="text-blue-600 hover:text-blue-800">www.nhs.uk</a>
					</p>
				</div>
			</div>

			<div className="MINDTAB
			flex
			flex-col
			sm:flex-row
			items-center p-2
			rounded-xl shadow
			space-y-4
			sm:space-y-0
			sm:space-x-4
			bg-white
			mx-1
			">
				{/* Icon */}
				<div className="
				flex-shrink-0
				transition
                ease-in-out
                delay-150
                duration-150
				hover:-translate-y-1
				hover:scale-110
				">
					<a href="https://www.mind.org.uk/"
					   target="_blank"
					   rel="noopener noreferrer
					   ">
						<Image src="/Mind.png" alt="Mind" width={200} height={200}/>
					</a>
				</div>

				{/* Information */}
				<div className="text-center sm:text-left">
					<p className="text-xl text-blue-400 font-bold font-serif">Mind</p>
					<p className="text-blue-300">We are open 9am to 6pm, Monday to Friday (except for bank
						holidays).</p>
					<p className="text-blue-300"><strong>Infoline: </strong>
						<a href="tel: 0300 123 3393"
						   className="text-blue-600 hover:text-blue-900">
							0300 123 3393
						</a>
					</p>
					<p className="text-blue-300"><strong>Info email:</strong> <a
						href="mailto:info@mind.org.uk"
						className="text-blue-600 hover:text-blue-900">info@mind.org.uk</a>
					</p>

					<p className="text-blue-300"><strong>Welfare benefits line: </strong>
						<a href="tel: 0300 222 5782"
						   className="text-blue-600 hover:text-blue-900">
							0300 222 5782
						</a>
					</p>

					<p className="text-blue-300"><strong>Legal line: </strong>
						<a href="tel: 0300 466 6463"
						   className="text-blue-600 hover:text-blue-900">
							0300 466 6463
						</a>
					</p>
					<p className="text-blue-300"><strong>Legal email:</strong> <a
						href="mailto:legal@mind.org.uk"
						className="text-blue-600 hover:text-blue-900">legal@mind.org.uk</a>
					</p>
				</div>
			</div>

			<div className="ANXIERTYUKTAB
			flex
			flex-col
			sm:flex-row
			items-center
			p-2 rounded-xl
			shadow
			space-y-4
			sm:space-y-0
			sm:space-x-4
			bg-green-800
			mx-1
			">
				{/* Icon */}
				<div className="
				flex-shrink-0
				transition
                ease-in-out
                delay-150
                duration-150
				hover:-translate-y-1
				hover:scale-110
				">
					<a href="https://www.anxietyuk.org.uk/"
					   target="_blank"
					   rel="noopener noreferrer
					   ">
						<Image src="/Anxiety.png" alt="Anxiety UK" width={200} height={200}/>
					</a>
				</div>

				{/* Information */}
				<div className="text-center sm:text-left">
					<p className="text-xl font-bold font-serif">
						Anxiety UK
					</p>
					<p>Open Monday to Friday 10:30-16:30</p>
					<p><strong>Helpline: </strong>
						<a href="tel: 03444 775 774"
						   className="text-blue-400 hover:text-blue-900">
							03444 775 774
						</a>
					</p>
					<p><strong>Text service: </strong>
						<a href="tel: 07537 416 905"
						   className="text-blue-400 hover:text-blue-900">
							07537 416 905
						</a>
					</p>
					<p><strong>Website:</strong> <a
						href="https://www.anxietyuk.org.uk/contact-us/"
						className="text-blue-400 hover:text-blue-800">https://www.anxietyuk.org.uk</a>
					</p>
				</div>
			</div>

			<div className="OCDTAB
			flex
			flex-col
			sm:flex-row
			items-center
			p-2 rounded-xl
			shadow
			space-y-4
			sm:space-y-0
			sm:space-x-4
			bg-blue-800
			mx-1
			">
				{/* Icon */}
				<div className="
				flex-shrink-0
				transition
                ease-in-out
                delay-150
                duration-150
				hover:-translate-y-1
				hover:scale-110
				">
					<a href="https://ocdaction.org.uk/"
					   target="_blank"
					   rel="noopener noreferrer
					   ">
						<Image src="/ocd.svg" alt="OCD" width={200} height={200}/>
					</a>
				</div>

				{/* Information */}
				<div className="text-center sm:text-left">
					<p className="text-xl font-bold font-serif">
						OCD Action
					</p>
					<p>Open Monday to Friday 09:00-17:00</p>
					<p><strong>Helpline: </strong>
						<a href="tel: 0300 636 5478"
						   className="text-blue-400 hover:text-blue-900">
							0300 636 5478
						</a>
					</p>
					<p><strong>Email:</strong> <a
						href="mailto:support@ocdaction.org.uk"
						className="text-blue-400 hover:text-blue-800">support@ocdaction.org.uk</a>
					</p>
				</div>
			</div>

			<div className="DERBYCITYCOUNCILTAB
			flex
			flex-col
			sm:flex-row
			items-center
			p-2 rounded-xl
			shadow
			space-y-4
			sm:space-y-0
			sm:space-x-4
			bg-green-900
			mx-1
			">
				{/* Icon */}
				<div className="
				flex-shrink-0
				transition
                ease-in-out
                delay-150
                duration-150
				hover:-translate-y-1
				hover:scale-110
				">
					<a href="https://www.derby.gov.uk/health-and-social-care/mental-health-wellbeing-support/support-for-adults/mental-health-support/#"
					   target="_blank"
					   rel="noopener noreferrer
					   ">
						<Image src="/Derby.png" alt="Derby City Council" width={200} height={200}/>
					</a>
				</div>

				{/* Information */}
				<div className="text-center sm:text-left">
					<p className="text-xl font-bold font-serif">
						Derby City Council (Relate services)
					</p>
					<p>Open Monday, Tuesdays and Thursdays 10am -1pm.</p>
					<p><strong>Relate helpline: </strong>
						<a href="tel: 0808 178 9363"
						   className="text-blue-400 hover:text-blue-900">
							0808 178 9363
						</a>
					</p>
					<p><strong>Relate trained counsellor: </strong>
						<a href="tel: 01332 349177"
						   className="text-blue-400 hover:text-blue-900">
							01332 349177
						</a>
						<span> or </span>
						<a href="tel: 07741 193484"
						   className="text-blue-400 hover:text-blue-900">
							07741 193484
						</a>
					</p>
					<p><strong>Email:</strong> <a
						href="mailto:info@relatederby.org.uk"
						className="text-blue-400 hover:text-blue-800"> info@relatederby.org.uk</a>
					</p>
				</div>
			</div>

			<div className="CALMTAB
			flex
			flex-col
			sm:flex-row
			items-center
			p-2
			rounded-xl
			shadow
			space-y-4
			sm:space-y-0
			sm:space-x-4
			bg-green-900
			mx-1
			">
				{/* Icon */}
				<div className="
				flex-shrink-0
				transition
                ease-in-out
                delay-150
                duration-150
				hover:-translate-y-1
				hover:scale-110
				">
					<a href="https://www.thecalmzone.net/"
					   target="_blank"
					   rel="noopener noreferrer
					   ">
						<Image src="/calm.svg" alt="CALM" width={200} height={200}/>
					</a>
				</div>

				{/* Information */}
				<div className="text-center sm:text-left">
					<p className="text-xl font-bold font-serif">
						CALM
					</p>
					<p>Open 5pm–midnight, 365 days a year.</p>
					<p><strong>Helpline: </strong>
						<a href="tel: 0808 58 58 58"
						   className="text-blue-400 hover:text-blue-900">
							0808 58 58 58
						</a>
					</p>
				</div>
			</div>
			<div>
				<h1>
					More to come...
				</h1>
			</div>

		</div>
	);
}

// Path: app/help/page.js