import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp, FaPhone } from "react-icons/fa";
import "@fontsource/montserrat";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center py-8 px-4 relative">
      <Head>
        <title>Kurye Hattı - İstanbul&#39;da Hızlı ve Güvenilir Kurye Hizmeti</title>
        <meta
          name="description"
          content="Kurye Hattı ile İstanbul&#39;da hızlı, güvenilir ve profesyonel kurye hizmetlerinden yararlanın. Araçlı kurye ve ekspres nakliye hizmetleri için 7/24 hizmetinizdeyiz."
        />
        <meta 
          name="keywords" 
          content="kurye hattı, istanbul kurye, araçlı kurye, ekspres kurye, hızlı kurye, güvenilir kurye, acil kurye, şehir içi kurye, motokurye, 7/24 kurye hizmeti, anadolu yakası kurye, avrupa yakası kurye" 
        />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kuryehatti.com/" />
        <meta property="og:title" content="Kurye Hattı - İstanbul&#39;da Hızlı ve Güvenilir Kurye Hizmeti" />
        <meta property="og:description" content="İstanbul&#39;da araçlı kurye ve ekspres nakliye hizmetleri. 7/24 profesyonel kurye çözümleri için hemen arayın." />
        <meta property="og:image" content="/doblo.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://kuryehatti.com/" />
        <meta name="twitter:title" content="Kurye Hattı - İstanbul&#39;da Hızlı ve Güvenilir Kurye Hizmeti" />
        <meta name="twitter:description" content="İstanbul&#39;da araçlı kurye ve ekspres nakliye hizmetleri. 7/24 profesyonel kurye çözümleri için hemen arayın." />
        <meta name="twitter:image" content="/doblo.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://kuryehatti.com/" />
        
        {/* Ek Meta Etiketleri */}
        <meta name="geo.region" content="TR-34" />
        <meta name="geo.placename" content="İstanbul" />
        <meta name="geo.position" content="40.89228690868145;29.189148178710223" />
        <meta name="ICBM" content="40.89228690868145, 29.189148178710223" />
      </Head>

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-[url('/bg2.jpg')] bg-cover bg-center opacity-80 -z-20"
      ></div>

      {/* Navigation */}
      <nav className="w-full max-w-4xl text-center mb-8">
        <ul className="flex justify-center space-x-4">
          <li>
            <Link href="/" legacyBehavior>
              <a className="text-white hover:underline">Ana Sayfa</a>
            </Link>
          </li>
          <li>
            <Link href="/about" legacyBehavior>
              <a className="text-white hover:underline">Hakkımızda</a>
            </Link>
          </li>
          <li>
            <Link href="/services" legacyBehavior>
              <a className="text-white hover:underline">Hizmetlerimiz</a>
            </Link>
          </li>
          <li>
            <Link href="/contact" legacyBehavior>
              <a className="text-white hover:underline">İletişim</a>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Header */}
      <header className="w-full max-w-4xl text-center mb-8">
        <h1 className="text-4xl font-extrabold text-white animate-glow font-sans">
          Kurye Hattı
        </h1>

        <p className="text-lg text-white mt-3 max-w-2xl mx-auto leading-7">
          &ldquo;Hızlı, güvenilir ve profesyonel kurye hizmetimizle gönderileriniz
          her zaman güvende. En hızlı teslimat için hemen bizimle iletişime
          geçin.&rdquo;
        </p>
      </header>

      {/* İletişim Butonları */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
        <a
          href="https://wa.me/905525308282"
          className="flex items-center bg-green-500 text-white px-6 py-3 rounded-lg shadow hover:bg-green-600 hover:scale-105 transition-transform duration-200 focus:ring-2 focus:ring-green-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="mr-2 text-2xl" />
          WhatsApp İle İletişim
        </a>
        <a
          href="tel:+905525308282"
          className="flex items-center bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 hover:scale-105 transition-transform duration-200 focus:ring-2 focus:ring-blue-400"
        >
          <FaPhone className="mr-2 text-2xl" />
          Telefonla Ara
        </a>
      </div>

      {/* Görsel / Hero Image */}
      <div className="relative w-full max-w-3xl h-64 mb-8 rounded-md overflow-hidden shadow-lg">
        <Image
          src="/doblo.jpg"
          alt="Ticari Araç"
          layout="fill"
          objectFit="cover"
          className="object-contain transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>

      {/* Hizmet Açıklaması */}
      <section className="w-full max-w-3xl bg-white rounded-lg shadow p-6 text-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Profesyonel Kurye Hizmeti
        </h2>
        <p className="text-gray-700 leading-7">
          İster bireysel gönderi ister kurumsal teslimat ihtiyacınız olsun,
          Kurye Hattı olarak en hızlı ve güvenilir çözümleri sunuyoruz.
          Deneyimli ekibimiz ve geniş araç filomuzla, acil teslimatlarda bile
          işinizi aksatmadan gönderilerinizi yerine ulaştırıyoruz.
        </p>
      </section>

      <div className="relative w-full max-w-3xl h-96 mb-8 rounded-md overflow-hidden shadow-lg">
        <Image
          src="/araba2.jpg"
          alt="Ticari Araç"
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>

      {/* Harita */}
      <section className="w-full max-w-4xl ">
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <h3 className="text-xl font-medium text-gray-800 mb-4">Konumumuz</h3>
          <div className="w-full h-96 overflow-hidden rounded-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d634.0505404353444!2d29.189148178710223!3d40.89228690868145!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1736584159448!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      <Link href="/" className="flex items-center mt-10">
        <Image 
          src="/logo.svg"
          alt="Kurye Hattı Logo"
          width={180}
          height={180}
          className="rounded-3xl hover:scale-105 transition-transform"
          style={{ filter: "brightness(0) invert(1)" }}
        />
      </Link>

      {/* Footer */}
      <footer className="w-full max-w-4xl text-center text-white text-sm mt-8">
        <p>© {new Date().getFullYear()} Kurye Hattı. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
};

export default HomePage;
