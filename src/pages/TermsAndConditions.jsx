import React from 'react'

const Heading = ({ children }) => (
  <h2 className="text-[17px] font-bold text-gray-900 mt-8 mb-3">{children}</h2>
)

const Para = ({ children }) => (
  <p className="text-[13.5px] text-gray-700 leading-relaxed mb-3">{children}</p>
)

const Bullets = ({ items }) => (
  <ul className="mb-3 flex flex-col gap-1.5 pl-1">
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-2 text-[13.5px] text-gray-700 leading-relaxed">
        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
)

const Divider = () => <div className="border-t border-gray-100 my-6" />

const EMAIL = 'drtanvi@tuesdaywizards.com'

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="max-w-3xl mx-auto px-6 py-14 lg:py-20">

        {/* Title */}
        <h1 className="text-[28px] sm:text-[32px] font-bold text-gray-900 mb-1">
          Terms and Conditions
        </h1>
        <p className="text-[13px] text-gray-500 font-semibold mb-2">Effective Date: April 28, 2026</p>

        <Divider />

        {/* Intro */}
        <Heading>Welcome to Tuesday Wizard</Heading>
        <Para>
          These Terms and Conditions outline the rules and regulations for the use of our website, services, and systems located at tuesdaywizards.com.
        </Para>
        <Para>
          <strong>Company Information:</strong><br />
          Tuesday Wizard<br />
          5322 Spruce St<br />
          Philadelphia, PA 19139<br />
          United States
        </Para>
        <Para>
          By accessing this website or engaging our services, you agree to these Terms and Conditions. If you do not agree, please do not use our website or services.
        </Para>

        <Divider />

        {/* 1 */}
        <Heading>1. Definitions</Heading>
        <Para>"Client", "You", and "Your" refer to the individual or entity using our services.</Para>
        <Para>"The Company", "We", "Us", and "Our" refer to Tuesday Wizard.</Para>
        <Para>"Services" refer to consulting, implementation, automation, and system design services provided by Tuesday Wizard.</Para>

        <Divider />

        {/* 2 */}
        <Heading>2. Use of Website and Services</Heading>
        <Para>By using our website and services, you agree to:</Para>
        <Bullets items={[
          'Provide accurate and complete information',
          'Use our services for lawful purposes only',
          'Not attempt to interfere with the functionality or security of our systems',
        ]} />
        <Para>We reserve the right to restrict or terminate access if these terms are violated.</Para>

        <Divider />

        {/* 3 */}
        <Heading>3. Services & Engagement</Heading>
        <Para>Tuesday Wizard provides consulting and implementation services related to:</Para>
        <Bullets items={[
          'monday.com system design and optimization',
          'Workflow automation (Make, Zapier, APIs)',
          'Business process improvement',
          'CRM and SaaS integrations',
        ]} />
        <Para>All services are governed by separate agreements such as Statements of Work (SOW), proposals, or contracts.</Para>

        <Divider />

        {/* 4 */}
        <Heading>4. Payments & Fees</Heading>
        <Bullets items={[
          'Payment terms will be defined in your agreement or invoice',
          'Late payments may result in service delays or suspension',
          'All fees are non-refundable unless otherwise stated in writing',
        ]} />

        <Divider />

        {/* 5 */}
        <Heading>5. Intellectual Property</Heading>
        <Para>
          All materials, workflows, systems, and content created by Tuesday Wizard remain the intellectual property of the Company unless otherwise agreed in writing.
        </Para>
        <Para>
          Clients are granted a limited, non-exclusive license to use deliverables for internal business purposes only.
        </Para>
        <Para>You may not:</Para>
        <Bullets items={[
          'Resell or redistribute our work without permission',
          'Copy or reproduce proprietary systems or frameworks',
        ]} />

        <Divider />

        {/* 6 */}
        <Heading>6. Client Responsibilities</Heading>
        <Para>Clients agree to:</Para>
        <Bullets items={[
          'Provide timely feedback and approvals',
          'Grant access to necessary tools and systems',
          'Ensure accuracy of data provided',
        ]} />
        <Para>Delays in communication or access may impact timelines and deliverables.</Para>

        <Divider />

        {/* 7 */}
        <Heading>7. Confidentiality</Heading>
        <Para>
          Both parties agree to maintain confidentiality of all proprietary or sensitive information shared during the engagement.
        </Para>
        <Para>We will not disclose client information without consent unless required by law.</Para>

        <Divider />

        {/* 8 */}
        <Heading>8. Third-Party Tools & Integrations</Heading>
        <Para>
          Our services may involve third-party platforms such as monday.com, Zapier, Make, Salesforce, and others.
        </Para>
        <Para>We are not responsible for:</Para>
        <Bullets items={[
          'Downtime or errors caused by third-party platforms',
          'Changes in third-party pricing, APIs, or functionality',
        ]} />

        <Divider />

        {/* 9 */}
        <Heading>9. Limitation of Liability</Heading>
        <Para>To the maximum extent permitted by law:</Para>
        <Bullets items={[
          'Tuesday Wizard shall not be liable for indirect, incidental, or consequential damages',
          'Our total liability shall not exceed the amount paid for services',
        ]} />
        <Para>We do not guarantee specific business results, revenue increases, or outcomes.</Para>

        <Divider />

        {/* 10 */}
        <Heading>10. Disclaimer</Heading>
        <Para>Our services and website are provided "as is" without warranties of any kind.</Para>
        <Para>We do not guarantee:</Para>
        <Bullets items={[
          'Continuous availability of the website',
          'Error-free performance of systems or automations',
        ]} />

        <Divider />

        {/* 11 */}
        <Heading>11. Links to Other Websites</Heading>
        <Para>
          Our website may contain links to third-party websites. We are not responsible for the content or practices of those sites.
        </Para>

        <Divider />

        {/* 12 */}
        <Heading>12. Termination</Heading>
        <Para>We reserve the right to terminate or suspend services if:</Para>
        <Bullets items={[
          'Terms are violated',
          'Payments are not made',
          'Misuse of services occurs',
        ]} />

        <Divider />

        {/* 13 */}
        <Heading>13. Changes to Terms</Heading>
        <Para>
          We may update these Terms and Conditions at any time. Continued use of our website or services constitutes acceptance of those changes.
        </Para>

        <Divider />

        {/* 14 */}
        <Heading>14. Governing Law</Heading>
        <Para>
          These Terms shall be governed by the laws of the State of Pennsylvania, United States.
        </Para>

        <Divider />

        {/* 15 */}
        <Heading>15. Contact Information</Heading>
        <div className="text-[13.5px] text-gray-700 leading-loose">
          <p className="font-semibold text-gray-900">Tuesday Wizard</p>
          <p>5322 Spruce St</p>
          <p>Philadelphia, PA 19139</p>
          <p className="mt-2">
            Email:{' '}
            <a href={`mailto:${EMAIL}`} className="text-purple-600 hover:text-purple-800 transition-colors">{EMAIL}</a>
          </p>
          <p>
            Website:{' '}
            <a href="https://tuesdaywizards.com" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 transition-colors">
              tuesdaywizards.com
            </a>
          </p>
        </div>

      </div>
    </div>
  )
}
