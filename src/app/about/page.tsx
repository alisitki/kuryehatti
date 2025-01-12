import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center py-8 px-4 relative">
      <Head>
        <title>Hakkımızda - Kurye Hattı | İstanbul Kurye Hizmetleri</title>
        <meta
          name="description"
          content="Kurye Hattı olarak İstanbul'da arabalı kurye, acil nakliye ve ekspres kurye hizmetleri sunuyoruz. 2010'dan beri profesyonel teslimat çözümleri."
        />
        <meta name="keywords" content="kurye hattı, arabalı kurye, ekspres kurye, istanbul kurye, acil nakliye, şehir içi teslimat, profesyonel kurye hizmetleri, hızlı kurye, güvenilir kurye" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Hakkımızda - Kurye Hattı | İstanbul Kurye Hizmetleri" />
        <meta property="og:description" content="Kurye Hattı olarak İstanbul'da arabalı kurye, acil nakliye ve ekspres kurye hizmetleri sunuyoruz." />
        <meta property="og:image" content="/doblo.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hakkımızda - Kurye Hattı | İstanbul Kurye Hizmetleri" />
        <meta name="twitter:description" content="Kurye Hattı olarak İstanbul'da arabalı kurye, acil nakliye ve ekspres kurye hizmetleri sunuyoruz." />
        <meta name="twitter:image" content="/doblo.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://kuryehatti.com/about" />
      </Head>

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-[url('/bg2.jpg')] bg-cover bg-center opacity-80 -z-20"
      ></div>

      <Navbar />

      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg  mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Hakkımızda</h1>
        <div className="space-y-4 text-gray-700">
          <p>
            Kurye Hattı olarak, "Kurye", "Arabalı Kurye", "Acil Nakliye" ve "Profesyonel Kurye Hizmetleri" alanlarında yılların verdiği deneyimle müşterilerimize en kaliteli ve güvenilir hizmeti sunmaktayız.
          </p>
          <p>
            2010 yılından bu yana, İstanbul'un her noktasına hızlı ve güvenli teslimat hizmeti vermekteyiz. 
            Profesyonel ekibimiz ve modern araç filomuzla, gönderilerinizi en kısa sürede yerine ulaştırıyoruz.
          </p>
          <p>
            Müşteri memnuniyetini her zaman ön planda tutarak, her geçen gün hizmet kalitemizi daha da yükseltmeyi hedefliyoruz.
            "Ekspres Nakliye" ve "Şehir İçi Teslimat" çözümlerimizle işlerinizi hızlandırıyoruz.
          </p>
          <p>
            Deneyimli kadromuz ve güçlü altyapımızla, sizlere en iyi hizmeti sunmak için çalışıyoruz. 
            Kurye Hattı olarak, müşterilerimizin güvenini kazanmak ve korumak en büyük önceliğimizdir.
          </p>
        </div>
      </div>

      <Link href="/" className="flex items-center">
        <Image 
          src="/logo.svg"
          alt="Kurye Hattı Logo"
          width={180}
          height={180}
          className="rounded-3xl hover:scale-105 transition-transform"
          style={{ filter: "brightness(0) invert(1)" }} // Siyah renk için filtre ekledik
        />
      </Link>
    </div>
  );
};

export default  AboutPage ;