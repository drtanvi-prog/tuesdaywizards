import mondayLogo from "../../assets/partners/monday.webp";
import makeLogo from "../../assets/partners/make.webp";
import jotformLogo from "../../assets/partners/jotform.webp";
import zapierLogo from "../../assets/partners/zapier.webp";
import docusignLogo from "../../assets/partners/docusign.webp";
import stripeLogo from "../../assets/partners/stripe.webp";

import calendlyLogo from "../../assets/partners/calendly.webp";
import docketwiseLogo from "../../assets/partners/docketwise.webp";
import lawpayLogo from "../../assets/partners/lawpay.webp";
import smithaiLogo from "../../assets/partners/smithai.webp";
import ziflowLogo from "../../assets/partners/ziflow.webp";
import frontLogo from "../../assets/partners/front.webp";
import keragonLogo from "../../assets/partners/keragon.webp";
import QuoLogo from "../../assets/partners/quo.png";
import PandaDocLogo from "../../assets/partners/pandadoc.png";

const partners = [
  {
    logo: mondayLogo,
    alt: "Monday",
  },
  {
    logo: makeLogo,
    alt: "Make",
  },
  {
    logo: jotformLogo,
    alt: "Jotform",
  },
  {
    logo: zapierLogo,
    alt: "Zapier",
  },
  {
    logo: docusignLogo,
    alt: "Docusign",
  },
  {
    logo: stripeLogo,
    alt: "Stripe",
  },
  {
    logo: calendlyLogo,
    alt: "Calendly",
  },
  {
    logo: QuoLogo,
    alt: "Quo",
  },
  {
    logo: PandaDocLogo,
    alt: "PandaDoc",
  },
  {
    logo: smithaiLogo,
    alt: "Smith AI",
  },
  {
    logo: frontLogo,
    alt: "Front",
  },
  {
    logo: keragonLogo,
    alt: "Keragon",
  },
];

export default function PartnersSection() {
  return (
    <section
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
      style={{
        background: "#f6fafd",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
        <div className="max-w-4xl mb-16 lg:mb-20">
          <h2 className="text-[26px] sm:text-[32px] lg:text-[40px] leading-[1.05] font-black tracking-[-0.03em] text-[#0f172a] mb-6">
            Meet our partners
          </h2>

          <div className="space-y-2">
            <p className="text-[17px] sm:text-[18px] leading-[1.7] text-[#111827] font-medium">
              Your Certified monday.com Platinum Partner & Make.com Gold Partner
            </p>

            <p className="text-[17px] sm:text-[18px] leading-[1.8] text-[#374151] max-w-5xl">
              From workflow automation consulting to complex integrations, our
              team brings deep consulting expertise in the tools that power
              today&apos;s top-performing businesses.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-x-10 lg:gap-x-14 gap-y-12 lg:gap-y-16 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-[72px]"
            >
              <img
                src={partner.logo}
                alt={partner.alt}
                className={`h-full w-full object-contain opacity-95 hover:opacity-100 transition-all duration-300`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
