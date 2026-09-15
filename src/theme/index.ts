export const theme = {
  colors: {
    /** Warm peach — primary CTA, active states */
    primary: '#F0865A',
    primaryDark: '#E06A40',
    primaryLight: '#2A1812',

    /** Soft peach highlight — labels, accent words */
    accent: '#FFB089',
    accentLight: '#241610',

    /** Backgrounds — deep warm charcoal */
    bg: '#0C0908',
    surface: '#161210',
    surfaceHover: '#1F1814',

    /** Text */
    text: '#F5F0EB',
    textSecondary: '#A89F96',
    textMuted: '#6B635C',

    /** Borders */
    border: '#2A2420',
    borderStrong: '#3D3530',

    /** Legacy alias used across styled components */
    secondary: '#F0865A',
  },
  gradients: {
    cta: 'linear-gradient(135deg, #FF9D76 0%, #E85D3C 100%)',
    accentText: 'linear-gradient(135deg, #FFB089 0%, #F0865A 55%, #EF6B4A 100%)',
    rim: 'linear-gradient(90deg, #FCD34D 0%, #F0865A 50%, #EF4444 100%)',
  },
  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.35)',
    md: '0 8px 24px -8px rgba(0, 0, 0, 0.55)',
    lg: '0 16px 40px -12px rgba(0, 0, 0, 0.65)',
    xl: '0 28px 56px -16px rgba(0, 0, 0, 0.7)',
    glow: '0 0 48px rgba(240, 134, 90, 0.22)',
    glowSoft: '0 0 80px rgba(240, 134, 90, 0.12)',
  },
  radius: {
    sm: '6px',
    md: '10px',
    lg: '16px',
    xl: '24px',
    full: '9999px',
  },
  fonts: {
    sans: "'Montserrat', var(--font-montserrat), sans-serif",
    display: "'Instrument Serif', var(--font-display), Georgia, serif",
  },
  spacing: (value: number) => `${value * 8}px`,
};
