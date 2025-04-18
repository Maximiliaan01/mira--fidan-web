# Miray Fidan Kişisel Web Sitesi

Bu proje Miray Fidan için geliştirilmiş kişisel bir websitesidir.

## Özellikler

- Kişisel tanıtım ve hakkında sayfası
- Çalışmalar ve projeler galerisi
- İletişim formu
- Yönetici paneli ile içerik düzenleme imkanı

## Kurulum

```bash
# Projeyi klonlayın
git clone [repo-url]

# Proje dizinine gidin
cd miray-website

# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev
```

## Dağıtım (Deployment)

Bu site Vercel üzerinde yayınlanmak üzere yapılandırılmıştır.

### Vercel CLI ile Dağıtım

1. Vercel CLI kurun (zaten bir devDependency olarak eklenmiştir):
```bash
npm install -g vercel
```

2. Vercel hesabınızda oturum açın:
```bash
vercel login
```

3. Projeyi deploy edin:
```bash
npm run deploy
```

veya

```bash
vercel --prod
```

### Vercel Dashboard ile Dağıtım

1. [vercel.com](https://vercel.com) adresinde bir hesap oluşturun
2. Yeni bir proje oluşturun
3. GitHub, GitLab veya Bitbucket hesabınızı bağlayın
4. Bu repoyu seçin
5. Vercel otomatik olarak yapılandırmaları tanıyacak ve siteyi yayınlayacaktır

## Yönetici Girişi

Siteye yönetici olarak girmek için:

1. Sağ üst köşedeki kullanıcı ikonuna tıklayın
2. Aşağıdaki bilgilerle giriş yapın:
   - Kullanıcı adı: `mirayfidan`
   - Şifre: `mirayfidan2006`

## Geliştirme

Bu proje şu teknolojilerle geliştirilmiştir:
- Next.js
- React
- Tailwind CSS
- Vercel Deployment

## Lisans

Özel kullanım için - Tüm hakları saklıdır © Miray Fidan 