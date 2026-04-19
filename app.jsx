// === Icons.jsx ===
// Shared icon set (Lucide-style, 1.5px stroke, outline).
// Global — attached to window so all JSX files can reference.
const Icon = ({ d, size = 20, circle, extras }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
       stroke="currentColor" strokeWidth="1.5"
       strokeLinecap="round" strokeLinejoin="round">
    {circle && <circle cx={circle[0]} cy={circle[1]} r={circle[2]} />}
    {d && <path d={d} />}
    {extras}
  </svg>
);

const Icons = {
  Mark: ({ size = 28 }) => (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none"
         stroke="currentColor" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="100" cy="100" r="82" fill="none"/>
      <path d="M100 48 L130 108 L70 108 Z" strokeWidth="10"/>
      <path d="M90 96 L110 96" strokeWidth="8"/>
      <path d="M70 108 L70 158" strokeWidth="10"/>
      <path d="M100 108 L100 158" strokeWidth="10"/>
      <path d="M130 108 L130 158" strokeWidth="10"/>
      <path d="M70 118 L130 118" strokeWidth="6"/>
    </svg>
  ),
  Home:     () => <Icon d="M4 11 L12 4 L20 11 V20 H14 V14 H10 V20 H4 Z"/>,
  Chat:     () => <Icon d="M4 5 H20 V17 H13 L8 21 V17 H4 Z"/>,
  Bolt:     () => <Icon d="M13 3 L5 13 H11 L10 21 L18 11 H12 L13 3 Z"/>,
  Ads:      () => <Icon d="M4 9 V15 H8 L14 19 V5 L8 9 Z M17 8 C18.5 9 18.5 15 17 16"/>,
  Wallet:   () => <Icon d="M3 7 H19 V19 H3 Z M3 7 V5 H17 V7 M16 13 H19"/>,
  Settings: () => <Icon circle={[12,12,3]} d="M12 2 V5 M12 19 V22 M4 12 H2 M22 12 H20 M5 5 L7 7 M17 17 L19 19 M5 19 L7 17 M17 7 L19 5"/>,
  Search:   () => <Icon circle={[11,11,7]} d="M21 21 L16 16"/>,
  Plus:     () => <Icon d="M12 4 V20 M4 12 H20"/>,
  ArrowRight: () => <Icon d="M5 12 H19 M13 6 L19 12 L13 18"/>,
  ArrowUpRight: () => <Icon d="M7 17 L17 7 M9 7 H17 V15"/>,
  Pause:    () => <Icon d="M9 5 V19 M15 5 V19"/>,
  Play:     () => <Icon d="M7 5 L19 12 L7 19 Z"/>,
  Check:    () => <Icon d="M5 12 L10 17 L20 6"/>,
  Dot:      ({ color = 'currentColor' }) => (
    <svg width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="3.5" fill={color}/></svg>
  ),
  Send:     () => <Icon d="M4 12 L21 4 L15 21 L12 13 L4 12 Z"/>,
  Sparkle:  () => <Icon d="M12 4 L13.2 10.8 L20 12 L13.2 13.2 L12 20 L10.8 13.2 L4 12 L10.8 10.8 Z"/>,
};

window.Icon = Icon;
window.Icons = Icons;


// === Primitives.jsx ===
const Button = ({ variant = 'primary', children, onClick, icon, disabled, type = 'button' }) => {
  const base = {
    fontFamily: 'Inter, "IBM Plex Sans Thai Looped", system-ui, sans-serif',
    fontSize: 14, fontWeight: 500, lineHeight: 1.2,
    padding: '10px 18px', borderRadius: 4,
    border: '1px solid transparent', cursor: disabled ? 'not-allowed' : 'pointer',
    display: 'inline-flex', alignItems: 'center', gap: 8,
    transition: 'opacity 220ms cubic-bezier(.22,.61,.36,1), background 220ms cubic-bezier(.22,.61,.36,1)',
    opacity: disabled ? 0.35 : 1,
  };
  const variants = {
    primary: { background: '#0A0A09', color: '#FAF9F5' },
    ghost:   { background: 'transparent', color: '#0A0A09', borderColor: 'rgba(10,10,9,.10)' },
    text:    { background: 'transparent', color: '#0A0A09', padding: '6px 0', borderRadius: 0 },
  };
  const [hover, setHover] = React.useState(false);
  const hoverStyle =
    variant === 'primary' ? { opacity: 0.88 } :
    variant === 'ghost'   ? { background: '#EAEAE6' } :
                            { opacity: 0.85 };
  return (
    <button type={type} disabled={disabled} onClick={onClick}
            onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
            style={{ ...base, ...variants[variant], ...(hover && !disabled ? hoverStyle : {}) }}>
      {icon}{children}
    </button>
  );
};

const Input = ({ value, onChange, placeholder, label, hint, focused, type = 'text' }) => {
  const [f, setF] = React.useState(!!focused);
  return (
    <div>
      {label && <div style={{ fontSize: 11, color: '#8A8880', letterSpacing: '.02em', marginBottom: 6 }}>{label}</div>}
      <input type={type} value={value ?? ''} onChange={onChange} placeholder={placeholder}
             onFocus={() => setF(true)} onBlur={() => setF(false)}
             style={{
               fontFamily: 'Inter, "IBM Plex Sans Thai Looped", sans-serif',
               fontSize: 14, padding: '10px 12px', width: '100%', boxSizing: 'border-box',
               background: '#FAF9F5', color: '#0A0A09',
               border: `1px solid ${f ? '#3A3A38' : 'rgba(10,10,9,.10)'}`,
               borderRadius: 4, outline: 'none',
               boxShadow: f ? '0 0 0 3px rgba(58,58,56,.08)' : 'none',
               transition: 'border-color 220ms, box-shadow 220ms',
             }}/>
      {hint && <div style={{ fontSize: 11, color: '#8A8880', marginTop: 6 }}>{hint}</div>}
    </div>
  );
};

const Tag = ({ tone = 'neutral', children, dot }) => {
  const dots = { live: '#3A3A38', paused: '#B4553A', draft: '#8A8880', info: '#8A3E2A' };
  return (
    <span style={{
      fontSize: 11, letterSpacing: '.02em', padding: '3px 10px', borderRadius: 999,
      border: '1px solid rgba(10,10,9,.10)', color: '#3A3A38', background: 'transparent',
      display: 'inline-flex', alignItems: 'center', gap: 6,
    }}>
      {dot && <span style={{ width: 6, height: 6, borderRadius: 999, background: dots[dot] || '#8A8880' }}/>}
      {children}
    </span>
  );
};

const Divider = ({ margin = 0 }) => (
  <hr style={{ border: 0, borderTop: '1px solid rgba(10,10,9,.10)', margin }}/>
);

window.Button = Button;
window.Input = Input;
window.Tag = Tag;
window.Divider = Divider;


// === Sidebar.jsx ===
const Sidebar = ({ current, onNav }) => {
  const items = [
    { id: 'dashboard', label: 'Dashboard', thai: 'แดชบอร์ด', icon: <Icons.Home/> },
    { id: 'agent',     label: 'Agent',     thai: 'เอเจนต์',   icon: <Icons.Sparkle/> },
    { id: 'campaigns', label: 'Campaigns', thai: 'แคมเปญ',    icon: <Icons.Ads/> },
    { id: 'workflows', label: 'Workflows', thai: 'เวิร์กโฟลว์', icon: <Icons.Bolt/> },
    { id: 'finance',   label: 'Finance',   thai: 'การเงิน',    icon: <Icons.Wallet/> },
    { id: 'settings',  label: 'Settings',  thai: 'ตั้งค่า',     icon: <Icons.Settings/> },
  ];
  return (
    <aside style={{
      width: 232, background: '#F3F1EB', borderRight: '1px solid rgba(10,10,9,.06)',
      display: 'flex', flexDirection: 'column', padding: '20px 14px', boxSizing: 'border-box',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '4px 6px 20px' }}>
        <div style={{ color: '#0A0A09' }}><Icons.Mark size={26}/></div>
        <div style={{ fontFamily: "'IBM Plex Serif', serif", fontSize: 20, color: '#0A0A09', letterSpacing: '-0.01em' }}>
          O-Agent
        </div>
      </div>

      <div style={{
        background: 'rgba(250,249,245,.7)', borderRadius: 6, padding: '10px 12px',
        boxShadow: '0 1px 2px rgba(10,10,9,.04)', marginBottom: 16,
      }}>
        <div style={{ fontSize: 10, letterSpacing: '.08em', textTransform: 'uppercase', color: '#8A8880' }}>
          Workspace
        </div>
        <div style={{ fontFamily: "'IBM Plex Serif', serif", fontSize: 15, color: '#0A0A09', marginTop: 3 }}>
          Maison Siam
        </div>
        <div style={{ fontSize: 11, color: '#4A4844', marginTop: 2 }}>3 shops · 2 ad accounts</div>
      </div>

      <nav style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {items.map(it => {
          const active = current === it.id;
          return (
            <button key={it.id} onClick={() => onNav(it.id)} style={{
              display: 'grid', gridTemplateColumns: '20px 1fr auto', alignItems: 'center', gap: 10,
              padding: '8px 10px', borderRadius: 4, border: 0, cursor: 'pointer', textAlign: 'left',
              background: active ? 'rgba(10,10,9,.06)' : 'transparent',
              color: active ? '#0A0A09' : '#4A4844',
              fontSize: 13, fontWeight: active ? 500 : 400,
              transition: 'background 220ms cubic-bezier(.22,.61,.36,1)',
            }}>
              <span style={{ display: 'inline-flex' }}>{it.icon}</span>
              <span>{it.label}</span>
              <span style={{ fontSize: 11, color: '#8A8880', fontFamily: "'IBM Plex Sans Thai Looped', sans-serif" }}>
                {it.thai}
              </span>
            </button>
          );
        })}
      </nav>

      <div style={{ marginTop: 'auto', paddingTop: 16, borderTop: '1px solid rgba(10,10,9,.08)', fontSize: 11, color: '#8A8880' }}>
        <div>Niwat T.</div>
        <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 10 }}>v0.42 · th-TH</div>
      </div>
    </aside>
  );
};

const TopBar = ({ title, subtitle }) => (
  <header style={{
    display: 'flex', alignItems: 'center', gap: 16, padding: '18px 32px',
    borderBottom: '1px solid rgba(10,10,9,.08)', background: 'rgba(250,249,245,.85)',
    backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
    position: 'sticky', top: 0, zIndex: 10,
  }}>
    <div style={{ flex: 1 }}>
      <div style={{ fontSize: 10, letterSpacing: '.08em', textTransform: 'uppercase', color: '#8A8880' }}>
        {subtitle}
      </div>
      <div style={{ fontFamily: "'IBM Plex Serif', serif", fontSize: 24, color: '#0A0A09', letterSpacing: '-0.01em', marginTop: 2 }}>
        {title}
      </div>
    </div>
    <div style={{
      display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', width: 280,
      border: '1px solid rgba(10,10,9,.10)', borderRadius: 4, color: '#8A8880',
      background: 'rgba(255,255,255,.4)',
    }}>
      <Icons.Search/>
      <span style={{ fontSize: 13 }}>Search orders, SKUs, campaigns</span>
      <span style={{ marginLeft: 'auto', fontFamily: 'IBM Plex Mono, monospace', fontSize: 10,
                     border: '1px solid rgba(10,10,9,.10)', padding: '1px 5px', borderRadius: 3 }}>⌘K</span>
    </div>
    <Button variant="primary" icon={<Icons.Plus/>}>New workflow</Button>
  </header>
);

window.Sidebar = Sidebar;
window.TopBar = TopBar;


// === Dashboard.jsx ===
const KpiCard = ({ eyebrow, value, unit, delta, deltaDir = 'up', sub }) => (
  <div style={{
    background: 'rgba(250,249,245,.85)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
    borderRadius: 6, padding: '18px 20px',
    boxShadow: '0 2px 6px rgba(10,10,9,.05), 0 1px 2px rgba(10,10,9,.04)',
  }}>
    <div style={{ fontSize: 10, letterSpacing: '.08em', textTransform: 'uppercase', color: '#8A8880' }}>{eyebrow}</div>
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginTop: 8 }}>
      <span style={{
        fontFamily: 'IBM Plex Mono, monospace', fontVariantNumeric: 'tabular-nums',
        fontSize: 30, color: '#0A0A09', letterSpacing: '-0.01em', fontWeight: 500,
      }}>{value}</span>
      {unit && <span style={{ fontSize: 13, color: '#8A8880' }}>{unit}</span>}
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 6 }}>
      <span style={{ fontSize: 12, color: '#4A4844' }}>{sub}</span>
      {delta && (
        <span style={{
          fontFamily: 'IBM Plex Mono, monospace', fontSize: 11,
          color: deltaDir === 'up' ? '#3A3A38' : '#B4553A',
        }}>{deltaDir === 'up' ? '▲' : '▼'} {delta}</span>
      )}
    </div>
  </div>
);

const WorkflowRow = ({ name, thai, platform, status, lastAction, lastRun, onToggle }) => {
  const dotColor = status === 'live' ? '#3A3A38' : status === 'paused' ? '#B4553A' : '#8A8880';
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: '10px 2fr 1fr 2fr 100px 70px',
      gap: 16, alignItems: 'center', padding: '14px 20px',
      borderBottom: '1px solid rgba(10,10,9,.08)',
    }}>
      <span style={{ width: 8, height: 8, borderRadius: 999, background: dotColor }}/>
      <div>
        <div style={{ fontSize: 14, color: '#0A0A09' }}>{name}</div>
        <div style={{ fontFamily: "'IBM Plex Sans Thai Looped', sans-serif", fontSize: 12, color: '#8A8880', marginTop: 1 }}>{thai}</div>
      </div>
      <Tag dot="info">{platform}</Tag>
      <div style={{ fontSize: 12, color: '#4A4844' }}>{lastAction}</div>
      <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 11, color: '#8A8880' }}>{lastRun}</div>
      <button onClick={onToggle} style={{
        border: '1px solid rgba(10,10,9,.10)', background: 'transparent', borderRadius: 4,
        padding: '5px 8px', fontSize: 11, color: '#3A3A38', cursor: 'pointer',
        display: 'inline-flex', alignItems: 'center', gap: 4,
      }}>
        {status === 'paused' ? <><Icons.Play/> Run</> : <><Icons.Pause/> Pause</>}
      </button>
    </div>
  );
};

window.KpiCard = KpiCard;
window.WorkflowRow = WorkflowRow;


// === Agent.jsx ===
const AgentMessage = ({ from, children, tool }) => {
  const isAgent = from === 'agent';
  return (
    <div style={{
      display: 'flex', flexDirection: 'column',
      alignItems: isAgent ? 'flex-start' : 'flex-end', marginBottom: 18,
    }}>
      <div style={{
        fontSize: 10, letterSpacing: '.08em', textTransform: 'uppercase',
        color: '#8A8880', marginBottom: 4,
      }}>
        {isAgent ? 'Agent' : 'You'}
      </div>
      <div style={{
        maxWidth: 560, padding: '12px 16px', borderRadius: 6, fontSize: 14, lineHeight: 1.6,
        color: '#0A0A09',
        background: isAgent ? 'rgba(250,249,245,.85)' : '#EAEAE6',
        boxShadow: isAgent ? '0 2px 6px rgba(10,10,9,.05)' : 'none',
      }}>
        {children}
      </div>
      {tool && (
        <div style={{
          maxWidth: 560, marginTop: 8, padding: '10px 14px',
          fontFamily: 'IBM Plex Mono, monospace', fontSize: 11, color: '#3A3A38',
          background: '#F3F1EB', border: '1px solid rgba(10,10,9,.08)', borderRadius: 6,
        }}>
          <div style={{ color: '#8A8880', marginBottom: 4 }}>› tool call</div>
          {tool}
        </div>
      )}
    </div>
  );
};

const AgentComposer = ({ onSend }) => {
  const [v, setV] = React.useState('');
  const submit = () => { if (v.trim()) { onSend(v); setV(''); } };
  return (
    <div style={{
      padding: 16, borderTop: '1px solid rgba(10,10,9,.08)',
      background: 'rgba(250,249,245,.85)', backdropFilter: 'blur(12px)',
    }}>
      <div style={{
        display: 'flex', gap: 8, alignItems: 'flex-end',
        background: '#FAF9F5', border: '1px solid rgba(10,10,9,.10)',
        borderRadius: 6, padding: '10px 12px',
      }}>
        <textarea value={v} onChange={e => setV(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); submit(); } }}
          placeholder="Tell the agent what to do · บอก agent ว่าอยากให้ทำอะไร"
          rows={2} style={{
            flex: 1, border: 0, outline: 'none', resize: 'none', background: 'transparent',
            fontFamily: 'Inter, "IBM Plex Sans Thai Looped", sans-serif',
            fontSize: 14, lineHeight: 1.5, color: '#0A0A09',
          }}/>
        <Button variant="primary" icon={<Icons.Send/>} onClick={submit}>Send</Button>
      </div>
      <div style={{ fontSize: 11, color: '#8A8880', marginTop: 8 }}>
        Agent will ask for confirmation before writing to any marketplace API.
      </div>
    </div>
  );
};

window.AgentMessage = AgentMessage;
window.AgentComposer = AgentComposer;


// === Campaigns.jsx ===
const CampaignTable = ({ rows, onToggle }) => {
  const head = [
    { k: 'status', w: '60px', t: '' },
    { k: 'name',   w: '2fr',   t: 'Campaign' },
    { k: 'plat',   w: '100px', t: 'Platform' },
    { k: 'spend',  w: '1fr',   t: 'Spend',  num: true },
    { k: 'rev',    w: '1fr',   t: 'Revenue',num: true },
    { k: 'roas',   w: '80px',  t: 'ROAS',   num: true },
    { k: 'ctr',    w: '70px',  t: 'CTR',    num: true },
    { k: 'action', w: '90px',  t: '' },
  ];
  const grid = head.map(h => h.w).join(' ');
  return (
    <div style={{
      background: 'rgba(250,249,245,.85)', backdropFilter: 'blur(12px)',
      borderRadius: 6, overflow: 'hidden',
      boxShadow: '0 2px 6px rgba(10,10,9,.05)',
    }}>
      <div style={{
        display: 'grid', gridTemplateColumns: grid, gap: 16,
        padding: '12px 20px', borderBottom: '1px solid rgba(10,10,9,.10)',
        fontSize: 10, letterSpacing: '.08em', textTransform: 'uppercase', color: '#8A8880',
      }}>
        {head.map(h => (
          <div key={h.k} style={{ textAlign: h.num ? 'right' : 'left' }}>{h.t}</div>
        ))}
      </div>
      {rows.map((r, i) => {
        const dotColor = r.status === 'live' ? '#3A3A38' : r.status === 'paused' ? '#B4553A' : '#8A8880';
        return (
          <div key={r.id} style={{
            display: 'grid', gridTemplateColumns: grid, gap: 16, alignItems: 'center',
            padding: '14px 20px', borderBottom: i === rows.length - 1 ? 0 : '1px solid rgba(10,10,9,.06)',
            fontSize: 13, color: '#3A3A38',
          }}>
            <span><span style={{
              display: 'inline-block', width: 8, height: 8, borderRadius: 999, background: dotColor,
            }}/></span>
            <div>
              <div style={{ color: '#0A0A09' }}>{r.name}</div>
              {r.thai && <div style={{
                fontFamily: "'IBM Plex Sans Thai Looped', sans-serif", fontSize: 11,
                color: '#8A8880', marginTop: 2,
              }}>{r.thai}</div>}
            </div>
            <Tag dot="info">{r.platform}</Tag>
            <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontVariantNumeric: 'tabular-nums', textAlign: 'right', color: '#0A0A09' }}>{r.spend}</div>
            <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontVariantNumeric: 'tabular-nums', textAlign: 'right', color: '#0A0A09' }}>{r.rev}</div>
            <div style={{ fontFamily: 'IBM Plex Mono, monospace', textAlign: 'right', color: r.roas >= 3 ? '#0A0A09' : '#B4553A' }}>{r.roas.toFixed(2)}×</div>
            <div style={{ fontFamily: 'IBM Plex Mono, monospace', textAlign: 'right', color: '#4A4844' }}>{r.ctr}%</div>
            <button onClick={() => onToggle(r.id)} style={{
              border: '1px solid rgba(10,10,9,.10)', background: 'transparent', borderRadius: 4,
              padding: '5px 8px', fontSize: 11, color: '#3A3A38', cursor: 'pointer',
              display: 'inline-flex', alignItems: 'center', gap: 4, justifyContent: 'center',
            }}>
              {r.status === 'paused' ? <><Icons.Play/> Run</> : <><Icons.Pause/> Pause</>}
            </button>
          </div>
        );
      })}
    </div>
  );
};

window.CampaignTable = CampaignTable;


// === Screens.jsx ===
const Screens = {};

Screens.Dashboard = ({ workflows, onToggleWorkflow }) => (
  <div style={{ padding: '28px 32px 48px', display: 'flex', flexDirection: 'column', gap: 28 }}>
    <section>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 14 }}>
        <div>
          <div style={{ fontSize: 10, letterSpacing: '.08em', textTransform: 'uppercase', color: '#8A8880' }}>Today · 14 เม.ย. 2568</div>
          <h2 style={{ fontFamily: "'IBM Plex Serif', serif", fontWeight: 400, fontSize: 28, color: '#0A0A09', margin: '4px 0 0', letterSpacing: '-0.01em' }}>
            Here's what your agent did this morning.
          </h2>
        </div>
        <a style={{ fontSize: 13, color: '#0A0A09', borderBottom: '1px solid rgba(10,10,9,.3)', paddingBottom: 1 }}>
          Full report ↗
        </a>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
        <KpiCard eyebrow="Revenue · 7d"    value="฿142,380" delta="+18.4%" sub="vs. last 7d"/>
        <KpiCard eyebrow="Orders · today"  value="238"      delta="+12"    sub="across 3 shops"/>
        <KpiCard eyebrow="ROAS · blended"  value="3.42"     unit="×"        delta="+0.21"  sub="7d rolling"/>
        <KpiCard eyebrow="Avg response"    value="04:18"    delta="−07s"    deltaDir="down" sub="live chat"/>
      </div>
    </section>

    <section>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 12 }}>
        <div style={{ fontSize: 10, letterSpacing: '.08em', textTransform: 'uppercase', color: '#8A8880' }}>Running workflows</div>
        <div style={{ fontSize: 12, color: '#8A8880', fontFamily: 'IBM Plex Mono, monospace' }}>{workflows.filter(w => w.status === 'live').length} / {workflows.length} live</div>
      </div>
      <div style={{ background: 'rgba(250,249,245,.85)', backdropFilter: 'blur(12px)', borderRadius: 6, boxShadow: '0 2px 6px rgba(10,10,9,.05)' }}>
        {workflows.map(w => <WorkflowRow key={w.id} {...w} onToggle={() => onToggleWorkflow(w.id)}/>)}
      </div>
    </section>

    <section>
      <div style={{ fontSize: 10, letterSpacing: '.08em', textTransform: 'uppercase', color: '#8A8880', marginBottom: 12 }}>Recent agent decisions</div>
      <div style={{ background: 'rgba(250,249,245,.7)', borderRadius: 6, padding: '4px 20px' }}>
        {[
          { t: '14:02', th: 'Paused TikTok Ads "Songkran weekend" — ROAS below 1.8×.', en: null },
          { t: '13:41', th: null, en: 'Replied to 12 Shopee chat inquiries using the saved FAQ.' },
          { t: '12:18', th: 'เพิ่มงบแคมเปญ "น้ำหอม 99฿" +฿2,000 — CTR แตะ 3.1%.', en: null },
          { t: '09:30', th: null, en: 'Synced FlowAccount invoices · 47 new entries.' },
        ].map((r, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '60px 1fr', gap: 16, padding: '10px 0', borderBottom: i === 3 ? 0 : '1px solid rgba(10,10,9,.08)' }}>
            <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 11, color: '#8A8880' }}>{r.t}</div>
            <div style={{ fontSize: 13, color: '#3A3A38', fontFamily: r.th ? "'IBM Plex Sans Thai Looped', sans-serif" : 'Inter, sans-serif', lineHeight: 1.55 }}>
              {r.th || r.en}
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

Screens.Agent = ({ messages, onSend }) => (
  <div style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 84px)' }}>
    <div style={{ flex: 1, overflow: 'auto', padding: '28px 32px' }}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        {messages.map((m, i) => <AgentMessage key={i} from={m.from} tool={m.tool}>{m.body}</AgentMessage>)}
      </div>
    </div>
    <div style={{ maxWidth: 720, width: '100%', margin: '0 auto', boxSizing: 'border-box', padding: '0 32px 24px' }}>
      <AgentComposer onSend={onSend}/>
    </div>
  </div>
);

Screens.Campaigns = ({ rows, onToggle }) => (
  <div style={{ padding: '28px 32px 48px', display: 'flex', flexDirection: 'column', gap: 20 }}>
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      <Tag dot="live">Live · {rows.filter(r => r.status === 'live').length}</Tag>
      <Tag dot="paused">Paused · {rows.filter(r => r.status === 'paused').length}</Tag>
      <Tag dot="draft">Draft · {rows.filter(r => r.status === 'draft').length}</Tag>
      <div style={{ marginLeft: 'auto', fontSize: 12, color: '#8A8880' }}>Updated 14:22 ICT · auto-refresh 60s</div>
    </div>
    <CampaignTable rows={rows} onToggle={onToggle}/>
    <div style={{ fontFamily: "'IBM Plex Serif', serif", fontStyle: 'italic', fontSize: 13, color: '#8A8880' }}>
      Agent will pause campaigns when ROAS drops below 1.8× for two hours. You can override per-campaign.
    </div>
  </div>
);

Screens.Settings = () => (
  <div style={{ padding: '28px 32px 48px', maxWidth: 720 }}>
    <div style={{ display: 'grid', gap: 28 }}>
      <section>
        <div style={{ fontSize: 10, letterSpacing: '.08em', textTransform: 'uppercase', color: '#8A8880', marginBottom: 10 }}>Workspace</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <Input label="Shop name · ชื่อร้าน" value="Maison Siam" onChange={() => {}}/>
          <Input label="Timezone" value="Asia/Bangkok (UTC+7)" onChange={() => {}}/>
        </div>
      </section>
      <section>
        <div style={{ fontSize: 10, letterSpacing: '.08em', textTransform: 'uppercase', color: '#8A8880', marginBottom: 10 }}>Integrations</div>
        {[
          { name: 'TikTok Shop', status: 'Connected', sub: '2 shops · last sync 3 min ago' },
          { name: 'Shopee',      status: 'Connected', sub: '1 shop · last sync 7 min ago' },
          { name: 'TikTok Ads',  status: 'Connected', sub: '2 ad accounts' },
          { name: 'FlowAccount', status: 'Connected', sub: '47 unread invoices' },
        ].map((r, i, arr) => (
          <div key={r.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 0', borderBottom: i === arr.length - 1 ? 0 : '1px solid rgba(10,10,9,.08)' }}>
            <div>
              <div style={{ fontSize: 14, color: '#0A0A09' }}>{r.name}</div>
              <div style={{ fontSize: 12, color: '#8A8880', marginTop: 2 }}>{r.sub}</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <Tag dot="live">{r.status}</Tag>
              <Button variant="ghost">Manage</Button>
            </div>
          </div>
        ))}
      </section>
      <section>
        <div style={{ fontSize: 10, letterSpacing: '.08em', textTransform: 'uppercase', color: '#8A8880', marginBottom: 10 }}>Agent autonomy</div>
        <div style={{ fontSize: 13, color: '#3A3A38', lineHeight: 1.6, marginBottom: 12 }}>
          The agent runs campaigns and replies to chats automatically. It asks for confirmation before any spend above ฿5,000 or any refund.
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <Button variant="primary">Save changes</Button>
          <Button variant="ghost">Reset</Button>
        </div>
      </section>
    </div>
  </div>
);

window.Screens = Screens;


// === App ===
const App = () => {
  const [screen, setScreen] = React.useState('dashboard');
  const [workflows, setWorkflows] = React.useState([
    { id: 'wf1', name: 'TikTok Shop · order replies',  thai: 'ตอบแชทออเดอร์อัตโนมัติ', platform: 'TikTok Shop', status: 'live',   lastAction: 'Replied to 12 chats',       lastRun: '2m ago'  },
    { id: 'wf2', name: 'Ads · pause low ROAS',         thai: 'หยุดแคมเปญ ROAS ต่ำ',   platform: 'TikTok Ads',  status: 'live',   lastAction: 'Paused "Songkran weekend"', lastRun: '20m ago' },
    { id: 'wf3', name: 'Shopee · restock watcher',     thai: 'เฝ้าดู stock Shopee',    platform: 'Shopee',      status: 'paused', lastAction: 'Waiting for approval',      lastRun: '1h ago'  },
    { id: 'wf4', name: 'FlowAccount · invoice sync',   thai: 'ซิงก์ใบแจ้งหนี้',        platform: 'FlowAccount', status: 'live',   lastAction: 'Synced 47 invoices',        lastRun: '4h ago'  },
  ]);
  const [campaigns, setCampaigns] = React.useState([
    { id: 'c1', name: 'น้ำหอม 99฿ · conversion',         thai: 'กลุ่มเป้า Gen-Z 18-24', platform: 'TikTok Ads',  status: 'live',   spend: '฿12,480', rev: '฿42,300', roas: 3.39, ctr: '3.10' },
    { id: 'c2', name: 'Maison Siam · brand awareness',   thai: null,                   platform: 'TikTok Ads',  status: 'live',   spend: '฿8,200',  rev: '฿28,900', roas: 3.52, ctr: '2.40' },
    { id: 'c3', name: 'Shopee flash · 4.4',              thai: 'แคมเปญ 4.4 แฟลชเซล',   platform: 'Shopee',      status: 'live',   spend: '฿4,100',  rev: '฿15,600', roas: 3.80, ctr: '4.20' },
    { id: 'c4', name: 'Songkran weekend',                thai: null,                   platform: 'TikTok Ads',  status: 'paused', spend: '฿6,800',  rev: '฿9,900',  roas: 1.46, ctr: '1.80' },
    { id: 'c5', name: 'Retargeting · cart abandon',      thai: 'ตามเตือนตะกร้าค้าง',   platform: 'TikTok Shop', status: 'live',   spend: '฿2,100',  rev: '฿11,400', roas: 5.42, ctr: '5.10' },
    { id: 'c6', name: 'LINE broadcast · VIP',            thai: null,                   platform: 'LINE OA',     status: 'draft',  spend: '฿0',      rev: '฿0',      roas: 0.00, ctr: '0.00' },
  ]);
  const [messages, setMessages] = React.useState([
    { from: 'operator', body: 'เพิ่มงบแคมเปญ "น้ำหอม 99฿" อีก ฿2,000 — CTR ดีขึ้น' },
    { from: 'agent',    body: 'Got it. Current daily cap is ฿8,000, CTR is 3.1%. Raising to ฿10,000 will likely hold ROAS above 3×. Confirm?',
      tool: 'tiktok_ads.update_budget({ campaign: "น้ำหอม 99฿", daily_cap: 10000 })  — awaits confirm' },
    { from: 'operator', body: 'Yes, confirm. แล้วช่วยสรุปวันนี้หน่อย' },
    { from: 'agent',    body: "Done. Budget raised. Today so far: 238 orders, ฿84,210 revenue, blended ROAS 3.42×. Two campaigns paused automatically — Songkran weekend fell below 1.8×. I'll wait for your call on whether to restructure or drop it." },
  ]);

  const toggleWorkflow = (id) => setWorkflows(ws => ws.map(w => w.id === id ? { ...w, status: w.status === 'paused' ? 'live' : 'paused' } : w));
  const toggleCampaign = (id) => setCampaigns(cs => cs.map(c => c.id === id ? { ...c, status: c.status === 'paused' ? 'live' : c.status === 'live' ? 'paused' : c.status } : c));
  const onSend = (text) => {
    setMessages(m => [...m, { from: 'operator', body: text }]);
    setTimeout(() => {
      setMessages(m => [...m, { from: 'agent', body: "Understood. Let me check your current numbers before I make changes." }]);
    }, 600);
  };

  const titles = {
    dashboard: { t: 'Overview', s: 'Maison Siam · วันนี้' },
    agent:     { t: 'Agent',    s: 'Chat · เอเจนต์' },
    campaigns: { t: 'Campaigns', s: 'TikTok Ads · Shopee · LINE OA' },
    workflows: { t: 'Workflows', s: 'Saved automations' },
    finance:   { t: 'Finance',  s: 'FlowAccount sync' },
    settings:  { t: 'Settings',  s: 'Workspace' },
  };

  const renderScreen = () => {
    switch (screen) {
      case 'dashboard': return <Screens.Dashboard workflows={workflows} onToggleWorkflow={toggleWorkflow}/>;
      case 'agent':     return <Screens.Agent messages={messages} onSend={onSend}/>;
      case 'campaigns': return <Screens.Campaigns rows={campaigns} onToggle={toggleCampaign}/>;
      case 'settings':  return <Screens.Settings/>;
      default: return (
        <div style={{ padding: 64, color: '#8A8880', fontFamily: "'IBM Plex Serif', serif", fontStyle: 'italic' }}>
          This surface is outside the UI kit's scope — see dashboard, agent, campaigns, or settings.
        </div>
      );
    }
  };

  return (
    <React.Fragment>
      <Sidebar current={screen} onNav={setScreen}/>
      <div className="main" data-screen-label={screen}>
        <TopBar title={titles[screen].t} subtitle={titles[screen].s}/>
        <div key={screen} className="fade-enter" style={{ flex: 1 }}>
          {renderScreen()}
        </div>
      </div>
    </React.Fragment>
  );
};

ReactDOM.createRoot(document.getElementById('app')).render(<App/>);
