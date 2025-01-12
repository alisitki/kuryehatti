// src/pages/api/sitemap.js
import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";

const sitemapHandler = async (req, res) => {
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
    }
  ];

  const stream = new SitemapStream({ 
    hostname: `https://kuryehatti.com`,
    lastmodDateOnly: true
  });

  const xml = await streamToPromise(Readable.from(links).pipe(stream)).then(
    (data) => data.toString()
  );

  res.writeHead(200, {
    "Content-Type": "application/xml",
    "Content-Length": Buffer.byteLength(xml),
    "Cache-Control": "public, max-age=86400"
  });
  res.end(xml);
};

export default sitemapHandler;