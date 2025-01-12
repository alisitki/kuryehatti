import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Image from "next/image";

const ServicesPage = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center py-8 px-4 relative">
      <Head>
        <title>Hizmetlerimiz - Kurye Hattı | İstanbul Araçlı Kurye ve Nakliye</title>
        <meta
          name="description"
          content="Kurye Hattı olarak araçlı kurye, ekspres nakliye, acil teslimat gibi profesyonel hizmetler sunuyoruz. İstanbul&#39;da 7/24 güvenilir ve hızlı teslimat için bizimle iletişime geçin."
        />
        <meta 
          name="keywords" 
          content="araçlı kurye, ekspres nakliye, acil teslimat, istanbul kurye, hızlı teslimat, güvenilir kurye, profesyonel nakliye, şehir içi kurye, 7/24 kurye hizmeti, kurye hattı hizmetleri" 
        />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kuryehatti.com/services" />
        <meta property="og:title" content="Hizmetlerimiz - Kurye Hattı | İstanbul Araçlı Kurye ve Nakliye" />
        <meta property="og:description" content="İstanbul&#39;da araçlı kurye, ekspres nakliye ve acil teslimat hizmetleri. 7/24 profesyonel kurye çözümleri için hemen arayın." />
        <meta property="og:image" content="/doblo.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://kuryehatti.com/services" />
        <meta name="twitter:title" content="Hizmetlerimiz - Kurye Hattı | İstanbul Araçlı Kurye ve Nakliye" />
        <meta name="twitter:description" content="İstanbul&#39;da araçlı kurye, ekspres nakliye ve acil teslimat hizmetleri. 7/24 profesyonel kurye çözümleri için hemen arayın." />
        <meta name="twitter:image" content="/doblo.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://kuryehatti.com/services" />
      </Head>

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-[url('/bg2.jpg')] bg-cover bg-center opacity-80 -z-20"
      ></div>

      <Navbar />

      <div className="w-full max-w-4xl bg-white/90 p-8 rounded-lg shadow-lg mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Hizmetlerimiz</h1>
        <div className="space-y-8"> {/* grid yerine space-y-8 kullanıyoruz */}
          <div className="space-y-4 p-6 bg-gray-50 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800">Araçlı Kurye</h2>
            <p className="text-gray-700">
              Büyük paketler ve toplu gönderiler için araçlı kurye hizmetimizle yanınızdayız.
              Güvenli ve profesyonel teslimat garantisi ile eşyalarınızı zamanında teslim ediyoruz.
              7/24 hizmet anlayışımızla İstanbul&#39;un her noktasına hizmet veriyoruz.
            </p>
          </div>
          <div className="space-y-4 p-6 bg-gray-50 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800">Ekspres Nakliye</h2>
            <p className="text-gray-700">
              Ev ve ofis eşyalarınız için ekspres nakliye hizmeti sunuyoruz.
              Profesyonel ekibimiz ve özel donanımlı araçlarımızla, eşyalarınızı özenle taşıyoruz.
              Şehir içi ve şehirler arası nakliye hizmetlerimizle yanınızdayız.
            </p>
          </div>
          <div className="space-y-4 p-6 bg-gray-50 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800">Acil Teslimat</h2>
            <p className="text-gray-700">
              Zamanınız mı kısıtlı? Acil teslimat çözümlerimizle, gönderilerinizi tam zamanında teslim ediyoruz.
              Hızlı, güvenilir ve profesyonel hizmet anlayışımızla işlerinizi aksatmadan çözümler sunuyoruz.
            </p>
          </div>
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

export default ServicesPage;