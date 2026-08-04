import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IconSettings,
  IconCopy,
  IconPlayerPlay,
  IconTemplate,
  IconListDetails,
  IconMail,
  IconSparkles,
  IconShieldCheck,
  IconX,
  IconPuzzle,
} from "@tabler/icons-react";
import { useWindowWidth } from "../hooks/useWindowWidth";

// Import images
import createTemplateWithAiImg from "../assets/how-to-use/create-template-with-ai.png";
import createTemplateImg from "../assets/how-to-use/create-template.png";
import saveSettingImg from "../assets/how-to-use/save-setting.png";
import selectBoardImg from "../assets/how-to-use/select-board.png";
import showActivityImg from "../assets/how-to-use/show-activity.png";
import wizcloneClickImg from "../assets/how-to-use/wizclone-click.png";
import { WizLogo } from "../utils/icons";

const renderDescription = (text) => {
  if (!text) return null;
  return text.split(/(\*\*.*?\*\*)/).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} style={{ fontWeight: 600, color: "var(--text-primary)" }}>
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
};

const scrollToId = (id) => (e) => {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function HowToUse() {
  const width = useWindowWidth();
  const isMobile = width > 0 && width < 768;
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setActiveImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);

    // Add CSS fallback class to body
    document.body.classList.add("hide-chat-widget");

    const hideTawk = () => {
      if (window.Tawk_API && typeof window.Tawk_API.hideWidget === "function") {
        window.Tawk_API.hideWidget();
        return true;
      }
      return false;
    };

    // Try immediately and set onLoad handler
    hideTawk();
    window.Tawk_API = window.Tawk_API || {};
    const oldOnLoad = window.Tawk_API.onLoad;
    window.Tawk_API.onLoad = function () {
      if (typeof oldOnLoad === "function") oldOnLoad();
      hideTawk();
    };

    // Backup polling check to handle asynchronous initialization
    const interval = setInterval(hideTawk, 200);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("hide-chat-widget");
      clearInterval(interval);
      if (window.Tawk_API && typeof window.Tawk_API.showWidget === "function") {
        window.Tawk_API.showWidget();
      }
    };
  }, []);

  const toc = [
    {
      heading: "Introduction",
      links: [
        { label: "What is WizClone?", id: "what-is-wizclone" },
        { label: "Use cases", id: "use-cases" },
        { label: "Features", id: "features" },
      ],
    },
    {
      heading: "Getting started",
      columns: [
        {
          title: "Installation",
          links: [{ label: "Prerequisites & app installation", id: "prerequisites" }],
        },
        {
          title: "Setup",
          links: [
            { label: "Launch WizClone in your sidebar", id: "step-1" },
            { label: "Link & configure template boards", id: "step-2" },
            { label: "Build subitem templates", id: "step-3" },
            { label: "Enable the automation engine", id: "step-4" },
            { label: "Monitor the activity log", id: "step-5" },
          ],
        },
      ],
    },
  ];

  const sections = [
    {
      step: "01",
      id: "step-1",
      label: "Initial setup",
      title: "Launch WizClone in your workspace sidebar",
      icon: IconPlayerPlay,
      description:
        "WizClone operates as a workspace application rather than being tied to a single board. This allows you to define templates globally and apply them across multiple boards inside your workspace. To begin, click on the **WizClone logo** in the left sidebar menu under the Workspace apps list. If it's your first time, you'll see a simple login screen that connects your monday.com profile with our automated workflow handler.",
      img: wizcloneClickImg,
    },
    {
      step: "02",
      id: "step-2",
      label: "Settings",
      title: "Link and configure template boards",
      icon: IconSettings,
      description:
        "WizClone uses standard monday.com boards as template libraries. Navigate to the **Settings** tab from the app's sidebar. Under the **Template Board** section, click on the dropdown input. You will see a list of boards. Select the target boards that contain (or will contain) your master tasks and subitem checklists. WizClone automatically filters out subitem boards to ensure you can only select parent boards.",
      img: selectBoardImg,
    },
    {
      step: "03",
      id: "step-3",
      label: "Template builder",
      title: "Build subitem templates, manually or with AI",
      icon: IconTemplate,
      isSpecial: true,
      description:
        "The Template Builder is where you design the checklist templates that will be automatically copied. You can create lists step-by-step manually, or use our smart natural-language AI prompt. Type a prompt like 'client onboarding tasks' and click Generate. Our system will immediately create a comprehensive set of tasks, complete with custom parent names and subitems, which you can edit at any time.",
      options: [
        {
          title: "Manual builder",
          desc: "Create template items and define nested subitem structures using our clean layout directly in the builder.",
          img: createTemplateImg,
        },
        {
          title: "AI assistant",
          desc: "Instruct the AI helper to write and structure a template dynamically based on your project description.",
          img: createTemplateWithAiImg,
          badge: true,
        },
      ],
    },
    {
      step: "04",
      id: "step-4",
      label: "Activation",
      title: "Enable the global automation engine",
      icon: IconCopy,
      description:
        "To start automating, enable the toggle labeled **'Enable WizClone automation for this workspace'**. Underneath, choose your AI Matching Sensitivity (Strict, Balanced, or Loose) which controls how closely the name of a new item must match your template. Finally, click the **Save Settings** button at the bottom of the page to save your configurations and register the webhook triggers on your selected boards.",
      img: saveSettingImg,
    },
    {
      step: "05",
      id: "step-5",
      label: "Auditing",
      title: "Monitor real-time syncs in the activity log",
      icon: IconListDetails,
      description:
        "Every time a new item is created in your workspace, WizClone's automated background script runs. Head over to the **Activity Log** tab to see exactly what happened. The activity log provides an audit trail: it details the triggering item name, matched template item, the computed AI confidence score, the number of cloned subitems, and execution statuses (Success, Skipped, or Errors).",
      img: showActivityImg,
    },
  ];

  const CONTENT_WIDTH = 760;
  const dividerStyle = { border: 0, borderTop: "1px solid var(--border)", margin: 0 };
  const eyebrowStyle = {
    fontSize: "12px",
    fontWeight: 600,
    color: "var(--text-muted)",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    marginBottom: "8px",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "var(--bg-primary)",
        color: "var(--text-primary)",
        fontFamily:
          "ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
        overflowY: "auto",
        padding: isMobile ? "48px 20px 48px" : "72px 40px 64px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Header */}
      <div style={{ width: "100%", maxWidth: CONTENT_WIDTH, marginBottom: "40px" }}>
        <div
          style={{
            width: "44px",
            height: "44px",
            // borderRadius: "10px",
            // backgroundColor: "var(--bg-secondary)",
            // border: "1px solid var(--border)",
            // display: "flex",
            // alignItems: "center",
            // justifyContent: "center",
            // marginBottom: "20px",
          }}
        >
          <WizLogo />
        </div>

        <h1
          style={{
            fontSize: isMobile ? "30px" : "38px",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            lineHeight: 1.2,
            margin: "0 0 12px 0",
            color: "var(--text-primary)",
          }}
        >
          WizClone Help Center
        </h1>
        <p
          style={{
            fontSize: "15.5px",
            color: "var(--text-secondary)",
            lineHeight: 1.6,
            margin: "0 0 16px 0",
            maxWidth: "560px",
          }}
        >
          Everything you need to install, configure, and automate subitem checklists across your
          workspace.
        </p>
        <a
          href="mailto:drtanvi@tuesdaywizards.com"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            fontSize: "13.5px",
            color: "var(--text-secondary)",
            textDecoration: "none",
          }}
        >
          <IconMail size={15} />
          Can&apos;t find what you&apos;re looking for? Contact{" "}
          <span style={{ color: "var(--accent)" }}>drtanvi@tuesdaywizards.com</span>
        </a>
      </div>

      <hr style={{ ...dividerStyle, width: "100%", maxWidth: CONTENT_WIDTH, marginBottom: "40px" }} />

      {/* Table of contents */}
      <div style={{ width: "100%", maxWidth: CONTENT_WIDTH, marginBottom: "64px" }}>
        {toc.map((group, gi) => (
          <div key={group.heading} style={{ marginBottom: gi === toc.length - 1 ? 0 : "36px" }}>
            <div style={eyebrowStyle}>{group.heading}</div>

            {group.links && (
              <div style={{ display: "flex", flexDirection: "column" }}>
                {group.links.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={scrollToId(link.id)}
                    style={{
                      fontSize: "14.5px",
                      color: "var(--text-primary)",
                      textDecoration: "none",
                      padding: "9px 10px",
                      margin: "0 -10px",
                      borderRadius: "6px",
                      transition: "background-color 0.12s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--bg-secondary)")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}

            {group.columns && (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                  gap: isMobile ? "8px" : "32px",
                }}
              >
                {group.columns.map((col) => (
                  <div key={col.title}>
                    <div
                      style={{
                        fontSize: "13px",
                        fontWeight: 600,
                        color: "var(--text-muted)",
                        margin: "4px 0 4px 10px",
                      }}
                    >
                      {col.title}
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      {col.links.map((link) => (
                        <a
                          key={link.id}
                          href={`#${link.id}`}
                          onClick={scrollToId(link.id)}
                          style={{
                            fontSize: "14.5px",
                            color: "var(--text-primary)",
                            textDecoration: "none",
                            padding: "9px 10px",
                            margin: "0 -10px",
                            borderRadius: "6px",
                            transition: "background-color 0.12s ease",
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--bg-secondary)")}
                          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Introduction */}
      <div id="what-is-wizclone" style={{ width: "100%", maxWidth: CONTENT_WIDTH, marginBottom: "64px" }}>
        <h2 style={{ fontSize: "21px", fontWeight: 700, letterSpacing: "-0.01em", margin: "0 0 12px 0" }}>
          What is WizClone?
        </h2>
        <p style={{ fontSize: "15px", color: "var(--text-secondary)", lineHeight: 1.7, margin: "0 0 36px 0" }}>
          WizClone is a monday.com workspace app that watches for new items across the boards you
          choose and automatically clones a matching subitem checklist onto them. Instead of
          manually rebuilding the same set of subitems every time a new task, client, or project
          is created, WizClone matches the item's name against your saved templates and clones the
          right checklist for you in seconds.
        </p>

        <h2
          id="use-cases"
          style={{ fontSize: "21px", fontWeight: 700, letterSpacing: "-0.01em", margin: "0 0 12px 0", scrollMarginTop: "24px" }}
        >
          Use cases
        </h2>
        <p style={{ fontSize: "15px", color: "var(--text-secondary)", lineHeight: 1.7, margin: "0 0 36px 0" }}>
          Teams use WizClone to standardize recurring workflows such as client onboarding
          checklists, new-hire task lists, project kick-off steps, and QA or review checklists, so
          every new item starts with the same consistent subitem structure without any manual
          copy-pasting.
        </p>

        <h2
          id="features"
          style={{ fontSize: "21px", fontWeight: 700, letterSpacing: "-0.01em", margin: "0 0 12px 0", scrollMarginTop: "24px" }}
        >
          Features
        </h2>
        <ul
          style={{
            margin: 0,
            padding: 0,
            listStyle: "none",
            fontSize: "15px",
            color: "var(--text-secondary)",
            lineHeight: 1.7,
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          {[
            "Workspace-wide templates that apply across multiple boards at once.",
            "A manual template builder plus an AI assistant that generates checklists from a plain-language prompt.",
            "Adjustable AI matching sensitivity (Strict, Balanced, or Loose) to control how closely a new item's name must match a template.",
            "A real-time Activity Log that audits every match, clone, and error.",
          ].map((item, i) => (
            <li key={i} style={{ display: "flex", gap: "10px" }}>
              <span style={{ color: "var(--text-muted)" }}>—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Prerequisites callout */}
      <div
        id="prerequisites"
        style={{
          width: "100%",
          maxWidth: CONTENT_WIDTH,
          backgroundColor: "var(--bg-secondary)",
          borderRadius: "10px",
          padding: isMobile ? "18px" : "24px 28px",
          marginBottom: "64px",
          scrollMarginTop: "24px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
          <IconShieldCheck size={17} style={{ color: "var(--text-primary)" }} strokeWidth={1.75} />
          <h3 style={{ fontSize: "15px", fontWeight: 700, margin: 0, color: "var(--text-primary)" }}>
            Prerequisites &amp; app installation
          </h3>
        </div>
        <ul
          style={{
            margin: 0,
            padding: 0,
            listStyle: "none",
            fontSize: "14px",
            color: "var(--text-secondary)",
            lineHeight: 1.7,
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <li>
            <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>monday.com account</strong> — an
            active account with admin permissions (or app installation permissions) in your target
            workspace.
          </li>
          <li>
            <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>App authorization</strong> — when
            adding WizClone, authorize it to read board structures and create subitems on your
            behalf.
          </li>
          <li>
            <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>Template board</strong> — at least
            one board populated with the items and subitem structures you want to use as
            templates.
          </li>
        </ul>
      </div>

      {/* Video */}
      <div style={{ width: "100%", maxWidth: CONTENT_WIDTH, marginBottom: "72px" }}>
        <div
          style={{
            position: "relative",
            paddingBottom: "56.25%",
            height: 0,
            overflow: "hidden",
            borderRadius: "10px",
            border: "1px solid var(--border)",
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/1rFzO1f4LGY"
            title="WizClone Video Walkthrough"
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>

      {/* Steps */}
      <div style={{ width: "100%", maxWidth: CONTENT_WIDTH, display: "flex", flexDirection: "column" }}>
        {sections.map((sec) => {
          if (sec.isSpecial) {
            return (
              <section key={sec.step} id={sec.id} style={{ scrollMarginTop: "24px" }}>
                <hr style={{ ...dividerStyle, marginBottom: "40px" }} />
                <div style={eyebrowStyle}>
                  {sec.step} &middot; {sec.label}
                </div>
                <h2
                  style={{
                    fontSize: isMobile ? "20px" : "23px",
                    fontWeight: 700,
                    letterSpacing: "-0.01em",
                    margin: "0 0 12px 0",
                  }}
                >
                  {sec.title}
                </h2>
                <p style={{ fontSize: "15px", color: "var(--text-secondary)", lineHeight: 1.7, margin: "0 0 28px 0" }}>
                  {renderDescription(sec.description)}
                </p>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                    gap: "20px",
                    marginBottom: "56px",
                  }}
                >
                  {sec.options.map((opt, i) => (
                    <div key={i}>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "6px" }}>
                        {opt.badge && <IconSparkles size={14} style={{ color: "var(--text-muted)" }} />}
                        <h4 style={{ fontSize: "14.5px", fontWeight: 600, margin: 0, color: "var(--text-primary)" }}>
                          {opt.title}
                        </h4>
                      </div>
                      <p style={{ fontSize: "13.5px", color: "var(--text-secondary)", lineHeight: 1.6, margin: "0 0 12px 0" }}>
                        {opt.desc}
                      </p>
                      <div
                        onClick={() => setActiveImage(opt.img)}
                        style={{
                          borderRadius: "8px",
                          overflow: "hidden",
                          border: "1px solid var(--border)",
                          cursor: "zoom-in",
                        }}
                      >
                        <img src={opt.img} alt={opt.title} style={{ width: "100%", display: "block" }} />
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          }

          return (
            <section key={sec.step} id={sec.id} style={{ scrollMarginTop: "24px" }}>
              <hr style={{ ...dividerStyle, marginBottom: "40px" }} />
              <div style={eyebrowStyle}>
                {sec.step} &middot; {sec.label}
              </div>
              <h2
                style={{
                  fontSize: isMobile ? "20px" : "23px",
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                  margin: "0 0 12px 0",
                }}
              >
                {sec.title}
              </h2>
              <p style={{ fontSize: "15px", color: "var(--text-secondary)", lineHeight: 1.7, margin: "0 0 24px 0" }}>
                {renderDescription(sec.description)}
              </p>
              <div
                onClick={() => setActiveImage(sec.img)}
                style={{
                  borderRadius: "10px",
                  overflow: "hidden",
                  border: "1px solid var(--border)",
                  cursor: "zoom-in",
                  marginBottom: "56px",
                }}
              >
                <img src={sec.img} alt={sec.title} style={{ width: "100%", display: "block" }} />
              </div>
            </section>
          );
        })}
      </div>

      {/* Footer */}
      <div
        style={{
          width: "100%",
          maxWidth: CONTENT_WIDTH,
          marginTop: "16px",
          paddingTop: "32px",
          borderTop: "1px solid var(--border)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <a
          href="mailto:drtanvi@tuesdaywizards.com"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            fontSize: "13.5px",
            color: "var(--text-secondary)",
            textDecoration: "none",
          }}
        >
          <IconMail size={14} />
          drtanvi@tuesdaywizards.com
        </a>
        <span style={{ fontSize: "12.5px", color: "var(--text-muted)" }}>WizClone Automation v1.0.0</span>
      </div>

      {/* Lightbox */}
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
              backgroundColor: "rgba(0, 0, 0, 0.75)",
              backdropFilter: "blur(8px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 9999,
              cursor: "zoom-out",
              padding: isMobile ? "16px" : "32px",
            }}
          >
            <motion.div
              initial={{ scale: 0.97 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.97 }}
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
                  borderRadius: "10px",
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
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  borderRadius: "50%",
                  width: "36px",
                  height: "36px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",
                  cursor: "pointer",
                  zIndex: 10000,
                }}
              >
                <IconX size={18} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}