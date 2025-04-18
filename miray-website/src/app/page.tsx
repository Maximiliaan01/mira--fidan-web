import Navbar from '@/components/Navbar';
import SocialIcons from '@/components/SocialIcons';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Dekoratif elementler */}
      <div className="decoration-circle w-96 h-96 top-40 left-10 opacity-20"></div>
      <div className="decoration-circle w-72 h-72 bottom-20 right-20 opacity-10"></div>
      
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 md:px-12 lg:px-24 gap-12 relative">
        <div className="max-w-3xl lg:max-w-4xl order-2 lg:order-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 relative">
            Merhaba, ben Miray Fidan
            <span className="absolute bottom-0 left-0 w-32 h-1 bg-secondary"></span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-text mb-8">
            Ortaokulu Şehit Mehmet Gönenç Ortaokulu&apos;nda okudum, şimdi Bahçelievler Anadolu Lisesi&apos;nde 11. sınıf öğrencisiyim. 
            Futbol, müzik ve hukuk tutkularımla bir yolculuk yapıyorum.
          </p>
          <div className="flex space-x-4">
            <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition">
              Hakkımda Daha Fazla
            </button>
            <button className="bg-white hover:bg-gray-100 text-primary border-2 border-primary px-6 py-3 rounded-lg font-medium transition">
              İletişime Geç
            </button>
          </div>
        </div>
        <div className="image-container w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 flex-shrink-0 order-1 lg:order-2">
          {/* Profil fotoğrafı için yer tutucu, daha sonra gerçek fotoğraf ile değiştirilebilir */}
          <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border-4 border-white shadow-xl flex items-center justify-center">
            <span className="text-4xl text-primary/40 font-bold">MF</span>
            {/* Gerçek fotoğrafınız olduğunda şu şekilde kullanabilirsiniz:
            <Image 
              src="/images/profile.jpg" 
              alt="Miray Fidan" 
              className="rounded-full object-cover"
              fill
              priority
            /> */}
          </div>
        </div>
      </section>

      {/* Sevdiğim Müzikler */}
      <section id="music" className="section bg-white/80 px-6 md:px-12 lg:px-24 backdrop-blur-sm">
        <h2 className="section-title">Sevdiğim Müzikler</h2>
        <div className="max-w-7xl mx-auto">
          <p className="text-lg mb-6 text-center max-w-3xl mx-auto">
            Müzik, benim için sadece bir hobi değil, aynı zamanda duygularımı ifade etmenin bir yolu. 
            İşte en sevdiğim müzik türleri ve sanatçılar:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card p-6 group">
              <div className="mb-4 h-1 w-20 bg-secondary group-hover:w-32 transition-all duration-300"></div>
              <h3 className="text-xl font-semibold text-primary mb-3">Favori Türlerim</h3>
              <ul className="list-disc list-inside space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-secondary mr-3"></span>
                  <span>Pop</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-secondary mr-3"></span>
                  <span>R&B</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-secondary mr-3"></span>
                  <span>Indie</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-secondary mr-3"></span>
                  <span>Klasik Müzik</span>
                </li>
              </ul>
            </div>
            <div className="card p-6 group">
              <div className="mb-4 h-1 w-20 bg-secondary group-hover:w-32 transition-all duration-300"></div>
              <h3 className="text-xl font-semibold text-primary mb-3">Favori Sanatçılarım</h3>
              <ul className="list-disc list-inside space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-secondary mr-3"></span>
                  <span>Sezen Aksu</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-secondary mr-3"></span>
                  <span>Dua Lipa</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-secondary mr-3"></span>
                  <span>The Weeknd</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-secondary mr-3"></span>
                  <span>Billie Eilish</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Okuduğum Okullar */}
      <section id="schools" className="section px-6 md:px-12 lg:px-24">
        <h2 className="section-title">Okuduğum Okullar</h2>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-6 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full -mr-10 -mt-10"></div>
              <div className="mb-4 h-1 w-20 bg-secondary group-hover:w-32 transition-all duration-300"></div>
              <h3 className="text-xl font-semibold text-primary mb-3">Ortaokul</h3>
              <p className="mb-2 font-medium">Şehit Mehmet Gönenç Ortaokulu</p>
              <p className="text-sm bg-primary/10 inline-block px-3 py-1 rounded-full text-primary mb-3">2017 - 2021</p>
              <p className="mt-3">
                Ortaokul yıllarımda dil yeteneklerimi geliştirdim ve spor aktivitelerine aktif olarak katıldım.
                Bu süreçte birçok arkadaşlık kurdum ve liderlik becerilerimi geliştirme fırsatı buldum.
              </p>
            </div>
            <div className="card p-6 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full -mr-10 -mt-10"></div>
              <div className="mb-4 h-1 w-20 bg-secondary group-hover:w-32 transition-all duration-300"></div>
              <h3 className="text-xl font-semibold text-primary mb-3">Lise</h3>
              <p className="mb-2 font-medium">Bahçelievler Anadolu Lisesi</p>
              <p className="text-sm bg-primary/10 inline-block px-3 py-1 rounded-full text-primary mb-3">2021 - Devam ediyor</p>
              <p className="mt-3">
                Şu anda 11. sınıf öğrencisiyim. Hukuk alanına ilgi duyuyor ve bu yönde kendimi geliştiriyorum.
                Okul kulüplerinde aktif rol alıyor ve üniversite hazırlık sürecinde çalışmalarımı sürdürüyorum.
              </p>
            </div>
            <div className="card p-6 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full -mr-10 -mt-10"></div>
              <div className="mb-4 h-1 w-20 bg-secondary group-hover:w-32 transition-all duration-300"></div>
              <h3 className="text-xl font-semibold text-primary mb-3">Üniversite</h3>
              <div className="relative">
                <div className="absolute inset-0 bg-gray-100/80 backdrop-blur-sm flex flex-col items-center justify-center rounded-md">
                  <div className="text-3xl mb-2">🔒</div>
                  <p className="font-medium text-center text-gray-800">22 Haziran'da açılacaktır</p>
                </div>
                <p className="mb-2 font-medium opacity-30">Bilgiler gizli</p>
                <p className="text-sm bg-primary/10 inline-block px-3 py-1 rounded-full text-primary mb-3 opacity-30">Tarih belirsiz</p>
                <p className="mt-3 opacity-30">
                  Üniversite bilgilerim 22 Haziran'da burada yayınlanacaktır.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hobilerim */}
      <section id="hobbies" className="section bg-white/80 px-6 md:px-12 lg:px-24 backdrop-blur-sm">
        <h2 className="section-title">Hobilerim</h2>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card group overflow-hidden">
              <div className="h-56 bg-gray-200 relative">
                {/* Futbol resmi için yer tutucu */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <span>Futbol Görseli</span>
                  {/* Gerçek fotoğrafınız olduğunda şu şekilde kullanabilirsiniz:
                  <Image 
                    src="/images/futbol.jpg" 
                    alt="Futbol" 
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  /> */}
                </div>
              </div>
              <div className="p-6">
                <div className="mb-4 h-1 w-20 bg-secondary group-hover:w-32 transition-all duration-300"></div>
                <h3 className="text-xl font-semibold text-primary mb-3">Futbol</h3>
                <p>
                  Futbol oynamayı ve izlemeyi seviyorum. Takım çalışması ve stratejik düşünme becerilerimi geliştiriyor.
                </p>
              </div>
            </div>
            <div className="card group overflow-hidden">
              <div className="h-56 bg-gray-200 relative">
                {/* Müzik resmi için yer tutucu */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <span>Müzik Görseli</span>
                  {/* Gerçek fotoğrafınız olduğunda şu şekilde kullanabilirsiniz:
                  <Image 
                    src="/images/muzik.jpg" 
                    alt="Müzik" 
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  /> */}
                </div>
              </div>
              <div className="p-6">
                <div className="mb-4 h-1 w-20 bg-secondary group-hover:w-32 transition-all duration-300"></div>
                <h3 className="text-xl font-semibold text-primary mb-3">Müzik</h3>
                <p>
                  Müzik dinlemek ve şarkı söylemek en büyük tutkularımdan biri. Farklı müzik türlerini keşfetmekten keyif alıyorum.
                </p>
              </div>
            </div>
            <div className="card group overflow-hidden">
              <div className="h-56 bg-gray-200 relative">
                {/* Kitap resmi için yer tutucu */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <span>Kitap Görseli</span>
                  {/* Gerçek fotoğrafınız olduğunda şu şekilde kullanabilirsiniz:
                  <Image 
                    src="/images/kitap.jpg" 
                    alt="Kitap Okumak" 
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  /> */}
                </div>
              </div>
              <div className="p-6">
                <div className="mb-4 h-1 w-20 bg-secondary group-hover:w-32 transition-all duration-300"></div>
                <h3 className="text-xl font-semibold text-primary mb-3">Kitap Okumak</h3>
                <p>
                  Özellikle hukuk ve sosyal bilimlerle ilgili kitaplar okumaktan ve yeni bilgiler edinmekten hoşlanıyorum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hayallerim */}
      <section id="dreams" className="section px-6 md:px-12 lg:px-24">
        <h2 className="section-title">Hayallerim</h2>
        <div className="max-w-7xl mx-auto">
          <div className="card p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full -mr-20 -mt-20"></div>
            <div className="relative">
              <h3 className="text-2xl font-semibold text-primary mb-4">Hukuk Kariyeri</h3>
              <p className="text-lg mb-6">
                En büyük hayalim başarılı bir hukukçu olmak. Adalet ve eşitlik için çalışmak benim için çok önemli.
              </p>
              <div className="space-y-4">
                <div className="flex items-start p-3 bg-gray-50 rounded-lg hover:bg-primary/5 transition-colors">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary mr-4 flex-shrink-0">1</div>
                  <p>İyi bir üniversitenin hukuk fakültesinden mezun olmak</p>
                </div>
                <div className="flex items-start p-3 bg-gray-50 rounded-lg hover:bg-primary/5 transition-colors">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary mr-4 flex-shrink-0">2</div>
                  <p>İnsan hakları alanında uzmanlaşmak</p>
                </div>
                <div className="flex items-start p-3 bg-gray-50 rounded-lg hover:bg-primary/5 transition-colors">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary mr-4 flex-shrink-0">3</div>
                  <p>Uluslararası bir hukuk firmasında çalışmak</p>
                </div>
                <div className="flex items-start p-3 bg-gray-50 rounded-lg hover:bg-primary/5 transition-colors">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary mr-4 flex-shrink-0">4</div>
                  <p>Dezavantajlı gruplar için adalet sağlamak</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Yakın Arkadaşlarım */}
      <section id="friends" className="section bg-white/80 px-6 md:px-12 lg:px-24 backdrop-blur-sm">
        <h2 className="section-title">Yakın Arkadaşlarım</h2>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-6 text-center group">
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 mx-auto mb-4 overflow-hidden">
                {/* Arkadaş fotoğrafı için yer tutucu */}
                <div className="w-full h-full flex items-center justify-center text-primary/50 font-bold text-xl">
                  A
                  {/* Gerçek fotoğrafınız olduğunda şu şekilde kullanabilirsiniz:
                  <Image 
                    src="/images/arkadas1.jpg" 
                    alt="Ayşe" 
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  /> */}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-primary">Ayşe</h3>
              <p className="text-sm bg-primary/10 inline-block px-3 py-1 rounded-full text-primary my-2">Çocukluk arkadaşım</p>
              <p className="mt-3">
                İlkokuldan beri tanışıyoruz. Birlikte futbol oynamayı seviyoruz.
              </p>
            </div>
            <div className="card p-6 text-center group">
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 mx-auto mb-4 overflow-hidden">
                {/* Arkadaş fotoğrafı için yer tutucu */}
                <div className="w-full h-full flex items-center justify-center text-primary/50 font-bold text-xl">
                  E
                  {/* Gerçek fotoğrafınız olduğunda şu şekilde kullanabilirsiniz:
                  <Image 
                    src="/images/arkadas2.jpg" 
                    alt="Elif" 
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  /> */}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-primary">Elif</h3>
              <p className="text-sm bg-primary/10 inline-block px-3 py-1 rounded-full text-primary my-2">Sınıf arkadaşım</p>
              <p className="mt-3">
                Müzik zevkimiz çok benzer. Konserlere birlikte gidiyoruz.
              </p>
            </div>
            <div className="card p-6 text-center group">
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 mx-auto mb-4 overflow-hidden">
                {/* Arkadaş fotoğrafı için yer tutucu */}
                <div className="w-full h-full flex items-center justify-center text-primary/50 font-bold text-xl">
                  C
                  {/* Gerçek fotoğrafınız olduğunda şu şekilde kullanabilirsiniz:
                  <Image 
                    src="/images/arkadas3.jpg" 
                    alt="Can" 
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  /> */}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-primary">Can</h3>
              <p className="text-sm bg-primary/10 inline-block px-3 py-1 rounded-full text-primary my-2">Ortaokul arkadaşım</p>
              <p className="mt-3">
                Hukuk konusunda benimle aynı ilgilere sahip. Birlikte ders çalışmayı seviyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sosyal Medya */}
      <section id="social" className="section px-6 md:px-12 lg:px-24">
        <h2 className="section-title">Sosyal Medya Hesaplarım</h2>
        <div className="max-w-7xl mx-auto text-center">
          <div className="card p-8 bg-gradient-to-br from-primary/5 to-secondary/5">
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Aşağıdaki sosyal medya hesaplarımdan beni takip edebilir ve benimle iletişime geçebilirsiniz.
            </p>
            <SocialIcons />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-darkbg text-white py-8 text-center">
        <div className="container mx-auto px-4">
          <p className="mb-4">© 2023 Miray Fidan. Tüm hakları saklıdır.</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-white/70 hover:text-white transition">Gizlilik Politikası</a>
            <span className="text-white/30">|</span>
            <a href="#" className="text-white/70 hover:text-white transition">İletişim</a>
          </div>
        </div>
      </footer>
    </main>
  );
} 