type BadgeProps = {
  label: string;
  type?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'ghost' | 'outline';
  outline?: boolean;
};
const badgeType: Record<string, string> = {
  default: '',
  outline: 'badge-outline',
  neutral: 'badge-neutral',
  primary: 'badge-primary',
  secondary: 'badge-secondary',
  accent: 'badge-accent',
  ghost: 'badge-ghost',
};
export const Badge = ({ label, type }: BadgeProps) => {
  return (
    <div key={label} className={`badge ${type && badgeType[type]}`}>
      {label}
    </div>
  );
};
