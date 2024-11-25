import { Code, Coins, BookOpen, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

const navItems = [
  { icon: Code, text: "API", href: "/api/introduction" },
  { icon: Coins, text: "Pricing", href: "/pricing" },
  { icon: BookOpen, text: "Documentation", href: "/docs/introduction" },
  { icon: Users, text: "Community", href: "/community" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo />

          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                >
                  <item.icon className="w-5 h-5" />
                  <span className="whitespace-nowrap">{item.text}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors whitespace-nowrap">
              Sign In
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors whitespace-nowrap">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
