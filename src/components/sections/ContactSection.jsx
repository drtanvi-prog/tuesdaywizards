import { MondayLogo } from "../common/Icons";
import makeLogo from "../../assets/partners/make.webp";
import zapierLogo from "../../assets/partners/zapier.webp";

const checks = [
  "Discuss the best solution to meet your business goals",
  "Get tailored pricing information",
  "Discover how to streamline cross-team workflows",
];

export default function ContactSection() {
  return (
    <section className="py-20 sm:py-24 lg:py-28" style={{ background: "#f6fafd" }}>
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-extrabold text-gray-900 tracking-tight leading-[1.12] mb-4">
            Get In Touch
          </h2>
          <p className="text-[15px] sm:text-[16px] text-[#64748b] max-w-lg mx-auto leading-relaxed">
            Meet with our team of experts to review your current workflows and begin creating
            a path to scaleability with monday.com.
          </p>
        </div>

        {/* Card */}
        <div
          className="rounded-2xl p-8 sm:p-10 lg:p-12"
          style={{
            background: "linear-gradient(135deg, #f3f0ff 0%, #ede9fe 40%, #e0d9fb 75%, #d4cafe 100%)",
          }}
        >
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            {/* Left */}
            <div className="flex-1 flex flex-col justify-between gap-8">
              <div>
                <h3 className="text-[20px] sm:text-[22px] font-bold text-[#0f172a] mb-6 leading-snug">
                  Talk with our sales team to see how Tuesday Wizard can help you with your needs
                </h3>
                <ul className="flex flex-col gap-4">
                  {checks.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                        style={{ background: "rgba(124,58,237,0.12)" }}
                      >
                        <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
                          <path d="M1 4.5L4 7.5L10 1.5" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className="text-[14.5px] sm:text-[15px] text-[#1e293b] leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <a
                  href="https://forms.monday.com/forms/e9217dad1b923df8774caf916e69e1a0?r=use1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-7 py-3 rounded-lg text-white text-[14px] font-semibold transition-opacity duration-150 hover:opacity-90"
                  style={{ background: "#2563eb" }}
                >
                  Contact Our Team
                </a>
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-col gap-6 lg:w-[340px] shrink-0">
              {/* Testimonial card */}
              <div className="bg-white rounded-xl p-5 shadow-sm relative">
                {/* Quote icon */}
                <span
                  className="absolute top-4 right-4 text-[32px] font-serif leading-none select-none"
                  style={{ color: "rgba(99,102,241,0.15)" }}
                >
                  "
                </span>
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-full shrink-0 flex items-center justify-center text-white text-[13px] font-bold select-none"
                    style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}
                  >
                    GM
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-[#0f172a]">Gina Mondino</p>
                    {/* <p className="text-[11.5px] text-[#64748b]">Senior Director, CTO Product and Program Office | Oscar</p> */}
                  </div>
                </div>
                <p className="text-[13px] text-[#374151] leading-relaxed">
                  "I used monday.com to help with my small business. They were able to help me build boards to help me organize my projects. They also helped automate some repetitive tasks and streamline my SOPs. It was a great experience, will use them again if needed in the future!"
                </p>
              </div>

              {/* Partner logos */}
              <div className="flex items-center gap-6 flex-wrap">
                <MondayLogo className="h-6 w-auto opacity-80" />
                <img src={zapierLogo} alt="Zapier" className="h-10 object-contain opacity-80" />
                <img src={makeLogo} alt="Make" className="h-6 object-contain opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
