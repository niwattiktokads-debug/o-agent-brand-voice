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
