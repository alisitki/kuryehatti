// pages/index.tsx

import React from "react";
import Image from "next/image";
import { FaWhatsapp, FaPhone } from "react-icons/fa";
import "@fontsource/montserrat";



const HomePage: React.FC = () => {
  return (
    <div
      className="min-h-screen w-full  flex flex-col items-center py-8 px-4 relative"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-[url('/bg2.jpg')] bg-cover bg-center opacity-80 -z-20"
      ></div>

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

      {/* Görsel / Hero Image */}
      <div className="relative w-full max-w-3xl h-64 mb-8 rounded-md overflow-hidden shadow-lg">
        <Image
          src="/doblo.jpg" // Kendi görselinizin yolunu düzenleyin
          alt="Ticari Araç"
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 ease-in-out hover:scale-105"
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

      {/* İletişim Butonları */}
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <a
          href="https://wa.me/905369308282" // WhatsApp numarası buraya eklenecek
          className="flex items-center bg-green-500 text-white px-6 py-3 rounded-lg shadow hover:bg-green-600 hover:scale-105 transition-transform duration-200 focus:ring-2 focus:ring-green-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="mr-2 text-2xl" />
          WhatsApp İle İletişim
        </a>
        <a
          href="tel:+905369308282" // Telefon numarası buraya eklenecek
          className="flex items-center bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 hover:scale-105 transition-transform duration-200 focus:ring-2 focus:ring-blue-400"
        >
          <FaPhone className="mr-2 text-2xl" />
          Telefonla Ara
        </a>
      </div>

      {/* Ek Bilgi (opsiyonel) */}
      <section className="w-full max-w-4xl mt-12">
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <h3 className="text-xl font-medium text-gray-800 mb-2">
            Neden Bizi Tercih Etmelisiniz?
          </h3>
          <ul className="text-gray-700 leading-7 list-inside list-disc text-left max-w-md mx-auto">
          <li className="mb-1">7/24 hızlı ve güvenilir teslimat</li>
  <li className="mb-1">Uygun fiyatlandırma ve şeffaf süreç</li>
  <li className="mb-1">Güler yüzlü ve deneyimli kurye ekibi</li>
  <li className="mb-1">Tüm Türkiye&apos;ye geniş teslimat ağı</li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full max-w-4xl text-center text-white text-sm mt-8">
        <p>© {new Date().getFullYear()} Kurye Hattı. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
};

export default HomePage;
