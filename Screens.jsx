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
