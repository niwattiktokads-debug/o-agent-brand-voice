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
