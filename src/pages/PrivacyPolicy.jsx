import React from 'react'

const Section = ({ number, title, children }) => (
  <div className="mb-8">
    <h2 className="text-[15px] font-bold text-gray-900 mb-3">
      {number}. {title.toUpperCase()}
    </h2>
    {children}
  </div>
)

const SubHeading = ({ children }) => (
  <p className="text-[14px] font-bold text-gray-900 mt-4 mb-2">{children}</p>
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

const Divider = () => <div className="border-t border-gray-100 my-7" />

const EMAIL = 'drtanvi@tuesdaywizards.com'

const TOC = [
  'What Information We Collect',
  'How We Use Your Information',
  'Sharing of Information',
  'Cookies & Tracking Technologies',
  'Third-Party Tools & Platforms',
  'Data Retention',
  'Data Security',
  'Your Privacy Rights',
  'California Privacy Rights (CCPA)',
  "Children's Privacy",
  'Updates to This Notice',
  'How Can You Review, Update, or Delete the Data We Collect From You?',
  'Contact Us',
]

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="max-w-3xl mx-auto px-6 py-14 lg:py-20">

        {/* Title */}
        <h1 className="text-[28px] sm:text-[34px] font-extrabold text-gray-900 tracking-tight mb-2">
          PRIVACY NOTICE
        </h1>
        <p className="text-[13px] font-semibold text-gray-500 mb-6">Last Updated: April 28, 2026</p>

        <Divider />

        {/* Intro */}
        <Para>
          Thank you for choosing to be part of our community at <strong>Tuesday Wizard</strong> ("Company", "we", "us", or "our"). We are committed to protecting your personal information and your right to privacy.
        </Para>
        <Para>
          If you have any questions or concerns about this privacy notice or our practices, please contact us at{' '}
          <a href={`mailto:${EMAIL}`} className="text-purple-600 hover:text-purple-800 transition-colors">{EMAIL}</a>.
        </Para>

        <Divider />

        {/* Who we are */}
        <div className="mb-8">
          <h2 className="text-[15px] font-bold text-gray-900 mb-3">WHO WE ARE</h2>
          <Para>
            Tuesday Wizard<br />
            5322 Spruce St<br />
            Philadelphia, PA 19139<br />
            United States
          </Para>
          <Para>
            We provide consulting, system implementation, and automation services, including monday.com, CRM systems, and workflow automation tools.
          </Para>
        </div>

        <Divider />

        {/* Table of Contents */}
        <div className="mb-8">
          <h2 className="text-[15px] font-bold text-gray-900 mb-4">TABLE OF CONTENTS</h2>
          <ol className="flex flex-col gap-2">
            {TOC.map((item, i) => (
              <li key={i} className="text-[13px] text-purple-600 hover:text-purple-800 transition-colors cursor-default">
                {i + 1}. {item.toUpperCase()}
              </li>
            ))}
          </ol>
        </div>

        <Divider />

        {/* Section 1 */}
        <Section number={1} title="What Information We Collect">
          <SubHeading>Information You Provide to Us</SubHeading>
          <Para>We collect personal information that you voluntarily provide when you:</Para>
          <Bullets items={['Fill out forms', 'Book calls', 'Contact us', 'Engage with our services']} />
          <Para>This may include:</Para>
          <Bullets items={['Name', 'Email address', 'Phone number', 'Business information', 'Billing details', 'Any other information you choose to provide']} />

          <SubHeading>Information Collected Automatically</SubHeading>
          <Para>When you use our website, we may collect:</Para>
          <Bullets items={['IP address', 'Browser type and device information', 'Usage data and site interactions', 'Location (approximate via IP)']} />
          <Para>This helps us improve performance, security, and user experience.</Para>

          <SubHeading>Information from Third Parties</SubHeading>
          <Para>We may receive data from:</Para>
          <Bullets items={['CRM systems', 'Marketing tools', 'Social platforms', 'Automation tools']} />
          <Para>This helps us improve services and personalize communication.</Para>
        </Section>

        <Divider />

        {/* Section 2 */}
        <Section number={2} title="How We Use Your Information">
          <Para>We use your information to:</Para>
          <Bullets items={[
            'Provide and deliver services',
            'Communicate with you',
            'Respond to inquiries',
            'Manage client relationships',
            'Improve our systems and offerings',
            'Send updates, marketing, or service-related communication',
            'Comply with legal obligations',
          ]} />
        </Section>

        <Divider />

        {/* Section 3 */}
        <Section number={3} title="Sharing of Information">
          <Para><strong>We do not sell your personal data.</strong></Para>
          <Para>We may share information only when necessary with:</Para>
          <Bullets items={[
            'Service providers (CRM, automation tools, payment processors)',
            'Business partners (for service delivery)',
            'Legal authorities when required',
          ]} />
          <Para>All third parties are required to protect your data.</Para>
        </Section>

        <Divider />

        {/* Section 4 */}
        <Section number={4} title="Cookies & Tracking Technologies">
          <Para>We use cookies and similar technologies to:</Para>
          <Bullets items={[
            'Improve website functionality',
            'Analyze traffic and usage',
            'Personalize your experience',
          ]} />
          <Para>You can disable cookies through your browser settings.</Para>
        </Section>

        <Divider />

        {/* Section 5 */}
        <Section number={5} title="Third-Party Tools & Platforms">
          <Para>Our services may involve tools such as:</Para>
          <Bullets items={['monday.com', 'Zapier', 'Make', 'Google Analytics', 'CRM platforms']} />
          <Para>
            These platforms have their own privacy policies. We recommend reviewing them as we are not responsible for their practices.
          </Para>
        </Section>

        <Divider />

        {/* Section 6 */}
        <Section number={6} title="Data Retention">
          <Para>We retain your information only as long as necessary to:</Para>
          <Bullets items={['Provide services', 'Meet legal and business obligations']} />
          <Para>When no longer needed, data is securely deleted or anonymized.</Para>
        </Section>

        <Divider />

        {/* Section 7 */}
        <Section number={7} title="Data Security">
          <Para>
            We implement reasonable technical and organizational measures to protect your data.
          </Para>
          <Para>
            However, no system is 100% secure, and you share information at your own risk.
          </Para>
        </Section>

        <Divider />

        {/* Section 8 */}
        <Section number={8} title="Your Privacy Rights">
          <Para>Depending on your location, you may have the right to:</Para>
          <Bullets items={[
            'Access your data',
            'Request corrections',
            'Request deletion',
            'Opt out of marketing communications',
          ]} />
          <Para>
            To exercise your rights, contact us at{' '}
            <a href={`mailto:${EMAIL}`} className="text-purple-600 hover:text-purple-800 transition-colors">{EMAIL}</a>.
          </Para>
        </Section>

        <Divider />

        {/* Section 9 */}
        <Section number={9} title="California Privacy Rights (CCPA)">
          <Para>If you are a California resident, you have the right to:</Para>
          <Bullets items={[
            'Request disclosure of data collected',
            'Request deletion of your data',
            'Opt out of data sharing',
          ]} />
          <Para>We will not discriminate against you for exercising your rights.</Para>
        </Section>

        <Divider />

        {/* Section 10 */}
        <Section number={10} title="Children's Privacy">
          <Para>
            Our services are not intended for individuals under 18. We do not knowingly collect data from minors.
          </Para>
        </Section>

        <Divider />

        {/* Section 11 */}
        <Section number={11} title="Updates to This Notice">
          <Para>
            We may update this Privacy Notice periodically. Updates will be posted on this page with a revised date.
          </Para>
        </Section>

        <Divider />

        {/* Section 12 */}
        <Section number={12} title="How Can You Review, Update, or Delete the Data We Collect From You?">
          <Para>
            Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it in some circumstances. To request to review, update, or delete your personal information, please visit:{' '}
            <a
              href="https://forms.monday.com/forms/6bc343fc710cf3fd9491d84885b32cd5?r=use1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 hover:text-purple-800 transition-colors break-all"
            >
              https://forms.monday.com/forms/6bc343fc710cf3fd9491d84885b32cd5?r=use1
            </a>
          </Para>
        </Section>

        <Divider />

        {/* Section 13 */}
        <Section number={13} title="Contact Us">
          <Para>If you have questions about this Privacy Notice or your data, contact us:</Para>
          <div className="text-[13.5px] text-gray-700 leading-loose">
            <p className="font-semibold text-gray-900">Tuesday Wizard</p>
            <p>5322 Spruce St</p>
            <p>Philadelphia, PA 19139</p>
            <p>United States</p>
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
        </Section>

      </div>
    </div>
  )
}
