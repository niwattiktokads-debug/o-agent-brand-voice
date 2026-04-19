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
