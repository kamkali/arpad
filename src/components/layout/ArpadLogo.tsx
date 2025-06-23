import { cn } from '@/lib/utils';

// This new version is designed to be a pixel-perfect replica of the image provided,
// using the color palette already defined in the application's CSS.
export default function ArpadLogo({ className, ...props }: React.SVGProps<SVGSVGElement> & { className?: string }) {
  const colors = {
    primary: '#023047', // from var(--primary)
    accent: '#219EBC',  // from var(--accent)
    muted: '#D8E0E6',    // from var(--muted)
    white: '#FFFFFF',   // for the letter 'A'
  };

  return (
    <svg
      width="235"
      height="61"
      viewBox="0 0 235 61"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('h-10 w-auto', className)}
      aria-labelledby="arpad-logo-title"
      {...props}
    >
      <title id="arpad-logo-title">ARPAD sp. z o.o. Logo</title>
      <g id="sygnet" transform="translate(0, -1)">
        {/* Back element (dark blue) */}
        <path d="M22 52.5L0 42.5V9C0 4.85786 3.58172 1.5 8 1.5H22V52.5Z" fill={colors.primary} />
        {/* Middle element (grey) */}
        <path d="M48 55.5L26 45.5V12C26 7.85786 29.5817 4.5 34 4.5H48V55.5Z" fill={colors.muted} />
        {/* Front element (teal) */}
        <path d="M78 58.5L53 48.5V15C53 10.8579 56.5817 7.5 61 7.5H78V58.5Z" fill={colors.accent} />
        {/* Letter 'A' */}
        <text
          x="65.5"
          y="33"
          fontFamily="Poppins, sans-serif"
          fontSize="24"
          fontWeight="bold"
          fill={colors.white}
          textAnchor="middle"
          dominantBaseline="central"
        >
          A
        </text>
      </g>
      <g id="logotyp" transform="translate(95, 7)">
        {/* "ARPAD" Text */}
        <text
            x="0"
            y="20"
            fontFamily="Poppins, sans-serif"
            fontSize="28"
            fontWeight="600"
            fill={colors.primary}
            textAnchor="start"
        >
          ARPAD
        </text>
        {/* Decorative Line */}
        <line x1="32" y1="31" x2="114" y2="31" stroke={colors.accent} strokeWidth="3" />
        {/* "sp. z o.o." Text */}
        <text
            x="0"
            y="48"
            fontFamily="Poppins, sans-serif"
            fontSize="18"
            fontWeight="400"
            fill={colors.primary}
            letterSpacing="2"
            textAnchor="start"
        >
          sp. z o.o.
        </text>
      </g>
    </svg>
  );
}
