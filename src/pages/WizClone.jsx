import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Check, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";

/* ── WizClone App Icon (exact from icon.jsx) ── */
const WizCloneIcon = ({ size = 56 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ flexShrink: 0, display: "block" }}
  >
    <rect width="28" height="28" rx="7" fill="#6C47FF" />
    <path
      d="M7 9L11 19L14 13L17 19L21 9"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ── Real MondayIcon from icon.jsx (scaled via width prop) ── */
const MondayLogo = ({ width = 54 }) => (
  <svg
    width={width}
    height={width * (89 / 135)}
    viewBox="0 0 135 89"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: "block", flexShrink: 0 }}
  >
    <path
      d="M16.2298 79.5828C13.3565 79.552 10.5429 78.7584 8.07701 77.2831C5.61112 75.8078 3.58148 73.7038 2.19583 71.1865C0.829424 68.6795 0.165343 65.85 0.273752 62.9969C0.38216 60.1438 1.25909 57.3729 2.81179 54.9768L32.4008 9.28653C33.9064 6.83703 36.0362 4.83183 38.5719 3.4764C41.1076 2.12097 43.958 1.46401 46.8311 1.57287C49.7043 1.68174 52.4969 2.5525 54.9228 4.09593C57.3486 5.63936 59.3205 7.79997 60.6364 10.3564C61.9411 12.8997 62.5333 15.7486 62.3501 18.6012C62.1669 21.4537 61.2151 24.2035 59.5958 26.559L30.0382 72.2189C28.5447 74.5115 26.4953 76.389 24.081 77.6766C21.6667 78.9641 18.9658 79.6199 16.2298 79.5828Z"
      fill="#FB275D"
    />
    <path
      d="M65.8814 79.1081C63.0066 79.0485 60.1997 78.2231 57.7503 76.717C55.3009 75.2109 53.2975 73.0787 51.9469 70.5403C50.61 68.0174 49.9791 65.1804 50.1209 62.3288C50.2627 59.4771 51.1721 56.7167 52.7527 54.339L82.8588 9.02108C84.3736 6.54769 86.5239 4.52581 89.0858 3.16608C91.6477 1.80634 94.5275 1.15852 97.4249 1.29015C100.322 1.42178 103.131 2.32802 105.559 3.91445C107.987 5.50088 109.946 7.70943 111.23 10.31C112.499 12.8995 113.039 15.7857 112.792 18.6588C112.544 21.5319 111.519 24.2835 109.826 26.618L79.7204 71.9282C78.2067 74.1953 76.1441 76.0425 73.7244 77.2979C71.3046 78.5533 68.6066 79.176 65.8814 79.1081Z"
      fill="#FFCC00"
    />
    <path
      d="M118.08 79.2614C127.011 79.21 134.21 72.1703 134.161 63.5379C134.111 54.9054 126.83 47.9492 117.899 48.0006C108.968 48.0521 101.769 55.0917 101.819 63.7242C101.868 72.3566 109.149 79.3129 118.08 79.2614Z"
      fill="#00CC6F"
    />
  </svg>
);

const MondayBadge = () => (
  <div
    className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white"
    style={{
      border: "1.5px solid rgba(251,39,93,0.2)",
    }}
  >
    <MondayLogo width={20} />
    <span
      className="text-[12px] font-bold"
      style={{ color: "#FB275D", letterSpacing: "-0.01em" }}
    >
      monday.com Marketplace
    </span>
  </div>
);

const FLOW = [
  {
    n: "01",
    title: "New item created",
    body: "Someone creates a new item anywhere in your workspace - board doesn't matter.",
  },
  {
    n: "02",
    title: "AI reads the name",
    body: "monday.com AI Blocks analyse the item name and compare it against your templates.",
  },
  {
    n: "03",
    title: "Template matched",
    body: "The best match above your confidence threshold is selected automatically.",
  },
  {
    n: "04",
    title: "Subitems cloned",
    body: "All subitems copy across in the correct order in under 5 seconds. Done.",
  },
];

const FEATURES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path
          d="M11 2L13.39 8.26L20 9.27L15.5 13.64L16.59 20.02L11 16.77L5.41 20.02L6.5 13.64L2 9.27L8.61 8.26L11 2Z"
          stroke="#6C47FF"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "AI Smart Matching",
    body: "Uses monday.com AI Blocks to match item names to the right template - even when names are fuzzy, abbreviated, or phrased differently.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect
          x="2"
          y="4"
          width="18"
          height="3"
          rx="1.5"
          stroke="#6C47FF"
          strokeWidth="1.6"
        />
        <rect
          x="4"
          y="9.5"
          width="14"
          height="2.5"
          rx="1.25"
          stroke="#6C47FF"
          strokeWidth="1.6"
        />
        <rect
          x="6"
          y="14"
          width="10"
          height="2.5"
          rx="1.25"
          stroke="#6C47FF"
          strokeWidth="1.6"
        />
      </svg>
    ),
    title: "Instant Subitem Clone",
    body: "Copies all subitems from the matched template in the correct order under the new item.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path
          d="M12 2C12 2 7 6 7 11C7 13.76 9.24 16 12 16C14.76 16 17 13.76 17 11C17 6 12 2 12 2Z"
          stroke="#6C47FF"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 16V19"
          stroke="#6C47FF"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M9 19H15"
          stroke="#6C47FF"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "NL Template Builder",
    body: "Type a plain English description of your workflow. The AI turns it into a full subitem template - no manual board setup needed.",
  },
  // {
  //   icon: (
  //     <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
  //       <circle cx="11" cy="11" r="8" stroke="#6C47FF" strokeWidth="1.6" />
  //       <path
  //         d="M11 7V11L14 13"
  //         stroke="#6C47FF"
  //         strokeWidth="1.6"
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //       />
  //     </svg>
  //   ),
  //   title: "Pattern Suggestions",
  //   body: "Detects when you manually add the same subtasks 3+ times and suggests turning the pattern into a saved template automatically.",
  // },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path
          d="M4 6H18"
          stroke="#6C47FF"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M4 10H14"
          stroke="#6C47FF"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M4 14H11"
          stroke="#6C47FF"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M4 18H8"
          stroke="#6C47FF"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Activity Log",
    body: "Full audit trail showing every event: item name, template matched, AI confidence score, subitems copied, and success or failure status.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path
          d="M11 2L13.5 7.5L20 8.3L15.5 12.5L16.8 19L11 15.9L5.2 19L6.5 12.5L2 8.3L8.5 7.5L11 2Z"
          stroke="#6C47FF"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Always-On Fallback",
    body: "If monday.com AI Blocks are unavailable, exact name matching activates instantly - zero downtime, no third-party AI dependency.",
  },
];

const PLANS = [
  {
    name: "Free",
    price: "$0",
    sub: "Forever free",
    hot: false,
    perks: [
      "Exact name matching",
      "1 template",
      "50 copies / month",
      "Activity log",
    ],
  },
  {
    name: "Pro",
    price: "$19",
    sub: "/ workspace / month",
    hot: true,
    perks: [
      "AI smart matching",
      "Up to 10 templates",
      "500 copies / month",
      "All sensitivity levels",
    ],
  },
  {
    name: "Business",
    price: "$39",
    sub: "/ workspace / month",
    hot: false,
    perks: [
      "All AI features",
      "NL template builder",
      "Unlimited templates",
      "Unlimited copies",
    ],
  },
];

function FadeIn({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function WizClonePage() {
  return (
    <div className="font-sans bg-white">
      <section
        className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-28 bg-[#F4ECF9]"
      >
        <div className="relative max-w-330 mx-auto px-6 xl:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
            >
              <div className="mb-6">
                <MondayBadge />
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div>
                  <WizCloneIcon size={50} />
                </div>
                <h1 className="text-[42px] sm:text-[52px] font-black text-gray-900 tracking-tight leading-none">
                  WizClone
                </h1>
              </div>

              <p className="text-[17px] sm:text-[18px] font-medium text-gray-500 leading-[1.75] mb-8 max-w-lg">
                The smartest way to automate subitem templates in monday.com.
              </p>

              {/* Tag pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  "AI-Powered",
                  "No Code",
                  "monday.com Native",
                  "Instant Setup",
                ].map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full text-[12px] font-semibold"
                    style={{
                      background: "rgba(108,71,255,0.08)",
                      color: "#6C47FF",
                      border: "1px solid rgba(108,71,255,0.15)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <Button
                  as="a"
                  href="https://monday.com/marketplace"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  className="gap-2"
                >
                  Try it Free
                  <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
                </Button>
                <Button
                  as="a"
                  href="https://calendly.com/tuesdaywizard/30minutestrategy"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                >
                  Book a Demo
                </Button>
              </div>
            </motion.div>

            {/* Right: app preview card */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.12, ease: "easeOut" }}
            >
              <div
                className="rounded-xl p-6 sm:p-8"
                style={{
                  background: "#fff",
                  border: "1px solid rgba(108,71,255,0.12)",
                }}
              >
                <div
                  className="flex items-center gap-2 mb-5 pb-4"
                  style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}
                >
                  <WizCloneIcon size={28} />
                  <span className="text-[13px] font-bold text-gray-900">
                    WizClone
                  </span>
                </div>

                {/* Event list */}
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">
                  Recent Activity
                </p>
                {[
                  {
                    item: "Acme Corp Onboarding",
                    match: "Client Onboarding",
                    count: 8,
                    ok: true,
                  },
                  {
                    item: "Q3 Campaign Setup",
                    match: "Marketing Campaign",
                    count: 6,
                    ok: true,
                  },
                  {
                    item: "Dev Sprint - October",
                    match: "Sprint Template",
                    count: 10,
                    ok: true,
                  },
                  {
                    item: "Random board update",
                    match: "No match",
                    count: 0,
                    ok: false,
                  },
                ].map((row, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-2.5 text-[12px]"
                    style={{
                      borderBottom:
                        i < 3 ? "1px solid rgba(0,0,0,0.05)" : "none",
                    }}
                  >
                    <div className="min-w-0 flex-1 mr-3">
                      <p className="font-semibold text-gray-800 truncate">
                        {row.item}
                      </p>
                      <p className="text-gray-400 truncate">{row.match}</p>
                    </div>
                    <div
                      className={`flex items-center gap-1.5 shrink-0 px-2 py-1 rounded-full text-[10px] font-bold ${
                        row.ok ? "text-emerald-600" : "text-gray-400"
                      }`}
                      style={{
                        background: row.ok
                          ? "rgba(16,185,129,0.08)"
                          : "rgba(0,0,0,0.05)",
                      }}
                    >
                      {row.ok ? (
                        <>
                          <Check className="w-3 h-3" strokeWidth={3} />
                          {row.count} subitems
                        </>
                      ) : (
                        "No match"
                      )}
                    </div>
                  </div>
                ))}

                {/* Bottom monday row */}
                <div
                  className="mt-4 pt-3 flex items-center gap-2"
                  style={{ borderTop: "1px solid rgba(0,0,0,0.05)" }}
                >
                  <MondayLogo width={28} />
                  <span className="text-[11px] text-gray-400">
                    Powered by monday.com AI Blocks
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-330 mx-auto px-6 xl:px-12">
          <FadeIn className="text-center mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-purple-600 mb-3">
              How It Works
            </p>
            <h2 className="text-[26px] sm:text-[34px] lg:text-[42px] font-extrabold text-gray-900 tracking-tight leading-tight">
              Zero steps for your team.{" "}
              <span
                style={{
                  background: "linear-gradient(125deg, #7c3aed, #a78bfa)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                It just runs.
              </span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FLOW.map((f, i) => (
              <FadeIn key={f.n} delay={i * 0.09}>
                <div
                  className="relative p-6 rounded-2xl h-full"
                  style={{
                    background: i % 2 === 0 ? "#faf9ff" : "#fff",
                    border: "1px solid rgba(108,71,255,0.1)",
                  }}
                >
                  {/* Step number */}
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-[12px] font-black mb-4"
                    style={{
                      background: "rgba(108,71,255,0.1)",
                      color: "#6C47FF",
                    }}
                  >
                    {f.n}
                  </div>
                  {i < FLOW.length - 1 && (
                    <div className="hidden lg:block absolute -right-2.5 top-[26px] w-5 h-5 z-10">
                      <div
                        className="w-full h-full rounded-full bg-white border-2 flex items-center justify-center"
                        style={{ borderColor: "rgba(108,71,255,0.25)" }}
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ background: "#a78bfa" }}
                        />
                      </div>
                    </div>
                  )}
                  <h3 className="text-[15px] font-bold text-gray-900 mb-2">
                    {f.title}
                  </h3>
                  <p className="text-[13px] leading-[1.7] text-gray-500">
                    {f.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      <section
        className="py-20 lg:py-28"
        style={{
          background: "linear-gradient(120deg, #f8f7fc 0%, #ede9fe 100%)",
        }}
      >
        <div className="max-w-330 mx-auto px-6 xl:px-12">
          <FadeIn className="text-center mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-purple-600 mb-3">
              Features
            </p>
            <h2 className="text-[26px] sm:text-[34px] lg:text-[42px] font-extrabold text-gray-900 tracking-tight leading-tight">
              Everything you need,{" "}
              <span
                style={{
                  background: "linear-gradient(125deg, #7c3aed, #a78bfa)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                nothing you don't.
              </span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURES.map((f, i) => (
              <FadeIn key={f.title} delay={i * 0.07}>
                <div
                  className="bg-white rounded-2xl p-6 h-full transition-all duration-200 hover:-translate-y-1"
                  style={{
                    border: "1px solid rgba(108,71,255,0.1)",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 8px 32px rgba(108,71,255,0.12)";
                    e.currentTarget.style.borderColor = "rgba(108,71,255,0.25)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 2px 12px rgba(0,0,0,0.04)";
                    e.currentTarget.style.borderColor = "rgba(108,71,255,0.1)";
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      background: "rgba(108,71,255,0.08)",
                      border: "1px solid rgba(108,71,255,0.12)",
                    }}
                  >
                    {f.icon}
                  </div>
                  <h3 className="text-[15px] font-bold text-gray-900 mb-2">
                    {f.title}
                  </h3>
                  <p className="text-[13px] leading-[1.75] text-gray-500">
                    {f.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      {/* <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-330 mx-auto px-6 xl:px-12">
          <FadeIn className="text-center mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-purple-600 mb-3">
              Pricing
            </p>
            <h2 className="text-[26px] sm:text-[34px] lg:text-[42px] font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-[15px] text-gray-500 max-w-lg mx-auto">
              Start free. Upgrade when you need AI matching and higher copy
              limits. No surprises.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
            {PLANS.map((plan, i) => (
              <FadeIn key={plan.name} delay={i * 0.1}>
                <div
                  className="relative rounded-2xl p-7 flex flex-col h-full"
                  style={
                    plan.hot
                      ? {
                          background:
                            "linear-gradient(145deg, #6C47FF 0%, #7c3aed 100%)",
                          boxShadow: "0 20px 48px rgba(108,71,255,0.35)",
                        }
                      : {
                          background: "#fff",
                          border: "1px solid rgba(108,71,255,0.12)",
                          boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
                        }
                  }
                >
                  {plan.hot && (
                    <div
                      className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest text-purple-700 bg-white"
                      style={{ boxShadow: "0 2px 8px rgba(108,71,255,0.25)" }}
                    >
                      Most Popular
                    </div>
                  )}

                  <p
                    className={`text-[13px] font-bold mb-3 ${plan.hot ? "text-purple-200" : "text-gray-400"}`}
                  >
                    {plan.name}
                  </p>
                  <div className="flex items-baseline gap-1.5 mb-1">
                    <span
                      className={`text-[36px] font-black leading-none ${plan.hot ? "text-white" : "text-gray-900"}`}
                    >
                      {plan.price}
                    </span>
                  </div>
                  <p
                    className={`text-[12px] mb-6 ${plan.hot ? "text-purple-200" : "text-gray-400"}`}
                  >
                    {plan.sub}
                  </p>

                  <ul className="flex flex-col gap-3 flex-1 mb-7">
                    {plan.perks.map((p) => (
                      <li key={p} className="flex items-center gap-2.5">
                        <div
                          className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                          style={{
                            background: plan.hot
                              ? "rgba(255,255,255,0.2)"
                              : "rgba(108,71,255,0.1)",
                          }}
                        >
                          <Check
                            className="w-2.5 h-2.5"
                            style={{ color: plan.hot ? "#fff" : "#6C47FF" }}
                            strokeWidth={3}
                          />
                        </div>
                        <span
                          className={`text-[13px] ${plan.hot ? "text-white" : "text-gray-600"}`}
                        >
                          {p}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="https://monday.com/marketplace"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 h-10 rounded-xl text-[13px] font-bold transition-all duration-200 hover:scale-[1.02]"
                    style={
                      plan.hot
                        ? {
                            background: "#fff",
                            color: "#6C47FF",
                          }
                        : {
                            background: "rgba(108,71,255,0.08)",
                            color: "#6C47FF",
                            border: "1px solid rgba(108,71,255,0.15)",
                          }
                    }
                  >
                    Get started
                    <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2.5} />
                  </a>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section> */}
      <section
        className="py-20 lg:py-24"
        style={{
          background: "linear-gradient(135deg, #faf9ff 0%, #f3f0ff 100%)",
        }}
      >
        <div className="max-w-330 mx-auto px-6 xl:px-12 text-center">
          <FadeIn>
            <div
              className="flex items-center justify-center mb-6"
            >
              <WizCloneIcon size={56} />
            </div>
            <h2 className="text-[26px] sm:text-[34px] lg:text-[40px] font-extrabold text-gray-900 tracking-tight mb-4">
              Ready to stop repeating yourself?
            </h2>
            <p className="text-[15px] text-gray-500 max-w-lg mx-auto mb-8 leading-[1.8]">
              WizClone is live on the monday.com Marketplace. Install it free
              and see subitems populate automatically the first time you create
              an item.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <Button
                as="a"
                href="https://monday.com/marketplace"
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                className="gap-2"
              >
                Install WizClone Free
                <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
              </Button>
              <Button
                as="a"
                href="https://calendly.com/tuesdaywizard/30minutestrategy"
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
              >
                Talk to the Team
              </Button>
            </div>
            {/* monday.com wordmark */}
            <div className="flex items-center justify-center gap-2">
              <span className="text-[12px] text-gray-400">Available on</span>
              <MondayLogo width={54} />
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
