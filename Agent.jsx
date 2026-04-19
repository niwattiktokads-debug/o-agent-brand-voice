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
