"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface SectionData {
  id: string;
  title: string;
  content: string;
  type: 'text' | 'image' | 'list';
  items?: string[];
}

export default function AdminPanel() {
  const router = useRouter();
  const [sections, setSections] = useState<SectionData[]>([
    {
      id: 'profile',
      title: 'Profil Bilgileri',
      content: 'Ortaokulu Şehit Mehmet Gönenç Ortaokulu\'nda okudum, şimdi Bahçelievler Anadolu Lisesi\'nde 11. sınıf öğrencisiyim. Futbol, müzik ve hukuk tutkularımla bir yolculuk yapıyorum.',
      type: 'text'
    },
    {
      id: 'music',
      title: 'Sevdiğim Müzikler',
      content: 'Müzik, benim için sadece bir hobi değil, aynı zamanda duygularımı ifade etmenin bir yolu.',
      type: 'list',
      items: ['Pop', 'R&B', 'Indie', 'Klasik Müzik']
    },
    {
      id: 'schools',
      title: 'Okuduğum Okullar',
      content: 'Eğitim hayatım boyunca önemli deneyimler edindim. Ortaokulu Şehit Mehmet Gönenç Ortaokulu\'nda, liseyi Bahçelievler Anadolu Lisesi\'nde okuyorum. Üniversite tercihim 22 Haziran 2024 tarihinde belli olacaktır.',
      type: 'text'
    },
    {
      id: 'hobbies',
      title: 'Hobilerim',
      content: 'Hobilerim beni yansıtan ve hayatıma anlam katan aktiviteler.',
      type: 'text'
    },
    {
      id: 'profile-photo',
      title: 'Profil Fotoğrafı',
      content: '/images/profile.jpg',
      type: 'image'
    },
    {
      id: 'hobby-photos',
      title: 'Hobi Fotoğrafları',
      content: 'Fotoğraflar',
      type: 'text'
    },
  ]);

  const [activeSection, setActiveSection] = useState('profile');
  const [editingContent, setEditingContent] = useState('');
  const [editingTitle, setEditingTitle] = useState('');
  const [editingItems, setEditingItems] = useState<string[]>([]);
  const [newItem, setNewItem] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  
  useEffect(() => {
    // Giriş yapılıp yapılmadığını kontrol et
    const isLoggedIn = localStorage.getItem('adminLoggedIn') === 'true';
    if (!isLoggedIn) {
      router.push('/login');
    }
    
    // Daha önce kaydedilmiş veri varsa yükle
    const savedSections = localStorage.getItem('websiteSections');
    if (savedSections) {
      setSections(JSON.parse(savedSections));
    }
  }, [router]);
  
  useEffect(() => {
    // Aktif bölümün içeriğini düzenleme alanına yükle
    const currentSection = sections.find(section => section.id === activeSection);
    if (currentSection) {
      setEditingContent(currentSection.content);
      setEditingTitle(currentSection.title);
      if (currentSection.items) {
        setEditingItems([...currentSection.items]);
      } else {
        setEditingItems([]);
      }
      if (currentSection.type === 'image') {
        setPreviewUrl(currentSection.content || null);
      } else {
        setPreviewUrl(null);
      }
    }
  }, [activeSection, sections]);
  
  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn');
    router.push('/login');
  };
  
  const handleSaveChanges = () => {
    const updatedSections = sections.map(section => {
      if (section.id === activeSection) {
        const updatedSection = { ...section, title: editingTitle };
        
        if (section.type === 'list') {
          updatedSection.items = editingItems;
        } else if (section.type === 'image' && selectedFile) {
          // Gerçek uygulamada burada dosya yükleme API'si kullanılır
          // Bu örnek için dosya yolunu güncelliyoruz
          updatedSection.content = previewUrl || section.content;
        } else {
          updatedSection.content = editingContent;
        }
        
        return updatedSection;
      }
      return section;
    });
    
    setSections(updatedSections);
    localStorage.setItem('websiteSections', JSON.stringify(updatedSections));
    
    alert('Değişiklikler kaydedildi!');
  };
  
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    if (file) {
      setSelectedFile(file);
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setPreviewUrl(fileReader.result as string);
      };
      fileReader.readAsDataURL(file);
    }
  };
  
  const handleAddItem = () => {
    if (newItem.trim()) {
      setEditingItems([...editingItems, newItem.trim()]);
      setNewItem('');
    }
  };
  
  const handleRemoveItem = (index: number) => {
    const updatedItems = [...editingItems];
    updatedItems.splice(index, 1);
    setEditingItems(updatedItems);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddItem();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-primary text-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Miray Fidan - Yönetim Paneli</h1>
          <button 
            onClick={handleLogout}
            className="px-4 py-2 bg-white text-primary rounded-md hover:bg-gray-100 transition-colors"
          >
            Çıkış Yap
          </button>
        </div>
      </header>
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sol Sidebar */}
          <div className="w-full md:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-4">
              <h2 className="text-lg font-semibold mb-4 text-primary">İçerik Bölümleri</h2>
              <nav>
                <ul className="space-y-2">
                  {sections.map(section => (
                    <li key={section.id}>
                      <button
                        onClick={() => setActiveSection(section.id)}
                        className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                          activeSection === section.id 
                            ? 'bg-primary text-white' 
                            : 'hover:bg-gray-100'
                        }`}
                      >
                        {section.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <a 
                  href="/"
                  target="_blank"
                  className="block text-center px-4 py-2 bg-secondary text-white rounded-md hover:bg-secondary/90 transition-colors"
                >
                  Siteyi Görüntüle
                </a>
              </div>
            </div>
          </div>
          
          {/* Sağ İçerik Alanı */}
          <div className="w-full md:w-3/4">
            <div className="bg-white rounded-lg shadow-md p-6">
              {sections.find(s => s.id === activeSection)?.type === 'image' ? (
                <>
                  <h2 className="text-xl font-semibold mb-6 text-primary">
                    {editingTitle} <span className="text-sm font-normal text-gray-500">(Fotoğraf)</span>
                  </h2>
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Başlık
                    </label>
                    <input
                      type="text"
                      value={editingTitle}
                      onChange={(e) => setEditingTitle(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Fotoğraf Yükle
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                    />
                  </div>
                  
                  {previewUrl && (
                    <div className="mt-4 border rounded-lg p-4">
                      <h3 className="text-sm font-medium text-gray-700 mb-2">Önizleme:</h3>
                      <div className="relative h-64 bg-gray-100 rounded-md overflow-hidden">
                        <img 
                          src={previewUrl} 
                          alt="Önizleme" 
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                  )}
                </>
              ) : sections.find(s => s.id === activeSection)?.type === 'list' ? (
                <>
                  <h2 className="text-xl font-semibold mb-6 text-primary">
                    {editingTitle} <span className="text-sm font-normal text-gray-500">(Liste)</span>
                  </h2>
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Başlık
                    </label>
                    <input
                      type="text"
                      value={editingTitle}
                      onChange={(e) => setEditingTitle(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      İçerik
                    </label>
                    <textarea
                      value={editingContent}
                      onChange={(e) => setEditingContent(e.target.value)}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Liste Öğeleri
                    </label>
                    <div className="flex">
                      <input
                        type="text"
                        value={newItem}
                        onChange={(e) => setNewItem(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Yeni öğe ekle"
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                      />
                      <button
                        onClick={handleAddItem}
                        className="px-4 py-2 bg-primary text-white rounded-r-md hover:bg-primary/90 transition-colors"
                      >
                        Ekle
                      </button>
                    </div>
                  </div>
                  
                  <div className="mt-4 border rounded-lg p-4 bg-gray-50">
                    <h3 className="text-sm font-medium text-gray-700 mb-2">Mevcut Öğeler:</h3>
                    {editingItems.length > 0 ? (
                      <ul className="space-y-2">
                        {editingItems.map((item, index) => (
                          <li key={index} className="flex items-center justify-between bg-white p-2 rounded shadow-sm">
                            <span>{item}</span>
                            <button
                              onClick={() => handleRemoveItem(index)}
                              className="text-red-500 hover:text-red-700"
                            >
                              Sil
                            </button>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-500 text-sm">Liste boş. Yeni öğeler ekleyin.</p>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <h2 className="text-xl font-semibold mb-6 text-primary">
                    {editingTitle} <span className="text-sm font-normal text-gray-500">(Metin)</span>
                  </h2>
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Başlık
                    </label>
                    <input
                      type="text"
                      value={editingTitle}
                      onChange={(e) => setEditingTitle(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      İçerik
                    </label>
                    <textarea
                      value={editingContent}
                      onChange={(e) => setEditingContent(e.target.value)}
                      rows={8}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                    />
                  </div>
                </>
              )}
              
              <div className="flex justify-end mt-6">
                <button
                  onClick={handleSaveChanges}
                  className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                >
                  Değişiklikleri Kaydet
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 