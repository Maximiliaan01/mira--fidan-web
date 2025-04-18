"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

// Varsayılan içerik
const defaultContent = {
  profile: {
    title: "Profil Bilgileri",
    content: "Ortaokulu Şehit Mehmet Gönenç Ortaokulu'nda okudum, şimdi Bahçelievler Anadolu Lisesi'nde 11. sınıf öğrencisiyim. Futbol, müzik ve hukuk tutkularımla bir yolculuk yapıyorum."
  },
  music: {
    title: "Sevdiğim Müzikler",
    content: "Müzik, benim için sadece bir hobi değil, aynı zamanda duygularımı ifade etmenin bir yolu.",
    items: ["Pop", "R&B", "Indie", "Klasik Müzik"]
  },
  schools: {
    title: "Okuduğum Okullar",
    content: "Eğitim hayatım boyunca önemli deneyimler edindim. Ortaokulu Şehit Mehmet Gönenç Ortaokulu'nda, liseyi Bahçelievler Anadolu Lisesi'nde okuyorum. Üniversite tercihim 22 Haziran 2024 tarihinde belli olacaktır."
  },
  hobbies: {
    title: "Hobilerim",
    content: "Hobilerim beni yansıtan ve hayatıma anlam katan aktiviteler."
  },
  profilePhoto: {
    title: "Profil Fotoğrafı",
    content: "/images/profile.jpg"
  },
  hobbyPhotos: {
    title: "Hobi Fotoğrafları",
    content: "Fotoğraflar"
  }
};

type ContentContextType = {
  content: typeof defaultContent;
  setContent: (content: typeof defaultContent) => void;
};

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export function ContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState(defaultContent);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Tarayıcıda çalıştığını kontrol et
    if (typeof window !== 'undefined') {
      try {
        // localStorage'dan içeriği yükle
        const savedSections = localStorage.getItem('websiteSections');
        if (savedSections) {
          const sections = JSON.parse(savedSections);
          
          // Veriyi içerik formatına dönüştür
          const formattedContent: any = {...defaultContent};
          
          sections.forEach((section: any) => {
            switch(section.id) {
              case 'profile':
                formattedContent.profile = {
                  title: section.title,
                  content: section.content
                };
                break;
              case 'music':
                formattedContent.music = {
                  title: section.title,
                  content: section.content,
                  items: section.items || []
                };
                break;
              case 'schools':
                formattedContent.schools = {
                  title: section.title,
                  content: section.content
                };
                break;
              case 'hobbies':
                formattedContent.hobbies = {
                  title: section.title,
                  content: section.content
                };
                break;
              case 'profile-photo':
                formattedContent.profilePhoto = {
                  title: section.title,
                  content: section.content
                };
                break;
              case 'hobby-photos':
                formattedContent.hobbyPhotos = {
                  title: section.title,
                  content: section.content
                };
                break;
            }
          });
          
          setContent(formattedContent);
        }
      } catch (error) {
        console.error('İçerik yüklenirken hata oluştu:', error);
      } finally {
        setLoaded(true);
      }
    }
  }, []);

  return (
    <ContentContext.Provider value={{ content, setContent }}>
      {loaded ? children : null}
    </ContentContext.Provider>
  );
}

export function useContent() {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
} 