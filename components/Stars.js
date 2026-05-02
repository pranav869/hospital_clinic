import { Star } from 'lucide-react';

export default function Stars({ count = 5 }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: count }).map((_, index) => (
        <Star key={index} className="h-4 w-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}
