"use client";

import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';

interface SocialLink {
  id: string;
  icon: JSX.Element;
  url: string;
  label: string;
  color: string;
}

const socialLinks: SocialLink[] = [
  {
    id: 'instagram',
    icon: <FaInstagram className="text-2xl" />,
    url: 'https://instagram.com/mirayfidan',
    label: 'Instagram',
    color: 'from-orange-500 to-purple-500'
  },
  {
    id: 'twitter',
    icon: <FaTwitter className="text-2xl" />,
    url: 'https://twitter.com/mirayfidan',
    label: 'Twitter',
    color: 'from-blue-400 to-blue-600'
  },
  {
    id: 'linkedin',
    icon: <FaLinkedin className="text-2xl" />,
    url: 'https://linkedin.com/in/mirayfidan',
    label: 'LinkedIn',
    color: 'from-blue-600 to-blue-800'
  },
  {
    id: 'youtube',
    icon: <FaYoutube className="text-2xl" />,
    url: 'https://youtube.com/mirayfidan',
    label: 'YouTube',
    color: 'from-red-500 to-red-700'
  }
];

export default function SocialIcons() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
      {socialLinks.map((link) => (
        <a 
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon group relative"
          aria-label={link.label}
        >
          <div className={`absolute inset-0 bg-gradient-to-tr ${link.color} blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300 rounded-full scale-110 group-hover:scale-125`}></div>
          <div className="relative flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md z-10">
            <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
              {link.icon}
            </span>
          </div>
          <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            {link.label}
          </span>
        </a>
      ))}
    </div>
  );
} 