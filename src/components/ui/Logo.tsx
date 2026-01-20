import logo from '../../assets/logo.png';

interface LogoProps {
  className?: string;
  color?: string; // Kept for compatibility but might not affect png
}

export const Logo: React.FC<LogoProps> = ({ className = "h-8 w-auto", color }) => {
  return (
    <img
      src={logo}
      alt="SNM Developers"
      className={`${className} object-contain`}
    />
  );
};

export const LogoSymbol: React.FC<{ className?: string, color?: string }> = ({ className = "h-10 w-10", color = "currentColor" }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M20 30H45L20 70H45" strokeWidth="6" strokeLinecap="square" />{/* S-shape */}
      <path d="M55 70V30L75 70L95 30V70" strokeWidth="6" strokeLinecap="square" />{/* M-shape */}
    </svg>
  )
}
