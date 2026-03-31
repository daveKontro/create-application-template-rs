const { existsSync, writeFileSync } = require('fs')
const path = require('path')
const packageJson = require('../package.json')

const now = new Date().toISOString()
const sitemapPath = path.resolve(__dirname, '../src/public/sitemap.xml')
const baseUrl = packageJson.url || 'https://www.createapplicationtemplate.com/'

if (existsSync(sitemapPath)) {
  console.info('📝 overwriting existing sitemap.xml')
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${baseUrl}</loc>
      <lastmod>${now}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>1.0</priority>
    </url>
  </urlset>`

writeFileSync(sitemapPath, sitemap.trim())

console.info('✅ sitemap.xml updated with lastmod:', now)
