import { cn } from '@/lib/utils';

export default function ArpadLogo({ className, ...props }: React.SVGProps<SVGSVGElement> & { className?: string }) {
  const colors = {
    darkBlue: '#2B3E50',
    teal: '#1ABC9C',
    gray: '#D9DCDD',
    white: '#FFFFFF',
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
      <g id="sygnet">
        <path d="M0 8C0 3.58172 3.58172 0 8 0H49V41L12 51V8Z" fill={colors.darkBlue} />
        <path d="M12 11C12 6.58172 15.5817 3 20 3H61V44L24 54V11Z" fill={colors.gray} />
        <g>
          <path d="M24 14C24 9.58172 27.5817 6 32 6H73V47L36 57V14Z" fill={colors.teal} />
          <text
            x="48"
            y="31"
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
      </g>
      <g id="logotyp" transform="translate(95, 8)">
        <text
            x="0"
            y="20"
            fontFamily="Poppins, sans-serif"
            fontSize="28"
            fontWeight="600"
            fill={colors.darkBlue}
            textAnchor="start"
        >
          ARPAD
        </text>
        <line x1="32" y1="31" x2="114" y2="31" stroke={colors.teal} strokeWidth="3" />
        <text
            x="0"
            y="48"
            fontFamily="Poppins, sans-serif"
            fontSize="18"
            fontWeight="400"
            fill={colors.darkBlue}
            letterSpacing="2"
            textAnchor="start"
        >
          sp. z o.o.
        </text>
      </g>
    </svg>
  );
}
