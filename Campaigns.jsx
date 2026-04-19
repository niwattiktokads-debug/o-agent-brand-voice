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
