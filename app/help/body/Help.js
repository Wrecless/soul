import React from 'react';
import Image from 'next/image';

export default function Help() {
  const helplines = [
    {
      id: 'samaritans',
      name: 'Samaritans UK',
      tagline: 'Reach out for help anytime, day or night.',
      hours: 'Available 24 hours a day, 7 days a week',
      contacts: [
        { type: 'phone', label: 'Phone', value: '116 123', href: 'tel:116123', note: 'FREE (UK)' },
        { type: 'web',   label: 'Website', value: 'www.samaritans.org', href: 'https://www.samaritans.org' },
      ],
      logo: '/samaritans.jpg',
      bg: 'bg-green-50 border-green-100',
    },
    {
      id: 'nhs',
      name: 'Derbyshire Mental Health Helpline',
      tagline: 'Free NHS mental health support line.',
      hours: 'Open 24 hours a day, seven days a week',
      contacts: [
        { type: 'phone', label: 'Phone', value: '0800 028 0077', href: 'tel:08000280077', note: 'FREE (UK)' },
        { type: 'web',   label: 'Website', value: 'www.nhs.uk', href: 'https://www.derbyshirehealthcareft.nhs.uk/services/helpline-and-support-service' },
      ],
      logo: '/NHS.png',
      bg: 'bg-blue-50 border-blue-100',
    },
    {
      id: 'mind',
      name: 'Mind',
      tagline: 'Mental health charity offering information and advice.',
      hours: 'Mon–Fri, 9am–6pm (exc. bank holidays)',
      contacts: [
        { type: 'phone', label: 'Infoline',            value: '0300 123 3393', href: 'tel:03001233393' },
        { type: 'email', label: 'Info email',          value: 'info@mind.org.uk', href: 'mailto:info@mind.org.uk' },
        { type: 'phone', label: 'Welfare benefits',    value: '0300 222 5782', href: 'tel:03002225782' },
        { type: 'phone', label: 'Legal line',          value: '0300 466 6463', href: 'tel:03004666463' },
      ],
      logo: '/Mind.png',
      bg: 'bg-white border-gray-100',
    },
    {
      id: 'anxiety-uk',
      name: 'Anxiety UK',
      tagline: 'Specialist support for those living with anxiety.',
      hours: 'Mon–Fri, 10:30am–4:30pm',
      contacts: [
        { type: 'phone', label: 'Helpline',      value: '03444 775 774', href: 'tel:03444775774' },
        { type: 'phone', label: 'Text service',  value: '07537 416 905', href: 'tel:07537416905' },
        { type: 'web',   label: 'Website', value: 'anxietyuk.org.uk', href: 'https://www.anxietyuk.org.uk/contact-us/' },
      ],
      logo: '/Anxiety.png',
      bg: 'bg-green-900/5 border-green-900/10',
    },
    {
      id: 'ocd-action',
      name: 'OCD Action',
      tagline: 'Support and information for people affected by OCD.',
      hours: 'Mon–Fri, 9am–5pm',
      contacts: [
        { type: 'phone', label: 'Helpline', value: '0300 636 5478', href: 'tel:03006365478' },
        { type: 'email', label: 'Email',    value: 'support@ocdaction.org.uk', href: 'mailto:support@ocdaction.org.uk' },
      ],
      logo: '/ocd.svg',
      bg: 'bg-blue-900/5 border-blue-900/10',
    },
    {
      id: 'derby',
      name: 'Derby City Council (Relate Services)',
      tagline: 'Local counselling and relationship support.',
      hours: 'Mon, Tue & Thu, 10am–1pm',
      contacts: [
        { type: 'phone', label: 'Relate helpline', value: '0808 178 9363', href: 'tel:08081789363', note: 'FREE' },
        { type: 'phone', label: 'Counsellor',      value: '01332 349177',  href: 'tel:01332349177' },
        { type: 'email', label: 'Email',            value: 'info@relatederby.org.uk', href: 'mailto:info@relatederby.org.uk' },
      ],
      logo: '/Derby.png',
      bg: 'bg-green-800/5 border-green-800/10',
    },
    {
      id: 'calm',
      name: 'CALM',
      tagline: 'Campaign Against Living Miserably — for anyone in crisis.',
      hours: '5pm–midnight, 365 days a year',
      contacts: [
        { type: 'phone', label: 'Helpline', value: '0808 58 58 58', href: 'tel:0808585858', note: 'FREE' },
        { type: 'web',   label: 'Website',  value: 'thecalmzone.net', href: 'https://www.thecalmzone.net/get-support' },
      ],
      logo: '/calm.svg',
      bg: 'bg-emerald-900/5 border-emerald-900/10',
    },
    {
      id: 'sane',
      name: 'SANE',
      tagline: 'Emotional support and information for those affected by mental illness.',
      hours: 'Every day, 4pm–10pm',
      contacts: [
        { type: 'phone', label: 'Helpline', value: '0300 304 7000', href: 'tel:03003047000' },
        { type: 'email', label: 'Email',    value: 'support@sane.org.uk', href: 'mailto:support@sane.org.uk', note: 'Replies within 72 hours' },
        { type: 'web',   label: 'Website',  value: 'sane.org.uk', href: 'https://www.sane.org.uk/how-we-help/emotional-support' },
      ],
      logo: '/Sane.svg',
      bg: 'bg-blue-50 border-blue-100',
    },
  ];

  return (
    <main id="main-content" className="flex-1 font-body" style={{ background: 'linear-gradient(160deg, #C0DDD5 0%, #7BBDB0 50%, #4A9080 100%)' }}>

      <div className="text-center pt-10 pb-6 px-6">
        <p className="text-xs tracking-widest uppercase text-teal-950/40 mb-2">Help</p>
        <h1 className="font-display text-5xl md:text-6xl font-light text-teal-950/80 mb-2">
          UK Helplines
        </h1>
        <p className="text-teal-900/60 text-base max-w-md mx-auto">
          You are not alone. Every organisation below offers free, confidential support — no referral needed.
        </p>
      </div>

      <div className="max-w-2xl mx-auto px-4 pb-12 space-y-3">
        {helplines.map((line) => (
          <div
            key={line.id}
            className={`flex flex-col sm:flex-row gap-4 items-start p-5 rounded-2xl border bg-white/70 backdrop-blur-sm shadow-sm`}
          >
            {/* Logo */}
            <div className="flex-shrink-0 self-center sm:self-start">
              <a href={line.contacts.find(c => c.type === 'web')?.href ?? '#'} target="_blank" rel="noopener noreferrer">
                <Image src={line.logo} alt={line.name} width={90} height={70} className="object-contain rounded-lg" />
              </a>
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <p className="font-display text-xl font-medium text-ink mb-0.5">{line.name}</p>
              <p className="text-ink-soft text-sm mb-0.5">{line.tagline}</p>
              <p className="text-ink-soft/60 text-xs mb-3">{line.hours}</p>

              <div className="space-y-1">
                {line.contacts.map((c) => (
                  <p key={c.label} className="text-sm text-ink-soft">
                    <strong className="text-ink font-semibold">{c.label}: </strong>
                    <a href={c.href} className="text-teal-700 hover:text-teal-900 hover:underline underline-offset-2 transition-colors">
                      {c.value}
                    </a>
                    {c.note && <span className="text-ink-soft/60 text-xs ml-1">({c.note})</span>}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

    </main>
  );
}
