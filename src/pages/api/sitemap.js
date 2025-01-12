// pages/api/sitemap.js
import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";

export default async (req, res) => {
  const links = [
    { 
      url: "/", 
      changefreq: "daily", 
      priority: 1.0,
      lastmod: new Date().toISOString() 
    },
    { 
      url: "/about", 
      changefreq: "weekly", 
      priority: 0.8,
      lastmod: new Date().toISOString()
    },
    { 
      url: "/services", 
      changefreq: "weekly", 
      priority: 0.8,
      lastmod: new Date().toISOString()
    },
    { 
      url: "/contact", 
      changefreq: "monthly", 
      priority: 0.7,
      lastmod: new Date().toISOString()
    },
    // Hizmet alt sayfaları eklenebilir
    {
      url: "/services/aracli-kurye",
      changefreq: "weekly",
      priority: 0.8
    },
    {
      url: "/services/ekspres-nakliye",
      changefreq: "weekly",
      priority: 0.8
    }
  ];

  const stream = new SitemapStream({ 
    hostname: `https://kuryehatti.com`,
    lastmodDateOnly: true // Sadece tarih, saat olmadan
  });

  const xml = await streamToPromise(Readable.from(links).pipe(stream)).then(
    (data) => data.toString()
  );

  res.writeHead(200, {
    "Content-Type": "application/xml",
    "Content-Length": Buffer.byteLength(xml),
    "Cache-Control": "public, max-age=86400" // 24 saat cache
  });
  res.end(xml);
};