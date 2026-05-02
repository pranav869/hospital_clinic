import { Baby, Bone, Ear, HeartPulse, Sparkles, Stethoscope } from 'lucide-react';

const iconMap = {
  Baby,
  Bone,
  Ear,
  HeartPulse,
  Sparkles,
  Stethoscope
};

export default function ServiceIcon({ name, className = 'h-7 w-7' }) {
  const Icon = iconMap[name] || Stethoscope;
  return <Icon className={className} />;
}
