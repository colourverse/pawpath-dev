import { useMemo, useState, type ReactNode } from "react";

type IconName =
  | "home"
  | "checklist"
  | "message"
  | "heart"
  | "settings"
  | "bell"
  | "arrow"
  | "camera"
  | "clock"
  | "check"
  | "leaf"
  | "family"
  | "paw"
  | "calendar"
  | "bowl"
  | "pin"
  | "card"
  | "send"
  | "menu";

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    home: <><path d="m3 10 9-7 9 7" /><path d="M5 9v11h14V9" /><path d="M9 20v-7h6v7" /></>,
    checklist: <><path d="M9 5h11M9 12h11M9 19h11" /><path d="m3 5 1 1 2-2M3 12l1 1 2-2M3 19l1 1 2-2" /></>,
    message: <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" />,
    heart: <path d="M20.8 4.7a5.5 5.5 0 0 0-7.8 0L12 5.8l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.4 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />,
    settings: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.6v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z" /></>,
    bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" /><path d="M10 21h4" /></>,
    arrow: <><path d="M5 12h14" /><path d="m14 7 5 5-5 5" /></>,
    camera: <><path d="M14.5 5 13 3h-2L9.5 5H5a2 2 0 0 0-2 2v11h18V7a2 2 0 0 0-2-2Z" /><circle cx="12" cy="12" r="3.5" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    leaf: <><path d="M20 4C10 4 5 9 5 16c7 0 12-5 15-12Z" /><path d="M4 20c3-6 7-9 12-12" /></>,
    family: <><circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2" /><path d="M3 20v-2a6 6 0 0 1 12 0v2M15 14a5 5 0 0 1 6 5v1" /></>,
    paw: <><circle cx="7" cy="8" r="2" /><circle cx="17" cy="8" r="2" /><circle cx="12" cy="5" r="2" /><path d="M7.5 16.5c0-2.5 2-5 4.5-5s4.5 2.5 4.5 5c0 2-1.5 3.5-4.5 3.5s-4.5-1.5-4.5-3.5Z" /></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18" /></>,
    bowl: <><path d="M4 10h16c0 6-3 9-8 9s-8-3-8-9Z" /><path d="M9 6c0-2 3-2 3-4M14 7c0-2 3-2 3-4" /></>,
    pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    card: <><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20M6 15h4" /></>,
    send: <><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></>,
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  };

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

const steps = [
  { id: 1, icon: "home" as IconName, title: "Your pet's new home", note: "Accommodation, setup & photos", action: "3 photos uploaded", done: true },
  { id: 2, icon: "family" as IconName, title: "Household members", note: "Tell us who Milo will live with", action: "Completed", done: true },
  { id: 3, icon: "paw" as IconName, title: "Other pets", note: "Share pets already in your home", action: "Completed", done: true },
  { id: 4, icon: "calendar" as IconName, title: "Your daily routine", note: "Time and availability for Milo", action: "Add details", done: false },
  { id: 5, icon: "bowl" as IconName, title: "Diet & supplies", note: "Review Willow's recommendations", action: "View list", done: false },
  { id: 6, icon: "pin" as IconName, title: "Choose a local vet", note: "Find an exotic vet near you", action: "2 nearby", done: false },
  { id: 7, icon: "card" as IconName, title: "Adoption fee", note: "Secure payment of $85", action: "Pay securely", done: false },
];

function NavItem({ icon, label, active = false, badge }: { icon: IconName; label: string; active?: boolean; badge?: string }) {
  return (
    <button className={`nav-item ${active ? "nav-active" : ""}`}>
      <Icon name={icon} size={19} />
      <span>{label}</span>
      {badge && <span className="nav-badge">{badge}</span>}
    </button>
  );
}

export default function App() {
  const [completed, setCompleted] = useState<number[]>([1, 2, 3]);
  const [selected, setSelected] = useState(4);
  const [notice, setNotice] = useState("");
  const progress = Math.round((completed.length / steps.length) * 100);
  const nextStep = useMemo(() => steps.find((step) => !completed.includes(step.id)), [completed]);

  function toggleStep(id: number) {
    setSelected(id);
    setCompleted((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  }

  function continueStep() {
    if (!nextStep) return;
    if (nextStep.id === 7) {
      setNotice("Payment is ready to review securely.");
      setSelected(7);
      return;
    }
    setCompleted((current) => [...current, nextStep.id]);
    setSelected(nextStep.id);
    setNotice(`${nextStep.title} marked complete.`);
  }

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <span className="brand-mark"><Icon name="paw" size={24} /></span>
          <span>PawPath</span>
        </div>

        <nav className="main-nav" aria-label="Main navigation">
          <NavItem icon="home" label="Overview" active />
          <NavItem icon="checklist" label="My checklist" />
          <NavItem icon="message" label="Messages" badge="2" />
          <NavItem icon="heart" label="Saved pets" />
        </nav>

        <div className="sidebar-bottom">
          <div className="support-card">
            <span className="support-icon"><Icon name="leaf" /></span>
            <strong>Need some help?</strong>
            <p>Our adoption team is here for you.</p>
            <button onClick={() => setNotice("A help request has been sent.")}>Get support</button>
          </div>
          <NavItem icon="settings" label="Settings" />
          <div className="user-mini">
            <span className="avatar">EM</span>
            <span><strong>Emily Morgan</strong><small>emily@example.com</small></span>
            <span className="more">•••</span>
          </div>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <button className="mobile-menu" aria-label="Open menu"><Icon name="menu" /></button>
          <div>
            <p className="eyebrow">MONDAY, MAY 26</p>
            <h1>Good morning, Emily</h1>
          </div>
          <div className="top-actions">
            <button className="icon-button" aria-label="Notifications">
              <Icon name="bell" />
              <span className="notification-dot" />
            </button>
            <button className="shelter-button">
              <span className="shelter-logo"><Icon name="leaf" size={17} /></span>
              <span><small>Your shelter</small><strong>Willow Rescue</strong></span>
            </button>
          </div>
        </header>

        {notice && (
          <button className="toast" onClick={() => setNotice("")}>
            <Icon name="check" size={17} />
            {notice}
          </button>
        )}

        <section className="hero">
          <div className="hero-copy">
            <span className="status-pill"><span /> ADOPTION IN PROGRESS</span>
            <h2>You're bringing Milo home</h2>
            <p>Complete your checklist so Willow Rescue can make sure you and Milo are set up for a happy start together.</p>
            <div className="hero-progress">
              <div className="progress-meta">
                <span>{completed.length} of {steps.length} steps complete</span>
                <strong>{progress}%</strong>
              </div>
              <div className="progress-track"><span style={{ width: `${progress}%` }} /></div>
            </div>
            <button className="primary-button" onClick={continueStep}>
              {nextStep ? "Continue checklist" : "Review application"}
              <Icon name="arrow" size={18} />
            </button>
          </div>
          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1555634819-ce681c6e258c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=900"
              alt="Milo, a grey and white rabbit"
            />
            <div className="pet-tag">
              <span><strong>Milo</strong><small>Mini Lop · 1 year</small></span>
              <span className="heart-chip"><Icon name="heart" size={17} /></span>
            </div>
          </div>
        </section>

        <div className="content-grid">
          <section className="checklist-card">
            <div className="section-heading">
              <div>
                <p className="eyebrow">YOUR ADOPTION PLAN</p>
                <h2>Ready for Milo?</h2>
              </div>
              <span className="step-count">{completed.length}/{steps.length} complete</span>
            </div>
            <div className="checklist">
              {steps.map((step) => {
                const isDone = completed.includes(step.id);
                return (
                  <button
                    className={`step-row ${selected === step.id ? "step-selected" : ""}`}
                    key={step.id}
                    onClick={() => toggleStep(step.id)}
                  >
                    <span className={`step-check ${isDone ? "step-done" : ""}`}>
                      {isDone ? <Icon name="check" size={15} /> : step.id}
                    </span>
                    <span className="step-icon"><Icon name={step.icon} /></span>
                    <span className="step-copy">
                      <strong>{step.title}</strong>
                      <small>{step.note}</small>
                    </span>
                    <span className={`step-action ${isDone ? "action-done" : ""}`}>
                      {step.id === 1 && <Icon name="camera" size={15} />}
                      {step.action}
                    </span>
                    <Icon name="arrow" size={17} />
                  </button>
                );
              })}
            </div>
          </section>

          <aside className="right-column">
            <section className="message-card">
              <div className="message-head">
                <span className="shelter-avatar"><Icon name="leaf" /></span>
                <span><small>YOUR ADOPTION COORDINATOR</small><strong>Sophie at Willow Rescue</strong></span>
                <span className="online-dot" />
              </div>
              <blockquote>
                “Hi Emily! Milo's doing great. Your setup photos look perfect — thank you for adding the hideaway.”
              </blockquote>
              <div className="message-time">Today, 9:42 AM</div>
              <button className="reply-button" onClick={() => setNotice("Message thread opened.")}>
                Reply to Sophie <Icon name="send" size={16} />
              </button>
            </section>

            <section className="next-card">
              <div className="next-title">
                <span className="clock-icon"><Icon name="clock" size={18} /></span>
                <span><small>UP NEXT</small><strong>Home review call</strong></span>
              </div>
              <p>Wednesday, May 28 · 4:30 PM</p>
              <div className="call-meta">
                <span className="avatar-pair"><span>EM</span><span>SW</span></span>
                <span>15 min video call with Sophie</span>
              </div>
              <button onClick={() => setNotice("Calendar details opened.")}>View calendar details</button>
            </section>

            <section className="tip-card">
              <Icon name="leaf" size={19} />
              <div><strong>Milo's settling-in tip</strong><p>Keep his first few days quiet and let him explore at his own pace.</p></div>
            </section>
          </aside>
        </div>
      </main>
    </div>
  );
}
