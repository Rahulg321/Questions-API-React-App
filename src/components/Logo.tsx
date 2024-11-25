import { BookOpenCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <Link 
      to="/" 
      className={`flex items-center gap-2 text-white hover:opacity-90 transition-opacity ${className}`}
    >
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
        <div className="relative bg-gray-900 ring-1 ring-gray-800 rounded-lg p-2">
          <BookOpenCheck className="w-6 h-6 text-indigo-400" />
        </div>
      </div>
    </Link>
  );
}