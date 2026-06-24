import { motion, AnimatePresence } from "framer-motion";
import { MondayAgent, MondayLogo, MondaySideKick, MondayVibe, MondayWorkflow } from "../common/Icons";
import jotformLogo from "../../assets/partners/jotform.webp";
import zapierLogo from "../../assets/partners/zapier.webp";
import docusignLogo from "../../assets/partners/docusign.webp";
import stripeLogo from "../../assets/partners/stripe.webp";
import calendlyLogo from "../../assets/partners/calendly.webp";
import smithaiLogo from "../../assets/partners/smithai.webp";
import frontLogo from "../../assets/partners/front.webp";
import keragonLogo from "../../assets/partners/keragon.webp";
import QuoLogo from "../../assets/partners/quo.png";
import PandaDocLogo from "../../assets/partners/pandadoc.png";

const integrations = [
  { logo: jotformLogo, alt: "Jotform" },
  { logo: zapierLogo, alt: "Zapier" },
  { logo: docusignLogo, alt: "Docusign" },
  { logo: stripeLogo, alt: "Stripe" },
  { logo: calendlyLogo, alt: "Calendly" },
  { logo: QuoLogo, alt: "Quo" },
  { logo: PandaDocLogo, alt: "PandaDoc" },
  { logo: smithaiLogo, alt: "Smith AI" },
  { logo: frontLogo, alt: "Front" },
  { logo: keragonLogo, alt: "Keragon" },
];

// Monday AI product icons as inline SVGs
function SidekickIcon({ className }) {
  return (
    <motion.svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={{ rotate: 360 }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
    >
      <defs>
        <linearGradient id="sk-g1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="33%" stopColor="#10b981" />
          <stop offset="66%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      {/* 4-pointed sparkle */}
      <path
        d="M20 2 C20 2 21.5 11 20 20 C18.5 11 20 2 20 2Z M38 20 C38 20 29 21.5 20 20 C29 18.5 38 20 38 20Z M20 38 C20 38 18.5 29 20 20 C21.5 29 20 38 20 38Z M2 20 C2 20 11 18.5 20 20 C11 21.5 2 20 2 20Z"
        fill="url(#sk-g1)"
      />
      <circle cx="20" cy="20" r="3" fill="url(#sk-g1)" />
    </motion.svg>
  );
}

function AgentsIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ag-g1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
      {/* Diamond shape */}
      <path d="M20 3 L37 20 L20 37 L3 20 Z" fill="url(#ag-g1)" opacity="0.15" />
      <path d="M20 3 L37 20 L20 37 L3 20 Z" stroke="url(#ag-g1)" strokeWidth="2" fill="none" />
      {/* Inner lines */}
      <path d="M20 3 L20 37 M3 20 L37 20" stroke="url(#ag-g1)" strokeWidth="1" opacity="0.4" />
      <circle cx="20" cy="20" r="4" fill="url(#ag-g1)" />
    </svg>
  );
}

function WorkflowsIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="wf-g1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
      </defs>
      {/* Connected nodes */}
      <circle cx="20" cy="8" r="5" fill="url(#wf-g1)" />
      <circle cx="8" cy="30" r="5" fill="url(#wf-g1)" opacity="0.7" />
      <circle cx="32" cy="30" r="5" fill="url(#wf-g1)" opacity="0.7" />
      <line x1="20" y1="13" x2="8" y2="25" stroke="url(#wf-g1)" strokeWidth="1.5" />
      <line x1="20" y1="13" x2="32" y2="25" stroke="url(#wf-g1)" strokeWidth="1.5" />
    </svg>
  );
}

function VibeIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="vb-g1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="50%" stopColor="#ec4899" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
      </defs>
      {/* Heart shape */}
      <path
        d="M20 34 C20 34 5 24 5 14 C5 9 9 5 14 5 C17 5 19.5 6.5 20 8 C20.5 6.5 23 5 26 5 C31 5 35 9 35 14 C35 24 20 34 20 34Z"
        fill="url(#vb-g1)"
        opacity="0.9"
      />
    </svg>
  );
}

const mondayProducts = [
  { icon: MondaySideKick, name: "Sidekick", desc: "AI-powered assistant" },
  { icon: MondayAgent, name: "Agents", desc: "Autonomous workflows" },
  { icon: MondayWorkflow, name: "Workflows", desc: "Process automation" },
  { icon: MondayVibe, name: "Vibe", desc: "Work OS experience" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: "easeOut" },
  }),
};

export default function PartnersSection() {
  return (
    <section
      className="relative overflow-hidden py-20 sm:py-24 lg:py-32"
      style={{ background: "#f8fafc" }}
    >
      {/* Subtle grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10">

        {/* ── Section header ── */}
        <motion.div
          className="mb-12 lg:mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-violet-500 mb-3">
            Our Partners & Ecosystem
          </p>
          <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-black tracking-tight text-[#0f172a] leading-[1.08]">
            Built on the best platforms
          </h2>
        </motion.div>

        {/* ── Featured partner cards ── */}
        <div className="grid grid-cols-1 gap-4 mb-4">

          {/* Monday.com - full width card */}
          <motion.div
            className="rounded-2xl overflow-hidden border border-[#e2e8f0] bg-white relative group"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
          >
            {/* Top gradient stripe */}
            <div
              className="h-1 w-full"
              style={{
                background: "linear-gradient(90deg, #FF3D57 0%, #FF7575 30%, #FFCB00 60%, #00CA72 100%)",
              }}
            />

            <div className="p-8 sm:p-10">
              <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16">

                {/* Left - brand info */}
                <div className="flex-shrink-0 lg:w-72">
                  <MondayLogo className="h-8 sm:h-9 w-auto object-contain mb-5" />
                  <p className="text-[14px] text-[#64748b] leading-[1.7] mb-6">
                    Certified experts across all monday.com products - from core Work OS to the latest AI-native features.
                  </p>
                  {/* Stats */}
                  <div className="flex items-center gap-6 pt-5 border-t border-[#f1f5f9]">
                    {[
                      { num: '15+', label: 'Clients served' },
                      { num: '4.5★', label: 'Trustpilot rating' },
                    ].map(s => (
                      <div key={s.label}>
                        <p className="text-[22px] font-black text-[#0f172a] leading-none">{s.num}</p>
                        <p className="text-[11px] text-[#94a3b8] mt-1">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div className="hidden lg:block w-px self-stretch bg-[#f1f5f9]" />

                {/* Right - AI Products grid */}
                <div className="flex-1">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#94a3b8] mb-5">
                    monday.com AI Products
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {mondayProducts.map((product) => (
                      <div
                        key={product.name}
                        className="flex flex-col items-center gap-2.5 p-5 rounded-xl border border-[#f1f5f9] bg-[#f8fafc] hover:bg-white hover:border-[#e2e8f0] hover:shadow-sm transition-all duration-200 cursor-default"
                      >
                        <product.icon className="w-10 h-10" />
                        <span className="text-[13px] font-semibold text-[#0f172a]">{product.name}</span>
                        <span className="text-[10.5px] text-[#94a3b8] text-center leading-tight">{product.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>

        {/* ── Integration Partners ── */}
        <motion.div
          className="rounded-2xl border border-[#e2e8f0] bg-white p-8 sm:p-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={2}
          variants={fadeUp}
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#94a3b8] mb-8">
            Integration Ecosystem
          </p>

          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-10 gap-x-6 gap-y-8 items-center">
            {integrations.map((partner, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center h-10"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={index * 0.5}
                variants={fadeUp}
              >
                <img
                  src={partner.logo}
                  alt={partner.alt}
                  className="h-full w-full object-contain opacity-50 hover:opacity-90 grayscale hover:grayscale-0 transition-all duration-300"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
