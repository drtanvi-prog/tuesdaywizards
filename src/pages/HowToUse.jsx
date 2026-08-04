import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IconSettings,
  IconCopy,
  IconPlayerPlay,
  IconApps,
  IconTemplate,
  IconListDetails,
  IconHelpCircle,
  IconSparkles,
  IconShieldLock,
  IconEye,
  IconX,
  IconArrowRight,
} from "@tabler/icons-react";
import { useWindowWidth } from "../hooks/useWindowWidth";

// Import images
import createTemplateWithAiImg from "../assets/how-to-use/create-template-with-ai.png";
import createTemplateImg from "../assets/how-to-use/create-template.png";
import saveSettingImg from "../assets/how-to-use/save-setting.png";
import selectBoardImg from "../assets/how-to-use/select-board.png";
import showActivityImg from "../assets/how-to-use/show-activity.png";
import wizcloneClickImg from "../assets/how-to-use/wizclone-click.png";

const renderDescription = (text) => {
  if (!text) return null;
  return text.split(/(\*\*.*?\*\*)/).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} style={{ fontWeight: "700", color: "var(--text-primary)" }}>
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
};

export default function HowToUse() {
  const width = useWindowWidth();
  const isMobile = width > 0 && width < 768;
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveImage(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    // Hide Tawk.to chat widget if present
    if (window.Tawk_API) {
      if (typeof window.Tawk_API.hideWidget === "function") {
        window.Tawk_API.hideWidget();
      }
      // Handle lazy loading hook
      window.Tawk_API.onLoad = function () {
        if (typeof window.Tawk_API.hideWidget === "function") {
          window.Tawk_API.hideWidget();
        }
      };
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      // Show Tawk.to chat widget when leaving this page
      if (window.Tawk_API && typeof window.Tawk_API.showWidget === "function") {
        window.Tawk_API.showWidget();
      }
    };
  }, []);

  const sections = [
    {
      step: 1,
      title: "Launch WizClone in your Workspace Sidebar",
      badge: "INITIAL SETUP",
      icon: IconPlayerPlay,
      description:
        "WizClone operates as a workspace application rather than being tied to a single board. This allows you to define templates globally and apply them across multiple boards inside your workspace. To begin, click on the **WizClone logo** in the left sidebar menu under the Workspace apps list. If it's your first time, you'll see a simple login screen that connects your monday.com profile with our automated workflow handler.",
      img: wizcloneClickImg,
    },
    {
      step: 2,
      title: "Link and Configure Template Boards",
      badge: "SETTINGS INTERFACE",
      icon: IconSettings,
      description:
        "WizClone uses standard monday.com boards as template libraries. Navigate to the **Settings** tab from the app's sidebar. Under the **Template Board** section, click on the dropdown input. You will see a list of boards. Select the target boards that contain (or will contain) your master tasks and subitem checklists. WizClone automatically filters out subitem boards to ensure you can only select parent boards.",
      img: selectBoardImg,
    },
    {
      step: 3,
      title: "Build Subitem Templates (Manual or AI Generated)",
      badge: "TEMPLATE BUILDER",
      icon: IconTemplate,
      isSpecial: true,
      description:
        "The Template Builder is where you design the checklist templates that will be automatically copied. You can create lists step-by-step manually, or use our smart natural-language AI prompt. Type a prompt like 'client onboarding tasks' and click Generate. Our system will immediately create a comprehensive set of tasks, complete with custom parent names and subitems, which you can edit at any time.",
      options: [
        {
          title: "Option A: Manual Builder",
          desc: "Create template items and define nested subitem structures using our clean layout directly in the builder.",
          img: createTemplateImg,
        },
        {
          title: "Option B: AI Assistant",
          desc: "Instruct the AI helper to write and structure a template dynamically based on your project description.",
          img: createTemplateWithAiImg,
        },
      ],
    },
    {
      step: 4,
      title: "Enable the Global Automation Engine",
      badge: "ACTIVATION",
      icon: IconCopy,
      description:
        "To start automating, enable the toggle labeled **'Enable WizClone automation for this workspace'**. Underneath, choose your AI Matching Sensitivity (Strict, Balanced, or Loose) which controls how closely the name of a new item must match your template. Finally, click the **Save Settings** button at the bottom of the page to save your configurations and register the webhook triggers on your selected boards.",
      img: saveSettingImg,
    },
    {
      step: 5,
      title: "Monitor Real-Time Syncs in the Activity Log",
      badge: "AUDITING",
      icon: IconListDetails,
      description:
        "Every time a new item is created in your workspace, WizClone's automated background script runs. Head over to the **Activity Log** tab to see exactly what happened. The activity log provides an audit trail: it details the triggering item name, matched template item, the computed AI confidence score, the number of cloned subitems, and execution statuses (Success, Skipped, or Errors).",
      img: showActivityImg,
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "var(--bg-primary)",
        color: "var(--text-primary)",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
        overflowY: "auto",
        padding: isMobile ? "32px 16px" : "56px 40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Premium Hero Header */}
      <div
        style={{
          width: "100%",
          maxWidth: "1000px",
          textAlign: "center",
          marginBottom: isMobile ? "40px" : "64px",
          marginTop: "16px",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            backgroundColor: "var(--accent-light)",
            padding: "8px 18px",
            borderRadius: "99px",
            marginBottom: "16px",
            fontSize: "12px",
            fontWeight: "600",
            color: "var(--accent)",
            textTransform: "uppercase",
            letterSpacing: "0.06em",
          }}
        >
          <IconSparkles size={14} style={{ color: "var(--success)" }} /> WizClone Setup &amp; User Manual
        </div>
        <h1
          style={{
            fontSize: isMobile ? "28px" : "42px",
            fontWeight: "700",
            letterSpacing: "-0.03em",
            lineHeight: "1.2",
            marginBottom: "16px",
            color: "var(--text-primary)",
          }}
        >
          Automatic Subitem Automation Guide
        </h1>
        <p
          style={{
            fontSize: isMobile ? "14.5px" : "17px",
            color: "var(--text-secondary)",
            maxWidth: "680px",
            margin: "0 auto",
            lineHeight: "1.6",
          }}
        >
          WizClone monitors your workspace and copies custom lists of subitems instantly when new tasks are added. Follow this step-by-step setup guide.
        </p>
      </div>

      {/* Prerequisites & Installation Instructions */}
      <div
        style={{
          width: "100%",
          maxWidth: "1000px",
          backgroundColor: "var(--bg-secondary)",
          border: "1px solid var(--border)",
          borderRadius: "16px",
          padding: isMobile ? "20px" : "32px",
          marginBottom: "40px",
        }}
      >
        <h3
          style={{
            fontSize: "18px",
            fontWeight: "700",
            marginBottom: "16px",
            color: "var(--text-primary)",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <IconShieldLock size={20} style={{ color: "var(--accent)" }} />
          Prerequisites &amp; App Installation
        </h3>
        <ul
          style={{
            margin: 0,
            paddingLeft: "20px",
            fontSize: "14.5px",
            color: "var(--text-secondary)",
            lineHeight: "1.8",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <li>
            <strong>monday.com Account:</strong> You must have an active monday.com account with admin permissions (or app installation permissions) in your target workspace.
          </li>
          <li>
            <strong>App Authorization:</strong> Upon adding WizClone, authorize the application when prompted to grant the necessary permissions for reading board structures and creating subitems on your behalf.
          </li>
          <li>
            <strong>Template Board Setup:</strong> Ensure you have at least one board in your workspace populated with the items and subitem structures you wish to use as templates.
          </li>
        </ul>
      </div>

      {/* Video Walkthrough Section */}
      <div
        style={{
          width: "100%",
          maxWidth: "1000px",
          marginBottom: "48px",
        }}
      >
        <div
          style={{
            position: "relative",
            paddingBottom: "56.25%", /* 16:9 Aspect Ratio */
            height: 0,
            overflow: "hidden",
            borderRadius: "16px",
            border: "1px solid var(--border)",
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.04)",
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/1rFzO1f4LGY"
            title="WizClone Video Walkthrough"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: 0,
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
      {/* Main Steps Grid */}
      <div
        style={{
          width: "100%",
          maxWidth: "1000px",
          display: "flex",
          flexDirection: "column",
          gap: "80px",
        }}
      >
        {sections.map((sec) => {
          const Icon = sec.icon;

          if (sec.isSpecial) {
            return (
              <section
                key={sec.step}
                style={{
                  borderTop: "1px solid var(--border)",
                  paddingTop: "56px",
                }}
              >
                {/* Header info */}
                <div style={{ maxWidth: "720px", marginBottom: "36px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      marginBottom: "12px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: "700",
                        letterSpacing: "0.05em",
                        backgroundColor: "var(--accent-light)",
                        color: "var(--text-secondary)",
                        padding: "4px 10px",
                        borderRadius: "4px",
                      }}
                    >
                      {sec.badge}
                    </span>
                    <IconArrowRight size={14} style={{ color: "var(--text-muted)" }} />
                    <span style={{ fontSize: "13px", fontWeight: "600", color: "var(--text-muted)" }}>
                      STEP {sec.step} OF 5
                    </span>
                  </div>
                  <h2
                    style={{
                      fontSize: isMobile ? "20px" : "24px",
                      fontWeight: "700",
                      letterSpacing: "-0.01em",
                      marginBottom: "12px",
                    }}
                  >
                    {sec.title}
                  </h2>
                  <p
                    style={{
                      fontSize: "14.5px",
                      color: "var(--text-secondary)",
                      lineHeight: "1.75",
                      margin: 0,
                    }}
                  >
                    {renderDescription(sec.description)}
                  </p>
                </div>

                {/* Sub Options Grid */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
                    gap: "28px",
                  }}
                >
                  {sec.options.map((opt, i) => (
                    <div
                      key={i}
                      style={{
                        border: "1px solid var(--border)",
                        borderRadius: "16px",
                        padding: "24px",
                        backgroundColor: "var(--bg-primary)",
                        transition: "all 0.2s ease",
                      }}
                    >
                      <h4
                        style={{
                          fontSize: "15px",
                          fontWeight: "600",
                          margin: "0 0 6px 0",
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                        }}
                      >
                        {i === 1 ? <IconSparkles size={16} style={{ color: "var(--success)" }} /> : <IconTemplate size={16} />}
                        {opt.title}
                      </h4>
                      <p
                        style={{
                          fontSize: "13px",
                          color: "var(--text-secondary)",
                          lineHeight: "1.6",
                          marginBottom: "16px",
                          height: isMobile ? "auto" : "44px",
                        }}
                      >
                        {opt.desc}
                      </p>
                      <div
                        onClick={() => setActiveImage(opt.img)}
                        style={{
                          borderRadius: "10px",
                          overflow: "hidden",
                          border: "1px solid var(--border)",
                          cursor: "zoom-in",
                          position: "relative",
                        }}
                        className="group"
                      >
                        <img
                          src={opt.img}
                          alt={opt.title}
                          style={{
                            width: "100%",
                            display: "block",
                            transition: "transform 0.25s ease",
                          }}
                        />
                        {/* Hover Overlay */}
                        <div
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            backgroundColor: "rgba(0,0,0,0.15)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            opacity: 0,
                            transition: "opacity 0.2s ease",
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
                          onMouseLeave={(e) => (e.currentTarget.style.opacity = 0)}
                        >
                          <div
                            style={{
                              backgroundColor: "#ffffff",
                              color: "#000000",
                              padding: "8px 14px",
                              borderRadius: "20px",
                              fontSize: "12px",
                              fontWeight: "600",
                              display: "flex",
                              alignItems: "center",
                              gap: "6px",
                              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                            }}
                          >
                            <IconEye size={14} /> Click to zoom
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          }

          return (
            <section
              key={sec.step}
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "4fr 5fr",
                gap: isMobile ? "24px" : "56px",
                alignItems: "center",
                borderTop: "1px solid var(--border)",
                paddingTop: "56px",
              }}
            >
              {/* Left Column: Text description */}
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "12px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: "700",
                      letterSpacing: "0.05em",
                      backgroundColor: "var(--accent-light)",
                      color: "var(--text-secondary)",
                      padding: "4px 10px",
                      borderRadius: "4px",
                    }}
                  >
                    {sec.badge}
                  </span>
                  <IconArrowRight size={14} style={{ color: "var(--text-muted)" }} />
                  <span style={{ fontSize: "13px", fontWeight: "600", color: "var(--text-muted)" }}>
                    STEP {sec.step} OF 5
                  </span>
                </div>
                <h2
                  style={{
                    fontSize: isMobile ? "20px" : "24px",
                    fontWeight: "700",
                    letterSpacing: "-0.01em",
                    marginBottom: "16px",
                  }}
                >
                  {sec.title}
                </h2>
                <p
                  style={{
                    fontSize: "14.5px",
                    color: "var(--text-secondary)",
                    lineHeight: "1.75",
                    margin: 0,
                  }}
                >
                  {renderDescription(sec.description)}
                </p>
              </div>

              {/* Right Column: Clickable Image container */}
              <div
                onClick={() => setActiveImage(sec.img)}
                style={{
                  borderRadius: "12px",
                  overflow: "hidden",
                  border: "1px solid var(--border)",
                  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.04)",
                  backgroundColor: "var(--bg-secondary)",
                  cursor: "zoom-in",
                  position: "relative",
                }}
              >
                <img
                  src={sec.img}
                  alt={sec.title}
                  style={{
                    width: "100%",
                    display: "block",
                  }}
                />
                {/* Hover zoom message */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0,0,0,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: 0,
                    transition: "opacity 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = 0)}
                >
                  <div
                    style={{
                      backgroundColor: "#ffffff",
                      color: "#000000",
                      padding: "8px 14px",
                      borderRadius: "20px",
                      fontSize: "12px",
                      fontWeight: "600",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                    }}
                  >
                    <IconEye size={14} /> Click to zoom
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Support Footer banner */}
      <div
        style={{
          width: "100%",
          maxWidth: "1000px",
          marginTop: "80px",
          borderTop: "1px solid var(--border)",
          paddingTop: "32px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "24px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <IconHelpCircle size={18} style={{ color: "var(--text-muted)" }} />
          <span style={{ fontSize: "13.5px", color: "var(--text-secondary)" }}>
            Need help? Contact support at <strong>drtanvi@tuesdaywizards.com</strong>
          </span>
        </div>
        <span style={{ fontSize: "12px", color: "var(--text-muted)" }}>
          WizClone Automation v1.0.0
        </span>
      </div>

      {/* Image Modal Lightbox Viewer */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              backdropFilter: "blur(12px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 9999,
              cursor: "zoom-out",
              padding: isMobile ? "16px" : "32px",
            }}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              style={{
                position: "relative",
                maxWidth: "100%",
                maxHeight: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={activeImage}
                alt="Enlarged screenshot view"
                style={{
                  maxWidth: "95vw",
                  maxHeight: "85vh",
                  borderRadius: "12px",
                  boxShadow: "0 12px 48px rgba(0,0,0,0.5)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  objectFit: "contain",
                }}
              />
              <button
                onClick={() => setActiveImage(null)}
                style={{
                  position: "fixed",
                  top: "20px",
                  right: "20px",
                  background: "rgba(0, 0, 0, 0.6)",
                  border: "1px solid rgba(255, 255, 255, 0.25)",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",
                  cursor: "pointer",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
                  transition: "background 0.15s ease",
                  zIndex: 10000,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(0, 0, 0, 0.6)")}
              >
                <IconX size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
