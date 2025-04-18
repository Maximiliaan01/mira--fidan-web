"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminLogin from '@/components/AdminLogin';

export default function LoginPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Sayfa yüklendiğinde giriş durumunu kontrol et
    const adminLoggedIn = localStorage.getItem('adminLoggedIn') === 'true';
    if (adminLoggedIn) {
      router.push('/admin');
    } else {
      setIsLoggedIn(false);
    }
  }, [router]);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return <AdminLogin onLogin={handleLogin} />;
} 