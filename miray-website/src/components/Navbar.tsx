"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface NavItem {
  id: string;
  title: string;
  icon: string;
}

const navItems: NavItem[] = [
  { id: 'music', title: 'Sevdiğim Müzikler', icon: '🎵' },
  { id: 'schools', title: 'Okuduğum Okullar', icon: '🏫' },
  { id: 'hobbies', title: 'Hobilerim', icon: '⚽' },
  { id: 'dreams', title: 'Hayallerim', icon: '✨' },
  { id: 'friends', title: 'Yakın Arkadaşlarım', icon: '👥' },
  { id: 'social', title: 'Sosyal Medya Hesaplarım', icon: '📱' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Admin girişi yapılıp yapılmadığını kontrol et
    const adminLoggedIn = localStorage.getItem('adminLoggedIn') === 'true';
    setIsAdmin(adminLoggedIn);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.clientHeight;
        
        if (sectionTop <= window.innerHeight / 2 && sectionTop > -sectionHeight / 2) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // İlk yüklenmede çalıştır
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Menü açıldığında body'nin scrollunu engelleyen fonksiyon
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <>
      {/* Sağ üst köşe kontrol düğmeleri */}
      <div className="fixed top-4 right-4 z-40 flex space-x-2">
        {/* Admin paneli butonu - sadece admin girişi yapıldıysa görünür */}
        {isAdmin && (
          <Link 
            href="/admin" 
            className="bg-secondary text-white p-2 rounded-full shadow-lg flex items-center justify-center"
            aria-label="Yönetim Paneli"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </Link>
        )}
        
        {/* Yönetici girişi butonu */}
        <Link 
          href="/login" 
          className="bg-primary/80 text-white p-2 rounded-full shadow-lg flex items-center justify-center"
          aria-label="Yönetici Girişi"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </Link>
        
        {/* Menü butonu */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="bg-primary text-white p-2 rounded-full shadow-lg flex items-center justify-center"
          aria-label="Menüyü aç/kapat"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Overlay - Menü açıkken arka planı karartır */}
      {menuOpen && (
        <div 
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Menü - Sağ taraftan açılıp kapanır */}
      <nav className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg p-8 flex flex-col justify-center z-30 transition-all duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Kapatma butonu - Menünün içinde */}
        <button 
          onClick={() => setMenuOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Menüyü kapat"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="absolute top-6 left-6">
          <div className="font-bold text-primary text-xl">Miray<span className="text-secondary">Fidan</span></div>
        </div>
        <ul className="space-y-6">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                className={`nav-item text-lg font-medium block group ${
                  activeSection === item.id ? 'text-primary active' : 'text-text'
                }`}
                onClick={() => scrollToSection(item.id)}
              >
                <div className="flex items-center">
                  <span className="mr-3 text-xl opacity-80 group-hover:text-secondary transition-colors">{item.icon}</span>
                  <span className="group-hover:text-primary transition-colors duration-300">{item.title}</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
} 