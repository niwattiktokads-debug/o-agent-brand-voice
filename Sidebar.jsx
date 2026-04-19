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
