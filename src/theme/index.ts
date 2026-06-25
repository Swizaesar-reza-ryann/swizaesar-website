export const theme = {
  colors: {
    /** Royal Blue — primary brand, CTA, active states */
    primary: '#2563EB',
    primaryDark: '#1D4ED8',
    primaryLight: '#DBEAFE',

    /** Teal — accent labels, highlights */
    accent: '#0D9488',
    accentLight: '#CCFBF1',

    /** Backgrounds */
    bg: '#F8FAFC',
    surface: '#FFFFFF',
    surfaceHover: '#F1F5F9',

    /** Text */
    text: '#0F172A',
    textSecondary: '#475569',
    textMuted: '#94A3B8',

    /** Borders */
    border: '#E2E8F0',
    borderStrong: '#CBD5E1',

    /** Legacy alias used across styled components */
    secondary: '#2563EB',
  },
  shadows: {
    sm: '0 1px 2px rgba(15, 23, 42, 0.05)',
    md: '0 4px 6px -1px rgba(15, 23, 42, 0.07), 0 2px 4px -2px rgba(15, 23, 42, 0.05)',
    lg: '0 10px 15px -3px rgba(15, 23, 42, 0.08), 0 4px 6px -4px rgba(15, 23, 42, 0.05)',
    xl: '0 20px 25px -5px rgba(15, 23, 42, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.04)',
  },
  radius: {
    sm: '6px',
    md: '10px',
    lg: '16px',
    xl: '24px',
    full: '9999px',
  },
  spacing: (value: number) => `${value * 8}px`,
};
