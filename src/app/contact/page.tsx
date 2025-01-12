import React from "react";
import Navbar from "../components/Navbar";
import Head from "next/head";
import { FaWhatsapp, FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
const ContactPage = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center py-8 px-4 relative">
            <Head>
        <title>İletişim - Kurye Hattı | İstanbul Kurye İletişim</title>
        <meta
          name="description"
          content="Kurye Hattı iletişim bilgileri. İstanbul'da arabalı kurye, acil nakliye ve ekspres kurye hizmetlerimiz için 7/24 bize ulaşabilirsiniz. WhatsApp ve telefon ile hemen iletişime geçin."
        />
        <meta 
          name="keywords" 
          content="kurye iletişim, istanbul kurye telefon, kurye whatsapp, acil kurye iletişim, arabalı kurye iletişim, ekspres kurye iletişim, istanbul kurye numarası, 7/24 kurye hizmeti" 
        />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kuryehatti.com/contact" />
        <meta property="og:title" content="İletişim - Kurye Hattı | İstanbul Kurye İletişim" />
        <meta property="og:description" content="İstanbul'da arabalı kurye, acil nakliye ve ekspres kurye hizmetlerimiz için 7/24 bize ulaşabilirsiniz. WhatsApp ve telefon ile hemen iletişime geçin." />
        <meta property="og:image" content="/doblo.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://kuryehatti.com/contact" />
        <meta name="twitter:title" content="İletişim - Kurye Hattı | İstanbul Kurye İletişim" />
        <meta name="twitter:description" content="İstanbul'da arabalı kurye, acil nakliye ve ekspres kurye hizmetlerimiz için 7/24 bize ulaşabilirsiniz." />
        <meta name="twitter:image" content="/doblo.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://kuryehatti.com/contact" />
        
        {/* Ek Meta Etiketleri */}
        <meta name="geo.region" content="TR-34" />
        <meta name="geo.placename" content="İstanbul" />
        <meta name="geo.position" content="40.89228690868145;29.189148178710223" />
        <meta name="ICBM" content="40.89228690868145, 29.189148178710223" />
      </Head>

      <div className="absolute inset-0 bg-[url('/bg2.jpg')] bg-cover bg-center opacity-80 -z-20"></div>

      <Navbar />

      <div className="w-full max-w-4xl bg-white/90 p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">İletişim</h1>

        <div className="flex flex-col items-center mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">İletişim Bilgileri</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <FaPhone className="text-blue-500 text-xl" />
              <a href="tel:+905525308282" className="text-gray-700 hover:text-blue-500">
                +90 552 530 82 82
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <FaWhatsapp className="text-green-500 text-xl" />
              <a
                href="https://wa.me/905525308282"
                className="text-gray-700 hover:text-green-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp İletişim
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-purple-500 text-xl" />
              <span className="text-gray-700">İstanbul, Türkiye</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-red-500 text-xl" />
              <a
                href="mailto:info@kuryehatti.com"
                className="text-gray-700 hover:text-red-500"
              >
                info@kuryehatti.com
              </a>
            </div>
          </div>
        </div>

        <div className="w-full h-96 rounded-lg overflow-hidden ">
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
      <Link href="/" className="flex items-center mt-10">
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

export default ContactPage;
